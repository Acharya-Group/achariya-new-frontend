"use client";
import React, { useState, useEffect } from "react";
import Video from "../gallery/Video";
import { useGallery } from "@/hooks/gallery";
import Image from "next/image";

const Gallery = () => {
  const { allGalleries } = useGallery();
  const [tabs, setTabs] = useState<{ id: string; title: string }[]>([]);
  const [activeTab, setActiveTab] = useState<string>("videos");

  // ✅ Load dynamic categories when data is fetched
  useEffect(() => {
    if (allGalleries.isSuccess && allGalleries.data) {
      const dynamicTabs = allGalleries.data.map((gallery) => ({
        id: gallery._id,
        title: gallery.category,
      }));
      // "Videos" ko static rakho, baaki backend se add karo
      setTabs([{ id: "videos", title: "Videos" }, ...dynamicTabs]);
    }
  }, [allGalleries.isSuccess, allGalleries.data]);

  // ✅ Render active tab content
  const renderContent = () => {
    if (activeTab === "videos") {
      return <Video />;
    }

    const activeGallery = allGalleries.data?.find((g) => g._id === activeTab);
    if (!activeGallery) return <p>No images found.</p>;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activeGallery.images.map((img) => (
          <div
            key={img._id}
            className="overflow-hidden rounded-xl shadow-md border"
          >
            <Image
              src={img.url}
              alt={activeGallery.category}
              width={400}
              height={300}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg uppercase cursor-pointer font-medium transition-all duration-300
              ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-secondary text-white hover:bg-primary"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {allGalleries.isLoading && <p>Loading...</p>}
        {allGalleries.isError && <p>Error: {allGalleries.error?.message}</p>}
        {!allGalleries.isLoading && renderContent()}
      </div>
    </div>
  );
};

export default Gallery;
