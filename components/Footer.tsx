import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export const Footer: React.FC = React.memo(() => {
  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "My Process", href: "/process" },
    { label: "About Me", href: "/about" },
    { label: "Notes", href: "/notes" },
  ];

  const legalLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  const socialLinks = [
    { icon: <FaXTwitter />, href: "/", hover: "hover:text-[#000000]" },
    { icon: <FaInstagram />, href: "/", hover: "hover:text-[#E4405F]" },
    { icon: <FaLinkedin />, href: "/", hover: "hover:text-[#0077B5]" },
  ];

  return (
    <footer className="overflow-hidden w-full h-auto px-5 py-12 pb-4 bg-black">
      <div className="flex justify-between lg:items-center flex-col gap-10 lg:gap-0 lg:flex-row max-w-[1550px] mx-auto">

        {/* LEFT SECTION */}
        <div className="max-w-[551px] w-full">
          <div className="inline-block gap-8">
            <div className="flex justify-center items-center">
              <img
                src={"/images/about/logo-image.png"}
                alt="logo"
                width={32}
                height={39}
              />
            </div>
          </div>

          <h1 className="font-heading text-[32px] leading-[38px] lg:text-[40px] lg:leading-[46px] mt-6 text-white">
            Stay updated! Subscribe to my newsletter for weekly web development tips and insights.
          </h1>

          <div className="flex items-end gap-4 mt-5">
            <input
              type="text"
              placeholder="Your email@example.com"
              className="w-full max-w-[278px] shadow-[0px_3px_0px_0px_#EEEEEE] font-[400] leading-6 text-[16px] bg-white py-3 outline-none px-3.5 placeholder:text-[#929292] rounded-[16px] border-[1px] border-[#3D3D3D1A]"
            />
            <button
              className="rounded-2xl text-white py-3 hover:scale-[0.98] hover:translate-y-[-3px] px-7 inline-block cursor-pointer transition-all duration-300 ease-in-out shadow-[0px_3px_0px_0px_#6E50D1,0px_5px_6px_0px_#7558FC80] active:shadow-none"
              style={{
                background: "linear-gradient(180deg, #7F61FB 0%, #7558FC 100%)",
              }}
            >
              Submit
            </button>
          </div>
        </div>

        {/* RIGHT SECTION — TWO BOXES IN ONE COLUMN */}
        <div className="flex flex-col gap-8 w-full md:w-auto">

          {/* NAVIGATION BOX */}
          <div className="grid grid-cols-2 w-full md:w-auto gap-4 md:gap-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-[#535353] cursor-pointer font-medium text-[18px] leading-[1.6] md:text-xl active:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* LEGAL BOX */}
          <div className="grid grid-cols-2 w-full md:w-auto gap-4 md:gap-6">
            {legalLinks.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-[#535353] cursor-pointer font-medium text-[18px] leading-[1.6] md:text-xl active:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="max-w-[1550px] mx-auto py-14 flex md:flex-row flex-col justify-between gap-5 md:items-center">
        <div className="flex flex-col">
          <p className="text-[14px] leading-6 text-[#707070] font-semibold">
            © 2025 Abdul Manan | All rights reserved.
          </p>
          <p className="text-[14px] leading-6 text-[#707070] font-semibold">
            Full-Stack Web Developer. Crafting user-first, responsive, and visually engaging digital experiences.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-3">
          {socialLinks.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`hover:bg-white border border-[#E0E0DB] cursor-pointer transition-all duration-300 ease-in-out rounded-[12px] size-[32px] text-[20px] flex items-center justify-center text-[#5F5F69] ${item.hover}`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
});
