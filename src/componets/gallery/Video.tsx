"use client";

import React, { useEffect, useState } from "react";
import { useVideo } from "@/hooks/video";

const Video = () => {
  const { allVideos } = useVideo();
  const [loading, setLoading] = useState(true);

  // Simulate skeleton effect until API data arrives
  useEffect(() => {
    if (!allVideos.isLoading) {
      const timer = setTimeout(() => setLoading(false), 1500); // delay skeleton effect
      return () => clearTimeout(timer);
    }
  }, [allVideos.isLoading]);

  // Convert YouTube links to embeddable format
  const toEmbedUrl = (url: string) => {
    try {
      if (!url) return "";
      if (url.includes("youtu.be/")) {
        const id = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      const u = new URL(url);
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
      if (url.includes("embed")) return url;
      return url; // fallback
    } catch {
      return url;
    }
  };

  if (allVideos.isError) {
    return (
      <div className="text-center text-red-500 py-6">
        Error: {allVideos.error?.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      {/* Grid of Videos or Skeleton Loaders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading || allVideos.isLoading ? (
          // Skeleton loading state
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md bg-white"
            >
              <div className="relative pb-[56.25%] bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded-full w-3/4 mb-2 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded-full w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))
        ) : (
          // Loaded video content
          allVideos.data?.map((video) => (
            <div
              key={video._id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white"
            >
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={toEmbedUrl(video.VideoUrl)}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Video ${video._id}`}
                ></iframe>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Video;
