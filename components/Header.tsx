import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "../lib/utils";
import { FaHelmetUn, FaX } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const desktopNavLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "My Process", path: "/process" },
  { name: "About Me", path: "/about" },
  { name: "Notes", path: "/notes" },
];

export const Header: React.FC = React.memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto px-6 max-w-[1550px]">
        <div className="flex items-center justify-between h-[72px] relative">

          {/* Logo */}
          <Link to="/" onClick={handleLinkClick}>
            <img
              src="/images/about/logo-image.png"
              alt="logo"
              className="w-[35px] h-[35px] md:w-14 md:h-14 rounded-md object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center py-2 px-6 rounded-full bg-white backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-7">
              {desktopNavLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "font-medium text-sm px-2 py-1 cursor-pointer transition-colors",
                      isActive
                        ? "text-violet-600"
                        : "text-black/70 hover:text-black"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Desktop Contact Button */}
          <Link
            to="mailto:abdulmanan.devs@gmail.com"
            className="rounded-2xl mt-3 py-3 px-7 z-[999] inset-0 hidden md:inline-block cursor-pointer transition-all duration-300 ease-in-out
                   text-gray-400 border-2 border-gray-400 shadow-[0px_3px_0px_0px_rgba(156,163,175,1),0px_5px_6px_0px_rgba(156,163,175,0.5)]
                   transform hover:scale-[0.98] hover:translate-y-[-3px] hover:bg-gray-700 hover:text-gray-100 active:shadow-none"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Contact Me
            <IoArrowForwardCircleOutline className="inline-block ml-2 text-xl" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative rounded-2xl mt-3 py-3 px-7 z-[999] inset-0 inline-block md:hidden cursor-pointer transition-all duration-300 ease-in-out
                   text-gray-400 border-2 border-gray-400 shadow-[0px_3px_0px_0px_rgba(156,163,175,1),0px_5px_6px_0px_rgba(156,163,175,0.5)]
                   transform hover:scale-[0.98] hover:translate-y-[-3px] hover:bg-gray-700 hover:text-gray-100 active:shadow-none"
            data-aos="fade-up"
            data-aos-delay="400"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaX className="h-5 w-5 text-black" />
            ) : (
              <CiMenuFries className="h-5 w-5 text-black" />
            )}
            <FaHelmetUn className="inline-block ml-2 text-xl absolute -top-3 -left-7" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg px-6 py-6 space-y-5 rounded-b-2xl animate-slideDown">
            <div className="flex flex-col space-y-3">
              {desktopNavLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    cn(
                      "font-medium text-base py-2 border-b border-black/10 transition-colors",
                      isActive ? "text-violet-600" : "text-black/70 hover:text-black"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Contact Button */}
            <a
              href="mailto:abdulmanan.devs@gmail.com"
              className="block text-center rounded-2xl mt-3 py-3 px-7 z-[999] inset-0 inline-block cursor-pointer transition-all duration-300 ease-in-out
                     text-gray-400 border-2 border-gray-400 shadow-[0px_3px_0px_0px_rgba(156,163,175,1),0px_5px_6px_0px_rgba(156,163,175,0.5)]
                     transform hover:scale-[0.98] hover:translate-y-[-3px] hover:bg-gray-700 hover:text-gray-100 active:shadow-none"
            >
              Contact Me
              <IoArrowForwardCircleOutline className="inline-block ml-2 text-xl" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
});
