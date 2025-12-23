"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/componets/layout/Footer";
import Header from "@/componets/layout/Header";
import CommonHero from "@/componets/sections/CommonHero";
import { useBlogs, Blog as BlogType } from "@/hooks/blogs";
import toast from "react-hot-toast";

const BlogDetailsPage: React.FC = () => {
  const params = useParams();
  const { allBlogs } = useBlogs();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    if (allBlogs.isSuccess && allBlogs.data) {
      const foundBlog = allBlogs.data.find((b) => b._id === params.id);
      if (foundBlog) {
        setBlog(foundBlog);
        setRelatedBlogs(allBlogs.data.filter((b) => b._id !== params.id));
      } else {
        toast.error("Blog not found!");
      }
    }
  }, [allBlogs.isSuccess, allBlogs.data, params.id]);

  return (
    <>
      <Header />
      <CommonHero title={blog?.title || "Blog"} />

      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Show loading or not found inside the section */}
          {allBlogs.isLoading && (
            <p className="text-center py-10 text-gray-600">Loading blog...</p>
          )}
          {!allBlogs.isLoading && !blog && (
            <p className="text-center py-10 text-gray-600">Blog not found.</p>
          )}

          {/* Only show content if blog is available */}
          {blog && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Blog Content */}
              <div className="lg:col-span-2">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={1200}
                  height={400}
                  className="w-full max-h-[350px] rounded-lg mb-6 object-contain"
                />
                <p className="text-gray-700 mb-4 font-semibold">
                  {blog.shortDescription}
                </p>
                <div
                  className="prose max-w-full text-gray-800"
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />
              </div>

              {/* Related Blogs Sidebar */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Related Blogs</h2>
                {relatedBlogs.map((b) => (
                  <Link key={b._id} href={`/blog/${b._id}`}>
                    <div className="bg-white gap-3 flex rounded shadow p-3 hover:shadow-lg transition cursor-pointer">
                      <Image
                        src={b.image}
                        alt={b.title}
                        width={100}
                        height={100}
                        className="w-[100px] h-[70px] object-cover rounded"
                      />
                      <div className="flex flex-col justify-center">
                        <h3 className="text-base font-bold">{b.title}</h3>
                        <p className="text-gray-600 text-xs max-w-[200px] truncate">
                          {b.shortDescription}
                        </p>
                        <span className="text-primary hover:underline transition-all duration-300">
                          Read More
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetailsPage;
