import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container-wrapper section-wrapper min-h-[80vh] flex items-center"
    >
      <div className="relative w-full">
        {/* Background gradient blobs */}
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />

        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Hello, I'm Manuel
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl text-gray-700 mb-8"
          >
            Software Engineer & Problem Solver
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 leading-relaxed mb-12 backdrop-blur-sm"
          >
            I'm passionate about building scalable and efficient solutions. My
            journey in technology started at a young age, and I've honed my
            skills through rigorous education and diverse work experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Cloud Architecture",
              "UI/UX",
            ].map((skill) => (
              <span
                key={skill}
                className="px-6 py-2 text-lg rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-gray-700 border border-purple-100 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
