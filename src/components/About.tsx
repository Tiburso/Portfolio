import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "AI/ML",
    "Cloud Architecture",
    "Distributed Systems",
    "Python",
    "Rust",
    "TypeScript",
    "DevOps",
    "Data Engineering",
    "System Design",
  ];

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
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto md:mx-0 flex-shrink-0 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 shadow-lg order-first md:order-last md:-mt-12"
            >
              <img
                src="/public/avatar.jpg"
                alt="Manuel"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="flex-1 text-center md:text-left mb-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-1 mt-2 md:mt-0"
              >
                Hello, I'm Manuel
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-1"
              >
                Software & AI Engineer
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-10 text-justify backdrop-blur-sm space-y-6"
          >
            <span className="block">
              AI and Engineering Systems professional with a passion for
              building intelligent, scalable solutions. Currently advancing AI
              systems at
              <span className="text-purple-700 font-medium">
                {" "}
                Mercedes-Benz
              </span>
              , where I'm developing{" "}
              <span className="text-gray-800 font-medium">
                state-of-the-art RAG systems
              </span>{" "}
              and optimizing ML pipelines.
            </span>

            <span className="block">
              My journey spans from founding engineer at{" "}
              <span className="text-purple-700 font-medium">WardAnalytics</span>
              , where I architected{" "}
              <span className="text-gray-800 font-medium">
                blockchain data infrastructure
              </span>
              , to technical consultancy at{" "}
              <span className="text-purple-700 font-medium">JUNITEC</span>,
              collaborating with industry leaders like Fujitsu.
            </span>

            <span className="block">
              I thrive on challenges across the tech spectrum - from developing{" "}
              <span className="text-purple-700 font-medium">TacoQ</span>, a{" "}
              <span className="text-gray-800 font-medium">
                high-performance distributed task queue
              </span>{" "}
              in Rust, to creating{" "}
              <span className="text-purple-700 font-medium">EnerVision</span>,
              an{" "}
              <span className="text-gray-800 font-medium">
                AI-powered solution
              </span>{" "}
              for photovoltaic analysis. My expertise combines deep technical
              knowledge in distributed systems, cloud architecture, and AI with
              practical experience in building enterprise-grade solutions that
              deliver real business value.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4"
          >
            {skills.map((skill) => (
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
