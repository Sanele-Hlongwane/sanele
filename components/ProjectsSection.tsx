"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Eagles Ring",
    description: "An investment platform connecting entrepreneurs with investors.",
    image: "/images/Eaglesring.PNG",
    link: "https://eaglesring.vercel.app",
  },
  {
    title: "MeetingsHub",
    description: "A seamless platform for scheduling and managing meetings efficiently.",
    image: "/images/meetingshub.PNG",
    link: "https://meetings-hub.vercel.app",
  },
  {
    title: "Eco-Tracker",
    description: "A mobile app helping users track eco-friendly habits.",
    image: "/projects/eco-tracker.png",
    link: "https://github.com/Sanele-Hlongwane/Eco-Tracker",
  },
  {
    title: "Life Style Coaching",
    description: "A platform offering personalized lifestyle coaching & mentorship.",
    image: "/projects/life-style-coaching.png",
    link: "https://lifestylecoach.com",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-800 to-purple-900 dark:from-gray-900 dark:to-black ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12">
          🚀 My Projects
        </h2>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
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

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">🌟 Explore</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
