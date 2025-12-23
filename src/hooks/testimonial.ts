// src/hooks/useTestimonials.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface Testimonial {
  _id: string;
  name: string;
  description: string;
  Image: string;
  createdAt?: string;
  updatedAt?: string;
}

export const useTestimonials = () => {
  const queryClient = useQueryClient();

  // Fetch all testimonials
  const allTestimonials = useQuery<Testimonial[], Error>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await api.get<{ message: string; testimonials: Testimonial[] }>("/Testimonial");
      return data.testimonials;
    },
  });

  // Create a testimonial
  const createTestimonial = useMutation<Testimonial, Error, FormData>({
    mutationFn: async (formData: FormData) => {
      const { data } = await api.post<Testimonial>("/Testimonial", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
  });

  // Update a testimonial
  const updateTestimonial = useMutation<
    Testimonial,
    Error,
    { id: string; formData: FormData }
  >({
    mutationFn: async ({ id, formData }) => {
      const { data } = await api.put<Testimonial>(`/Testimonial/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
  });

  // Delete a testimonial
  const deleteTestimonial = useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await api.delete(`/Testimonial/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
  });

  return { allTestimonials, createTestimonial, updateTestimonial, deleteTestimonial };
};
