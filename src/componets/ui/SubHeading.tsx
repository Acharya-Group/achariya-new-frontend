import React from "react";

interface SubHeadingProps {
  content: string;
  color?: string;
  className?: string; 
}

const SubHeading: React.FC<SubHeadingProps> = ({ content, color, className }) => {
  return (
    <h2 data-aos="fade-down" data-aos-duration="1000"
      className={`text-2xl md:text-3xl font-semibold mb-3 sm:mb-5 text-center ${className || ""}`}
      style={{ color: color || "#261b7d" }}
    >
      {content}
    </h2>
  );
};

export default SubHeading;
