'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';
import AdminLayout from '@/componets/admin/AdminLayout';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useGallery, Gallery } from '@/hooks/gallery';

const AddGalleryPage: React.FC = () => {
  const { allGalleries, createCategory, addImagesToCategory } = useGallery();

  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [newCategory, setNewCategory] = useState<string>('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [localGalleries, setLocalGalleries] = useState<Gallery[]>([]);

  useEffect(() => setMounted(true), []);

  // Update local galleries when API data changes
  useEffect(() => {
    if (allGalleries.data) setLocalGalleries(allGalleries.data);
  }, [allGalleries.data]);

  // Cleanup preview URLs
  useEffect(() => {
    return () => previewUrls.forEach((url) => URL.revokeObjectURL(url));
  }, [previewUrls]);

  if (!mounted) return null;

  // Handle image selection and preview
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
      setPreviewUrls(filesArray.map((file) => URL.createObjectURL(file)));
    }
  };

  // Add images to selected category
  const handleAddImages = () => {
    if (!selectedCategory) return toast.error('Select a category');
    if (!selectedFiles.length) return toast.error('Select image(s)');

    addImagesToCategory.mutate(
      { category: selectedCategory, images: selectedFiles },
      {
        onSuccess: () => {
          toast.success('Images uploaded successfully!');
          setSelectedFiles([]);
          setPreviewUrls([]);
        },
        onError: () => toast.error('Failed to upload images!'),
      }
    );
  };

  // Create a new category
  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    if (!trimmed) return toast.error('Enter a category name');

    if (localGalleries.some((g) => g.category.toLowerCase() === trimmed.toLowerCase())) {
      return toast.error('Category already exists!');
    }

    createCategory.mutate(
      { category: trimmed },
      {
        onSuccess: () => {
          toast.success('Category added successfully!');
          setNewCategory('');
          setSelectedCategory(trimmed);
        },
        onError: () => toast.error('Failed to add category!'),
      }
    );
  };

  return (
    <AdminLayout>
     
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Add Gallery Images</h1>

        {/* Loading / Error */}
        {allGalleries.isLoading && <p className="text-center mt-4">Loading categories...</p>}
        {allGalleries.isError && (
          <p className="text-center mt-4 text-red-500">
            Error: {allGalleries.error?.message}
          </p>
        )}

        {!allGalleries.isLoading && !allGalleries.isError && (
          <>
            {/* Add New Category */}
            <div className="mb-4 flex gap-2">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="New Category"
                className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
              />
          <button
  onClick={handleAddCategory}
  disabled={createCategory.status === 'pending'}
  className={`px-4 py-2 bg-primary cursor-pointer text-white rounded-lg hover:bg-secondary transition ${
    createCategory.status === 'pending' ? 'opacity-50 cursor-not-allowed' : ''
  }`}
>
  {createCategory.status === 'pending' ? 'Adding...' : 'Add'}
</button>


            </div>

            {/* Select Category */}
            <div className="mb-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border cursor-pointer rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
              >
                <option value="">Select Category</option>
                {localGalleries.map((g) => (
                  <option key={g._id} value={g.category}>
                    {g.category}
                  </option>
                ))}
              </select>
            </div>

            {/* Upload Images */}
            <div className="mb-4">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
              />
              {previewUrls.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-2">
                  {previewUrls.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt={`preview-${index}`}
                      width={128}
                      height={128}
                      className="w-32 h-32 object-cover rounded-lg border"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Upload Button */}
           <button
  onClick={handleAddImages}
  disabled={addImagesToCategory.status === 'pending'}
  className={`w-full px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary cursor-pointer transition ${
    addImagesToCategory.status === 'pending' ? 'opacity-50 cursor-not-allowed' : ''
  }`}
>
  {addImagesToCategory.status === 'pending' ? 'Uploading...' : 'Add Images to Category'}
</button>

          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default AddGalleryPage;
