"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { useVideo, Video } from "@/hooks/video";

const Page: React.FC = () => {
  const { allVideos, deleteVideo, updateVideo } = useVideo();
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [editVideoUrl, setEditVideoUrl] = useState("");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (allVideos.isLoading)
    return (
      <AdminLayout>
        <p className="text-center mt-4">Loading videos...</p>
      </AdminLayout>
    );

  if (allVideos.isError)
    return (
      <AdminLayout>
        <p className="text-center mt-4 text-red-500">
          Error: {allVideos.error?.message}
        </p>
      </AdminLayout>
    );

  const videos = allVideos.data || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = videos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(videos.length / itemsPerPage);

  // Convert normal or short YouTube URL to embed URL
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

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return;
    deleteVideo.mutate(id, {
      onSuccess: () => toast.success("Video deleted successfully!"),
      onError: () => toast.error("Failed to delete video!"),
    });
  };

  const handleEdit = (video: Video) => {
    setEditingVideo(video);
    setEditVideoUrl(video.VideoUrl);
  };

  const handleUpdate = () => {
    if (!editingVideo) return toast.error("No video selected!");
    if (!editVideoUrl.trim()) return toast.error("Video URL cannot be empty!");

    updateVideo.mutate(
      { id: editingVideo._id, VideoUrl: editVideoUrl },
      {
        onSuccess: () => {
          toast.success("Video updated successfully!");
          setEditingVideo(null);
          setEditVideoUrl("");
        },
        onError: () => toast.error("Failed to update video!"),
      }
    );
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">All Videos</h1>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left w-[100px]">Sr no.</th>
                <th className="px-4 py-2 text-left">Video Url.</th>
                <th className="px-4 py-2 text-left">Video</th>
                <th className="px-4 py-2 text-left w-[150px]">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((video, idx) => (
                <tr key={video._id}>
                  <td className="px-4 py-2 w-[100px]">{indexOfFirstItem + idx + 1}</td>
                  <td className="px-4 py-2 max-w-[100px]">{video.VideoUrl}</td>
                  <td className="px-4 py-2 w-60 h-48">
                    <iframe
                      width="100%"
                      height="100%"
                      src={toEmbedUrl(video.VideoUrl)}
                      title={`video-${video._id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded"
                    ></iframe>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(video)}
                      className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(video._id)}
                      className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Update Modal */}
        {editingVideo && (
          <div className="fixed inset-0 backdrop-blur-3xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white border border-blue-900 p-6 rounded-xl w-96 relative">
              <button
                onClick={() => setEditingVideo(null)}
                className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:animate-spin hover:text-gray-800"
              >
                <FaTimes />
              </button>
              <h2 className="text-xl font-bold mb-4">Update Video</h2>

              <input
                type="text"
                value={editVideoUrl}
                onChange={(e) => setEditVideoUrl(e.target.value)}
                placeholder="Enter YouTube URL"
                className="w-full border px-3 py-2 rounded mb-4"
              />

              <div className="w-full h-48 mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={toEmbedUrl(editVideoUrl)}
                  title="Preview Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded"
                ></iframe>
              </div>

              <button
                onClick={handleUpdate}
                disabled={updateVideo.status === "pending"}
                className={`px-4 py-2 cursor-pointer bg-secondary text-white rounded hover:bg-primary ${
                  updateVideo.status === "pending"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {updateVideo.status === "pending" ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Page;
