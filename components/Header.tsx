"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X} from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md shadow-lg z-50 border-b border-gray-300 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <Link href="/">
          <Image src="/images/sanele.jpg" alt="Logo" width={40} height={30} className="rounded-full object-cover" />
        </Link>
        
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Skills</Link>
          <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Projects</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
        <button onClick={handleThemeToggle} className="focus:outline-none">
          {theme === 'dark' ? (
            <FaSun className="w-6 h-6 text-yellow-300" />
          ) : (
            <FaMoon className="w-6 h-6 text-purple-700" />
          )}
        </button>
          
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-7 h-7 text-gray-700 dark:text-gray-300" /> : <Menu className="w-7 h-7 text-gray-700 dark:text-gray-300" />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-black shadow-md p-5 absolute top-full left-0 w-full border-t border-gray-300 dark:border-gray-700">
          <Link href="/skills" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Skills</Link>
          <Link href="/projects" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Projects</Link>
          <Link href="/contact" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;