// hooks/useContact.ts
import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export interface Contact {
  _id: string;
  name: string;
  number: string;
  district: string;
  state: string;
  message: string;
  status?: "pending" | "resolve";
  createdAt?: string;
  updatedAt?: string;
}

// ✅ Export this type so components can use it
export type CreateContactInput = Omit<Contact, "_id" | "createdAt" | "updatedAt">;

const useContact = () => {
  const queryClient = useQueryClient();

  // ✅ Fetch all contacts
  const allContacts = useQuery<Contact[], Error>({
    queryKey: ["contacts"],
    queryFn: async () => {
      const { data } = await api.get("/Contact");
      return Array.isArray(data.data) ? data.data : [];
    },
    initialData: [],
  });

  // ✅ Create contact
  const createContact = useMutation<Contact, Error, CreateContactInput>({
    mutationFn: async (newContact) => {
      const { data } = await api.post("/Contact", newContact);
      return data.data;
    },
    onSuccess: (newContact) => {
      queryClient.setQueryData<Contact[]>(["contacts"], (old = []) => [...old, newContact]);
    },
  });

  // ✅ Update contact (e.g., status)
  const updateContact = useMutation<Contact, Error, Contact>({
    mutationFn: async (updatedContact) => {
      const { data } = await api.put(`/Contact/${updatedContact._id}`, updatedContact);
      return data.data;
    },
    onSuccess: (updatedContact) => {
      queryClient.setQueryData<Contact[]>(["contacts"], (old = []) =>
        old.map((c) => (c._id === updatedContact._id ? updatedContact : c))
      );
    },
  });

  // ✅ Delete contact
  const deleteContact = useMutation<string, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/Contact/${id}`);
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<Contact[]>(["contacts"], (old = []) =>
        old.filter((c) => c._id !== id)
      );
    },
  });

  return {
    allContacts,
    createContact,
    updateContact,
    deleteContact,
  };
};

export default useContact;
