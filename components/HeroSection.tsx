"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="lg:py-16 p-10 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black dark:text-white mb-4 text-4xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
          <span className="text-gray-700 bg-transparent text-black bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sanele Hlongwane",
                1500,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400 dark:text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am Sanele Hlongwane, a
            passionate Software Developer eager to embark on exciting projects
            and collaborations. My mission is to transform ideas into reality
            through cutting-edge technology. Let&apos;s connect and build
            something extraordinary that drives success and innovation!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs/My_CV.pdf"
              target="_blank"
              className="px-1 py-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
            <Link
              href="/docs/Matric.pdf"
              target="_blank"
              className="px-1 py-1 rounded-full bg-gradient-to-br from-green-500 to-blue-500 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Show Matric Certificate
              </span>
            </Link>
            <Link
              href="/docs/Academic.pdf"
              target="_blank"
              className="px-1 py-1 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Show Academic Transcript
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/Cover.png"
              alt="sanele"
              className="absolute inset-0 object-cover"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
