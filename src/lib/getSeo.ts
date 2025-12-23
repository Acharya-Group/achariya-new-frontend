// lib/getSeo.ts
export interface SeoData {
  title: string;
  keywords: string;
  description: string;
}

export async function getSeo(): Promise<SeoData | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Seo`);
    const data = await res.json();
    return data.data || null;
  } catch (err) {
    console.error("Failed to fetch SEO", err);
    return null;
  }
}
