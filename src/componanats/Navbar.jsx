"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "https://leetcode.com/u/syedabisma_23/", label: "LeetCode" },
    { href: "https://www.linkedin.com/in/syeda-bisma-29202428a/", label: "LinkedIn" },
    { href: "https://github.com/SyedaBismaa", label: "GitHub" },
    { href: "https://codolio.com/profile/SyedaBisma", label: "Codolio" },
    { href:"/Resume/Resume2.pdf", download:"Resume2.pdf" , label:"Resume"}
  ];

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h2 className="text-2xl font-semibold tracking-wide">
        Portfolio<span className="text-gray-600">.</span>
      </h2>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8  font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : "_self"}
            className="relative group"
          >
            {link.label}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-800 dark:text-white"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 right-4 bg-red-700 dark:bg-gray-900 shadow-lg rounded-2xl py-4 px-6 flex flex-col gap-4 text-gray-800 dark:text-gray-200 font-medium md:hidden transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              onClick={() => setOpen(false)}
              className="hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
