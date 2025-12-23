// src/hooks/useBlogs.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface Blog {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

export const useBlogs = () => {
  const queryClient = useQueryClient();

  // Fetch all blogs
const allBlogs = useQuery<Blog[], Error>({
  queryKey: ["blogs"],
  queryFn: async () => {
    const { data } = await api.get<{ message: string; blogs: Blog[] }>("/blogs");
    return data.blogs; 
  },
});


  // Create a blog
const createBlog = useMutation<Blog, Error, FormData>({
  mutationFn: async (formData: FormData) => {
    const { data } = await api.post<Blog>("/blogs", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["blogs"] });
  },
});


  // Update a blog
// Update a blog
const updateBlog = useMutation<
  Blog,
  Error,
  { id: string; formData: FormData } 
>({
  mutationFn: async ({ id, formData }) => {
    const { data } = await api.put<Blog>(`/blogs/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["blogs"] });
  },
});


  // Delete a blog
  const deleteBlog = useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await api.delete(`/blogs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });

  return { allBlogs, createBlog, updateBlog, deleteBlog };
};
