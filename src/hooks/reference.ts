import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export interface Reference {
  _id: string;
  referenceNo: string;
  date: string;
  issuedTo: string;
  issuedBy: string;
  subject: string;
  createdAt?: string;
  updatedAt?: string;
}

// Type for creating a reference (exclude _id, createdAt, updatedAt)
type CreateReferenceInput = Omit<Reference, "_id" | "createdAt" | "updatedAt">;

const useReference = () => {
  const queryClient = useQueryClient();

  // Fetch all references
  const allReference = useQuery<Reference[], Error>({
    queryKey: ["reference"],
    queryFn: async () => {
      const { data } = await api.get("/Reference");
      return Array.isArray(data.data) ? data.data : [];
    },
    initialData: [],
  });

  // Create a reference
  const createReference = useMutation<Reference, Error, CreateReferenceInput>({
    mutationFn: async (newRef) => {
      const { data } = await api.post("/Reference", newRef);
      return data.data;
    },
    onSuccess: (newRef) => {
      queryClient.setQueryData<Reference[]>(["reference"], (old = []) => [...old, newRef]);
    },
  });

  // Update a reference
  const updateReference = useMutation<Reference, Error, Reference>({
    mutationFn: async (updatedRef) => {
      const { data } = await api.put(`/Reference/${updatedRef._id}`, updatedRef);
      return data.data;
    },
    onSuccess: (updatedRef) => {
      queryClient.setQueryData<Reference[]>(["reference"], (old = []) =>
        old.map((ref) => (ref._id === updatedRef._id ? updatedRef : ref))
      );
    },
  });

  // Delete a reference
  const deleteReference = useMutation<string, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/Reference/${id}`);
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<Reference[]>(["reference"], (old = []) =>
        old.filter((ref) => ref._id !== id)
      );
    },
  });

  return {
    allReference,
    createReference,
    updateReference,
    deleteReference,
  };
};

export default useReference;
