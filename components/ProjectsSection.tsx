"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Eagles Ring",
    description: "An investment platform connecting entrepreneurs with investors.",
    image: "/images/Eaglesring.PNG",
    link: "https://eaglesring.vercel.app",
    code: "https://github.com/Sanele-Hlongwane/eaglesring",
    languages: ["Next.js", "Tailwind CSS", "Clerk", "Stripe"],
    deployed: true,
  },
  {
    title: "MeetingsHub",
    description: "A seamless platform for scheduling and managing meetings efficiently.",
    image: "/images/meetingshub.PNG",
    link: "https://meetings-hub.vercel.app",
    code: "https://github.com/Sanele-Hlongwane/meetings-hub",
    languages: ["React", "Firebase", "Tailwind CSS", "GetStream API"],
    deployed: true,
  },
  {
    title: "Eco-Tracker",
    description: "A mobile app helping users track eco-friendly habits.",
    image: "/projects/eco-tracker.png",
    code: "https://github.com/Sanele-Hlongwane/Eco-Tracker",
    languages: ["React Native", "Firebase", "Google Maps API"],
    deployed: false,
  },
  {
    title: "ThriveMentor",
    description: "A platform offering personalized lifestyle coaching & mentorship.",
    image: "/projects/life-style-coaching.png",
    code: "https://github.com/Sanele-Hlongwane/ThriveMentor",
    languages: ["PHP", "SQL", "HTML", "JavaScript"],
    deployed: false,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-800 to-purple-900 dark:from-gray-900 dark:to-black border-t border-purple-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-12">
          My Projects
        </h2>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-xl transform transition hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              {/* Animated Image */}
              <motion.div
                className="relative w-full h-52 overflow-hidden"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-80 transition-opacity duration-300"
                />
              </motion.div>

              {/* Project Info */}
              <div className="p-6 bg-gradient-to-b from-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-b-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>

                {/* Languages Used */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.languages.map((lang, i) => (
                    <span key={i} className="px-3 py-1 text-sm font-semibold text-white bg-purple-600 rounded-full">
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                  <Link
                    href={project.code}
                    target="_blank"
                    className="px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                  >
                    View Code
                  </Link>
                  {project.deployed && project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition"
                    >
                      Live Preview
                    </Link>
                  )}
                  {!project.deployed && (
                    <span className="px-4 py-2 text-sm font-semibold text-gray-400 bg-gray-700 rounded-lg cursor-not-allowed">
                      Not Deployed
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
