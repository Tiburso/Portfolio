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
        <div className="absolute -top-20 -left-10 w-64 md:w-96 h-64 md:h-96 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-10 w-64 md:w-96 h-64 md:h-96 bg-blue-100/50 rounded-full blur-3xl" />

        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 mb-6 md:mb-2">
            {/* Image - Moved above text content for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto md:mx-0 flex-shrink-0 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 shadow-lg order-first md:order-last"
            >
              <img
                src="/src/assets/avatar.jpg"
                alt="Manuel"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-2 mt-2 md:mt-0"
              >
                Hello, I'm Manuel
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-2"
              >
                Software Engineer & Problem
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-10 text-center md:text-left backdrop-blur-sm"
          >
            I'm passionate about building scalable and efficient solutions. My
            journey in technology started at a young age, and I've honed my
            skills through rigorous education and diverse work experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4"
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
                className="px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base lg:text-lg rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-gray-700 border border-purple-100 shadow-sm"
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
