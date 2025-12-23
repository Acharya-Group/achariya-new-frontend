import React from 'react'

interface ButtonProps {
  content: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
}

const Button: React.FC<ButtonProps> = ({ content, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full cursor-pointer bg-gradient-to-r duration-300 from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d] text-white py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition ${className}`}
    >
      {content}
    </button>
  )
}

export default Button
