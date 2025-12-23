"use client";

import AdminLayout from "@/componets/admin/AdminLayout";
import React, { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import { useVideo } from "@/hooks/video";

const Page: React.FC = () => {
  const { addVideo } = useVideo();
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!videoUrl.trim()) return toast.error("Video URL cannot be empty!");

    setLoading(true);
    addVideo.mutate(
      { VideoUrl: videoUrl },
      {
        onSuccess: () => {
          toast.success("Video added successfully!");
          setVideoUrl("");
          setLoading(false);
        },
        onError: () => {
          toast.error("Failed to add video!");
          setLoading(false);
        },
      }
    );
  };

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">Add Video</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Video URL Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Video URL
            </label>
            <input
              type="text"
              placeholder="Enter video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
                hover:border-[#7a0706] transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-secondary cursor-pointer text-white py-2 px-4 rounded-lg 
              shadow-md hover:bg-primary transition transform hover:scale-[1.02] disabled:opacity-50`}
          >
            {loading ? "Adding..." : "Submit"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Page;
