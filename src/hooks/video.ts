import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface Video {
  _id: string;
  VideoUrl: string;
  createdAt?: string;
  updatedAt?: string;
}

export const useVideo = () => {
  const queryClient = useQueryClient();

  // Get all videos
  const allVideos = useQuery<Video[], Error>({
    queryKey: ["videos"],
    queryFn: async () => {
      try {
        const { data } = await api.get<{ success: boolean; message: string; data: Video[] }>("/Video");
        return data.data || []; 
      } catch{
        throw new Error("Failed to fetch videos");
      }
    },
  });

  // Add video
  const addVideo = useMutation<void, Error, { VideoUrl: string }>({
    mutationFn: ({ VideoUrl }) => api.post("/Video", { VideoUrl }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["videos"] })
,
  });

  // Delete video
  const deleteVideo = useMutation<void, Error, string>({
    mutationFn: (id: string) => api.delete(`/Video/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["videos"] })
,
  });

  // Update video
  const updateVideo = useMutation<void, Error, { id: string; VideoUrl: string }>({
    mutationFn: ({ id, VideoUrl }) => api.put(`/Video/${id}`, { VideoUrl }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["videos"] })
,
  });

  return { allVideos, addVideo, deleteVideo, updateVideo };
};
