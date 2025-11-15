
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";
import { FaX } from "react-icons/fa6";
import { BiSolidFoodMenu } from "react-icons/bi";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto px-6 max-w-[1550px]">
        <div className="flex items-center justify-center h-[72px] relative">
          {/* ===== Desktop Navigation ===== */}
          <nav className="hidden md:flex items-center justify-center py-2 px-6 rounded-full bg-white/80 backdrop-blur-sm shadow-lg">
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

          {/* ===== Mobile Menu Button ===== */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-0 md:hidden p-2 rounded-md bg-white/70 backdrop-blur-sm shadow-md transition-all duration-300 hover:bg-white"
          >
            {menuOpen ? (
              <FaX className="h-5 w-5 text-black" />
            ) : (
              <BiSolidFoodMenu className="h-5 w-5 text-black" />
            )}
          </button>
        </div>

        {/* ===== Mobile Dropdown ===== */}
        {menuOpen && (
          <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg px-6 py-6 space-y-5 rounded-b-2xl animate-slideDown">
            <div className="flex flex-col space-y-3">
              {desktopNavLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "font-medium text-base py-2 border-b border-black/10 transition-colors",
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

            {/* ===== Contact Button (inside menu) ===== */}
            <a
              href="mailto:hello@abdulmanan.dev"
              className="block text-center rounded-lg bg-black px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-violet-500"
            >
              Contact Me
            </a>
          </div>
        )}
      </div>
    </header>
  );
});
