import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface RkclEnquire {
  _id: string;
  name: string;
  email: string;
  number: string;
  district: string;
  tehsil: string;
  city: string;
  pinCode: string;
  course: string;
  status?: "pending" | "processing" | "completed" | "cancelled"|"loading";
  createdAt?: string;
  updatedAt?: string;
}

export type CreateRkclInput = Omit<RkclEnquire, "_id" | "createdAt" | "updatedAt">;

const useRkclEnquire = () => {
  const queryClient = useQueryClient();

  // Fetch all enquiries
  const allEnquiries = useQuery<RkclEnquire[], Error>({
    queryKey: ["rkclEnquiries"],
    queryFn: async () => {
      const { data } = await api.get("/RkclEnquire");
      return Array.isArray(data.data) ? data.data : [];
    },
    initialData: [],
  });

  // Create enquiry
  const createEnquiry = useMutation<RkclEnquire, Error, CreateRkclInput>({
    mutationFn: async (newEnquiry) => {
      const { data } = await api.post("/RkclEnquire", newEnquiry);
      return data.data;
    },
    onSuccess: (newEnquiry) => {
      queryClient.setQueryData<RkclEnquire[]>(["rkclEnquiries"], (old = []) => [...old, newEnquiry]);
    },
  });

  // Update enquiry
  const updateEnquiry = useMutation<RkclEnquire, Error, RkclEnquire>({
    mutationFn: async (updatedEnquiry) => {
      const { data } = await api.put(`/RkclEnquire/${updatedEnquiry._id}`, updatedEnquiry);
      return data.data;
    },
    onSuccess: (updatedEnquiry) => {
      queryClient.setQueryData<RkclEnquire[]>(["rkclEnquiries"], (old = []) =>
        old.map((e) => (e._id === updatedEnquiry._id ? updatedEnquiry : e))
      );
    },
  });

  // Delete enquiry
  const deleteEnquiry = useMutation<string, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/RkclEnquire/${id}`);
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<RkclEnquire[]>(["rkclEnquiries"], (old = []) =>
        old.filter((e) => e._id !== id)
      );
    },
  });

  return {
    allEnquiries,
    createEnquiry, 
    updateEnquiry,
    deleteEnquiry,
  };
};

export default useRkclEnquire;
