import Image from 'next/image';

const projects = [
  {
    title: 'Eagles Ring',
    description: 'An investment platform connecting entrepreneurs with investors.',
    image: '/projects/eagles-ring.png',
    link: 'https://eaglesring.com',
  },
  {
    title: 'Expense Tracker',
    description: 'A Next.js app to manage personal finances effectively.',
    image: '/projects/expense-tracker.png',
    link: 'https://expensetracker.com',
  },
  {
    title: 'Eco-Tracker',
    description: 'A mobile app helping users track eco-friendly habits.',
    image: '/projects/eco-tracker.png',
    link: 'https://eco-tracker.com',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100 dark:bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">My Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
