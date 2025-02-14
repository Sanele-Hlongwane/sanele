import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from 'next-themes'
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanele Portfolio",
  description: "My nextjs portfolip web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <ThemeProvider>{children}</ThemeProvider>
        <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo & Description */}
          <div>
            <h2 className="text-white text-2xl font-bold">Sanele Hlongwane</h2>
            <p className="mt-2 text-sm">Building innovative solutions with Next.js.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <a href="#hero" className="hover:text-white">Home</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-white text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 hover:text-white" />
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 hover:text-white" />
              </a>
              <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-sm text-center">
          &copy; {new Date().getFullYear()} Sanele Hlongwane. All rights reserved.
        </div>
      </div>
    </footer>
      </body>
    </html>
  );
}
