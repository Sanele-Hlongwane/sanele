"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import {  FaCode, FaLaptopCode, 
  FaDatabase, FaPaintBrush, FaMobileAlt, FaCloud, FaBrain, FaShieldAlt,
  FaUsers, FaChartBar, FaClock, FaCommentDots
} from "react-icons/fa";

const SkillsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-purple-900 dark:from-gray-900 dark:to-black py-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            My Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">  
            As a final-year Business Information Technology student at UJ, I have honed a diverse skill set in software development, cloud computing, and problem-solving. With hands-on experience in full-stack development, database architecture, and UI/UX design, I thrive on building innovative, scalable, and user-centric solutions. Passionate about technology and continuous learning, I embrace modern DevOps practices, agile methodologies, and emerging trends to drive impactful digital transformation.  
            </p>

        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >

          {/* Web Development */}
          <SkillCard title="Web Development" icon={<FaLaptopCode className="mr-2 text-xl" />} skills={["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "Tailwind CSS"]} />

          {/* Databases */}
          <SkillCard title="Databases" icon={<FaDatabase className="mr-2 text-xl" />} skills={["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Neon Database"]} />

          {/* Programming Languages */}
          <SkillCard title="Programming Languages"  icon={<FaCode className="mr-2 text-xl" />} skills={["JavaScript", "TypeScript", "Python", "C#", "SQL", "NoSQL", "PHP"]} />

          {/* Mobile Development */}
          <SkillCard title="Mobile Development" icon={<FaMobileAlt className="mr-2 text-xl" />} skills={["React Native", "Expo", "Android Development", "iOS Development"]} />

          {/* AI & Machine Learning */}
          <SkillCard title="AI & Machine Learning" icon={<FaBrain className="mr-2 text-xl" />} skills={["TensorFlow", "PyTorch", "Scikit-Learn", "Natural Language Processing (NLP)", "Computer Vision"]} />

          {/* Cybersecurity */}
          <SkillCard title="Cybersecurity" icon={<FaShieldAlt className="mr-2 text-xl" />} skills={["Ethical Hacking", "Penetration Testing", "OWASP Security", "Firewalls", "Network Security"]} />

          {/* Cloud & DevOps */}
          <SkillCard title="Cloud & DevOps" icon={<FaCloud className="mr-2 text-xl" />} skills={["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform"]} />

          {/* UI/UX & Design */}
          <SkillCard title="UI/UX & Design" icon={<FaPaintBrush className="mr-2 text-xl" />} skills={["Figma", "Adobe XD", "Wireframing", "User Research", "Prototyping"]} />

          {/* Data Analysis */}
          <SkillCard title="Data Analysis" icon={<FaChartBar className="mr-2 text-xl" />} skills={["SQL", "Power BI", "Pandas", "NumPy", "Data Visualization"]} />

          {/* Soft Skills */}
          <SkillCard title="Soft Skills" icon={<FaUsers className="mr-2 text-xl" />} skills={["Teamwork", "Leadership", "Critical Thinking", "Communication", "Problem Solving"]} />

          {/* Time Management & Productivity */}
          <SkillCard title="Productivity & Management" icon={<FaClock className="mr-2 text-xl" />} skills={["Agile Methodologies", "Scrum", "Trello", "JIRA", "Task Prioritization"]} />

          {/* Public Speaking & Communication */}
          <SkillCard title="Public Speaking" icon={<FaCommentDots className="mr-2 text-xl" />} skills={["Pitching Ideas", "Business Communication", "Client Interaction", "Presentation Skills"]} />

        </motion.div>
      </div>
    </section>
  );
};

// Reusable Skill Card Component
const SkillCard = ({ title, icon, skills }: { title: string, icon: JSX.Element, skills: string[] }) => (
  <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
      {icon} {title}
    </h3>
    <ul className="text-gray-600 dark:text-gray-300 flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <li key={index} className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md text-sm">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillsSection;
