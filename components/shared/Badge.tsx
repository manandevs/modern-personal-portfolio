import React from "react";

interface BadgeProps {
  text: string;
  src: string;
}

const Badge: React.FC<BadgeProps> = ({ text, src }) => {
  return (
    <button
      className="bg-white rounded-2xl text-black font-medium text-[14px] flex justify-center items-center gap-1.5 px-3.5 py-2 border border-[#3D3D3D1A]"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <img src={src} alt={src} width={15} height={14} />
      {text}
    </button>
  )
}

export default Badge
