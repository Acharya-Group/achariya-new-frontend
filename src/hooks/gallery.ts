import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface ImageType {
  url: string;
  publicId: string;
  _id?: string;
}

export interface Gallery {
  _id: string;
  category: string;
  images: ImageType[];
}

// ✅ Custom hook to fetch a single gallery by ID
export const useSingleGallery = (categoryId: string) => {
  return useQuery<Gallery, Error>({
    queryKey: ["gallery", categoryId],
    queryFn: async () => {
      const { data } = await api.get(`/gallery/${categoryId}`);
      return data.data;
    },
    enabled: !!categoryId,
  });
};

export const useGallery = () => {
  const queryClient = useQueryClient();

  // 1️⃣ Fetch all galleries
  const allGalleries = useQuery<Gallery[], Error>({
    queryKey: ["galleries"],
    queryFn: async () => {
      const { data } = await api.get("/gallery");
      return data.data;
    },
  });

  // 3️⃣ Create a category without images
  const createCategory = useMutation<void, Error, { category: string }>({
    mutationFn: ({ category }) => api.post("/gallery/create-category", { category }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["galleries"] }),
  });

  // 4️⃣ Add images to an existing category
  const addImagesToCategory = useMutation<void, Error, { category: string; images: File[] }>({
    mutationFn: ({ category, images }) => {
      const formData = new FormData();
      images.forEach((img) => formData.append("images", img));
      formData.append("category", category);
      return api.post("/gallery/add-images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["galleries"] }),
  });

  // 5️⃣ Update a specific image
  const updateImage = useMutation<void, Error, { categoryId: string; imageId: string; image: File }>({
    mutationFn: ({ categoryId, imageId, image }) => {
      const formData = new FormData();
      formData.append("image", image);
      return api.put(`/gallery/${categoryId}/image/${imageId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["galleries"] });
      queryClient.invalidateQueries({ queryKey: ["gallery", variables.categoryId] });
    },
  });

  // 6️⃣ Delete a specific image
  const deleteImage = useMutation<void, Error, { categoryId: string; imageId: string }>({
    mutationFn: ({ categoryId, imageId }) => api.delete(`/gallery/${categoryId}/image/${imageId}`),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["galleries"] });
      queryClient.invalidateQueries({ queryKey: ["gallery", variables.categoryId] });
    },
  });

  // 7️⃣ Delete entire category
  const deleteGallery = useMutation<void, Error, string>({
    mutationFn: (categoryId) => api.delete(`/gallery/${categoryId}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["galleries"] }),
  });

  return {
    allGalleries,
    useSingleGallery,
    createCategory,
    addImagesToCategory,
    updateImage,
    deleteImage,
    deleteGallery,
  };
};
