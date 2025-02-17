"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md shadow-lg z-50 border-b border-gray-300 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <a href="#hero">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={40}
            height={30}
            className="rounded-full object-cover"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#hero" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Home</a>
          <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Skills</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Projects</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-7 h-7 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-7 h-7 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-black shadow-md p-5 absolute top-full left-0 w-full border-t border-gray-300 dark:border-gray-700">
          <a href="#hero" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Home</a>
          <a href="#skills" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Skills</a>
          <a href="#projects" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Projects</a>
          <a href="#contact" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
