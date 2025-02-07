import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A full-stack web application built with React and Node.js.",
      link: "#",
    },
    {
      title: "Project Beta",
      description:
        "An innovative mobile app leveraging AI for personalized experiences.",
      link: "#",
    },
    {
      title: "Project Gamma",
      description: "A cloud-based solution for real-time data analytics.",
      link: "#",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
