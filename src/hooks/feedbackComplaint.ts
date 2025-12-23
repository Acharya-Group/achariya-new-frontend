import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface FeedbackComplaint {
  _id: string;
  name: string;
  number: string;
  district: string;
  state: string;
  formType: string;
  subject: string;
  message: string;
  status?: "pending" | "resolved" | "loading";
  createdAt?: string;
  updatedAt?: string;
}

export type CreateFeedbackInput = Omit<FeedbackComplaint, "_id" | "createdAt" | "updatedAt">;

const useFeedbackComplaint = () => {
  const queryClient = useQueryClient();

  // Fetch all feedbacks
  const allFeedbacks = useQuery<FeedbackComplaint[], Error>({
    queryKey: ["feedbackComplaints"],
    queryFn: async () => {
      const { data } = await api.get("/FeedbackAndComplain");
      return Array.isArray(data.data) ? data.data : [];
    },
    initialData: [],
  });

  // Create feedback/complaint
  const createFeedback = useMutation<FeedbackComplaint, Error, CreateFeedbackInput>({
    mutationFn: async (newFeedback) => {
      const { data } = await api.post("/FeedbackAndComplain", newFeedback);
      return data.data;
    },
    onSuccess: (newFeedback) => {
      queryClient.setQueryData<FeedbackComplaint[]>(["feedbackComplaints"], (old = []) => [...old, newFeedback]);
    },
  });

  // Update only status
  const updateFeedback = useMutation<FeedbackComplaint, Error, { _id: string; status: FeedbackComplaint["status"] }>({
    mutationFn: async (updateData) => {
      const { data } = await api.put(`/FeedbackAndComplain/${updateData._id}`, updateData);
      return data.data;
    },
    onSuccess: (updatedFeedback) => {
      queryClient.setQueryData<FeedbackComplaint[]>(["feedbackComplaints"], (old = []) =>
        old.map((f) => (f._id === updatedFeedback._id ? updatedFeedback : f))
      );
    },
  });

  // Delete feedback/complaint
  const deleteFeedback = useMutation<string, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/FeedbackAndComplain/${id}`);
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<FeedbackComplaint[]>(["feedbackComplaints"], (old = []) =>
        old.filter((f) => f._id !== id)
      );
    },
  });

  return {
    allFeedbacks,
    createFeedback,
    updateFeedback,
    deleteFeedback,
  };
};

export default useFeedbackComplaint;
