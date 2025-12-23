"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import AdminLayout from "@/componets/admin/AdminLayout";
import toast from "react-hot-toast";
import { useTestimonials, Testimonial } from "@/hooks/testimonial";
import axios, { AxiosError } from "axios";
import Image from "next/image";

const UpdateTestimonialPage = () => {
  const router = useRouter();
  const params = useParams();
  const testimonialId = Array.isArray(params.id) ? params.id[0] : params.id;

  const { updateTestimonial } = useTestimonials();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch existing testimonial data
  useEffect(() => {
    if (!testimonialId) return;
    const fetchTestimonial = async () => {
      try {
        const { data } = await axios.get<{ testimonial: Testimonial }>(
          `${process.env.NEXT_PUBLIC_API_URL}/Testimonial/${testimonialId}`
        );
        setName(data.testimonial.name);
        setDescription(data.testimonial.description);
        setPreview(data.testimonial.Image);
      } catch (err: unknown) {
        const error = err as AxiosError<{ message: string }>;
        toast.error(error?.response?.data?.message || "Failed to load testimonial!");
      }
    };
    fetchTestimonial();
  }, [testimonialId]);

  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Submit updated testimonial
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testimonialId) {
      toast.error("Testimonial ID not found!");
      return;
    }

    if (!name || !description) {
      toast.error("Please fill all required fields!");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (imageFile) formData.append("Image", imageFile);

    updateTestimonial.mutate(
      { id: testimonialId, formData },
      {
        onSuccess: () => {
          toast.success("Testimonial updated successfully!");
          setIsSubmitting(false);
          router.push("/admin/all-testimonial");
        },
        onError: (err: unknown) => {
          const error = err as AxiosError<{ message: string }>;
          toast.error(error?.response?.data?.message || "Failed to update testimonial!");
          setIsSubmitting(false);
        },
      }
    );
  };

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Update Testimonial</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Enter description"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
            />

            {/* Image Preview */}
            {preview && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-1">Preview:</p>
                <Image
                  height={128}
                  width={128}
                  src={preview}
                  alt="Selected Preview"
                  className="w-32 h-32 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting ? "bg-primary cursor-not-allowed" : "bg-secondary"
            } text-white py-3 px-4 cursor-pointer rounded-lg shadow-md transition transform hover:bg-primary font-medium`}
          >
            {isSubmitting ? "Updating..." : "Update Testimonial"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default UpdateTestimonialPage;
