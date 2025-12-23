'use client';

import AdminLayout from '@/componets/admin/AdminLayout';
import React, { useEffect, useState } from 'react';
import { useGallery, Gallery } from '@/hooks/gallery';
import Image from 'next/image';
import toast from 'react-hot-toast';
import Link from 'next/link';

const Page: React.FC = () => {
  const { allGalleries, deleteGallery } = useGallery();
  const [localGalleries, setLocalGalleries] = useState<Gallery[]>([]);

  // Sync API data to local state
  useEffect(() => {
    if (allGalleries.data) setLocalGalleries(allGalleries.data);
  }, [allGalleries.data]);

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // Prevent Link navigation
    if (!confirm('Are you sure you want to delete this category?')) return;
    deleteGallery.mutate(id, {
      onSuccess: () => toast.success('Category deleted!'),
      onError: () => toast.error('Failed to delete category'),
    });
  };

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md max-w-6xl">
        <h1 className="text-2xl font-bold mb-6">All Categories</h1>

        {allGalleries.isLoading && <p>Loading categories...</p>}
        {allGalleries.isError && (
          <p className="text-red-500">Error: {allGalleries.error?.message}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {localGalleries.map((category) => (
            <Link
              href={`/admin/all-gallery/${category._id}`} // dynamic page
              key={category._id}
              className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition relative group"
            >
              {/* Show first image as preview */}
              {category.images.length > 0 ? (
                <Image
                  src={category.images[0].url}
                  alt={category.category}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg mb-2">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}

              <h2 className="text-lg font-semibold">{category.category}</h2>
              <p className="text-sm text-gray-500">
                {category.images.length} image{category.images.length !== 1 ? 's' : ''}
              </p>

              {/* Delete Button */}
              <button
                onClick={(e) => handleDelete(e, category._id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm z-10"
              >
                Delete
              </button>
            </Link>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Page;
