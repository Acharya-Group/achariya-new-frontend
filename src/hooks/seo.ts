// hooks/useSeo.ts
import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export interface SeoData {
  _id?: string;
  title: string;
  keywords: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export type SeoInput = Omit<SeoData, "_id" | "createdAt" | "updatedAt">;

const useSeo = () => {
  const queryClient = useQueryClient();

  // ✅ Fetch SEO (singleton)
  const seoQuery = useQuery<SeoData | null, Error>({
    queryKey: ["seo"],
    queryFn: async () => {
      const { data } = await api.get("/Seo");
      return data.data || null;
    },
    initialData: null,
  });

  // ✅ Create or update SEO
  const upsertSeo = useMutation<SeoData, Error, SeoInput>({
    mutationFn: async (seoInput) => {
      const { data } = await api.post("/Seo", seoInput); 
      return data.data;
    },
    onSuccess: (newSeo) => {
      queryClient.setQueryData<SeoData | null>(["seo"], newSeo);
    },
  });

  return { seoQuery, upsertSeo };
};

export default useSeo;
