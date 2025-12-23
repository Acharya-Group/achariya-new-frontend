// hooks/useStationery.ts
import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export interface Stationery {
  _id: string;
  name: string;
  rateOnLessQuantity: number;
  quantityThreshold: number;
  rateOnGreaterQuantity: number;
  createdAt?: string;
  updatedAt?: string;
}

// Type for creating a stationery item (exclude _id, timestamps)
type CreateStationeryInput = Omit<Stationery, "_id" | "createdAt" | "updatedAt">;

export const useStationery = () => {
  const queryClient = useQueryClient();

  // Fetch all stationery items
  const allStationery = useQuery<Stationery[], Error>({
    queryKey: ["stationery"],
    queryFn: async () => {
      const { data } = await api.get("/StationeryRate");
      return Array.isArray(data.data) ? data.data : [];
    },
    initialData: [],
  });

  // Create a stationery item
  const createStationery = useMutation<Stationery, Error, CreateStationeryInput>({
    mutationFn: async (newItem) => {
      const { data } = await api.post("/StationeryRate", newItem);
      return data.data;
    },
    onSuccess: (newItem) => {
      queryClient.setQueryData<Stationery[]>(["stationery"], (old = []) => [...old, newItem]);
    },
  });

  // Update a stationery item
  const updateStationery = useMutation<Stationery, Error, Stationery>({
    mutationFn: async (updatedItem) => {
      const { data } = await api.put(`/StationeryRate/${updatedItem._id}`, updatedItem);
      return data.data;
    },
    onSuccess: (updatedItem) => {
      queryClient.setQueryData<Stationery[]>(["stationery"], (old = []) =>
        old.map((item) => (item._id === updatedItem._id ? updatedItem : item))
      );
    },
  });

  // Delete a stationery item
  const deleteStationery = useMutation<string, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/StationeryRate/${id}`);
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<Stationery[]>(["stationery"], (old = []) =>
        old.filter((item) => item._id !== id)
      );
    },
  });

  return {
    allStationery,
    createStationery,
    updateStationery,
    deleteStationery,
  };
};

export default useStationery;
