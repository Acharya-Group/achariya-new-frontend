import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface Slider {
  _id: string;
  image: string;
  link: string;
  createdAt?: string;
  updatedAt?: string;
}

export const useSlider = () => {
  const queryClient = useQueryClient();

  // Get all sliders
  const allSliders = useQuery<Slider[], Error>({
    queryKey: ["sliders"],
    queryFn: async () => {
      const { data } = await api.get<{ message: string; sliders: Slider[] }>(
        "/slider"
      );
      return data.sliders;
    },
  });

  // Add new slide
  const addSlider = useMutation<void, Error, { image: File; link: string }>({
    mutationFn: ({ image, link }) => {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("link", link);
      return api.post("/slider", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["sliders"],
      }),
  });

  // Delete Slider
  const deleteSlider = useMutation<void, Error, string>({
    mutationFn: (id: string) => api.delete(`/slider/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["sliders"],
      }),
  });

  // Update Slider (✅ link + image both, image optional)
  const updateSlider = useMutation<
    void,
    Error,
    { id: string; image?: File; link: string }
  >({
    mutationFn: ({ id, image, link }) => {
      const formData = new FormData();
      if (image) formData.append("image", image); // only if selected
      formData.append("link", link);

      return api.put(`/slider/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["sliders"],
      }),
  });

  return { allSliders, addSlider, deleteSlider, updateSlider };
};
