"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/componets/layout/Footer";
import Header from "@/componets/layout/Header";
import CommonHero from "@/componets/sections/CommonHero";
import { useBlogs, Blog } from "@/hooks/blogs";

const BlogDetailsPage: React.FC = () => {
  const { allBlogs } = useBlogs();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    if (allBlogs.isSuccess && allBlogs.data) {
      setBlogs(allBlogs.data);
    }
  }, [allBlogs.isSuccess, allBlogs.data]);

  return (
    <>
      <Header />
      <CommonHero title="Blogs" />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Loading / Error / No blogs messages */}
          {allBlogs.isLoading && <p className="text-center p-6">Loading blogs...</p>}
          {allBlogs.isError && <p className="text-center p-6">Error: {allBlogs.error?.message}</p>}
          {!allBlogs.isLoading && blogs.length === 0 && <p className="text-center p-6">No blogs found</p>}

          {/* Grid of blogs */}
          {blogs.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="p-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-borderSpin hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden h-full">
                    <Image
  src={blog.image}
  alt={blog.title}
  width={600}
  height={300}
  className="w-full h-auto !max-h-48 object-contain"
/>

                    <div className="p-4 flex flex-col items-center text-center mt-auto">
                      <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                                     <p className="text-gray-600 text-sm text-center mb-2 line-clamp-2">
    {blog.shortDescription}
</p>
                      <Link
                        href={`/blog/${blog._id}`}
                        className="font-semibold text-primary hover:underline hover:!text-secondary"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetailsPage;
