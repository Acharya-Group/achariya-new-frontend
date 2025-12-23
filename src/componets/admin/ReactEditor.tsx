"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Dynamic import for Next.js
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// Toolbar config
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, false] }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["link", "image"],
  ],
};


const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "color",
  "background",
  "blockquote",
  "code-block",
  "list", 
  "align",
  "size",
  "link",
  "image",
];

const ReactEditor = () => {
  const [content, setContent] = useState<string>("");

  return (
    <div className="max-w-[1000px] mx-auto mt-10">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={content}
        onChange={setContent}
        placeholder="Write something awesome..."
        className="h-60"
      />
    </div>
  );
};

export default ReactEditor;
