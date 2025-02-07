import { motion } from "framer-motion";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

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
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="group relative bg-white rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="aspect-[4/3] bg-gray-100">
                {/* Project thumbnail would go here */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center mt-4 text-sm text-blue-300 hover:text-blue-200"
                >
                  View Project <ArrowTopRightIcon className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
