import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface Popup {
  _id: string;
  image: string;
  link: string;
  createdAt?: string;
  updatedAt?: string;
}

export const usePopup = () => {
  const queryClient = useQueryClient();

  // 🔹 Get all popups
  const allPopups = useQuery<Popup[], Error>({
    queryKey: ["popups"],
    queryFn: async () => {
      const { data } = await api.get<{ message: string; popups: Popup[] }>(
        "/Popup"
      );
      return data.popups;
    },
  });

  // 🔹 Add new popup
  const addPopup = useMutation({
    mutationFn: async ({ image, link }: { image: File; link: string }) => {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("link", link);
      await api.post("/Popup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["popups"] });
    },
  });

  // 🔹 Delete popup
  const deletePopup = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/Popup/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["popups"] });
    },
  });

  // 🔹 Update popup (image optional ✅)
  const updatePopup = useMutation({
    mutationFn: async ({
      id,
      image,
      link,
    }: {
      id: string;
      image?: File;
      link: string;
    }) => {
      const formData = new FormData();
      if (image) formData.append("image", image); // only append if new file
      formData.append("link", link);

      await api.put(`/Popup/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["popups"] });
    },
  });

  return { allPopups, addPopup, deletePopup, updatePopup };
};
