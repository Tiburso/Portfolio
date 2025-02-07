import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0 }}
      className="container-wrapper section-wrapper mb-4"
    >
      <h2 className="section-title gradient-text">Education</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="space-y-6"
      >
        <motion.div
          variants={item}
          className="relative p-6 rounded-xl overflow-hidden"
        >
          <div className="relative z-10 bg-white/70 backdrop-blur-sm p-4 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800">
              Technical University of Lisbon
            </h3>
            <p className="text-gray-600 mt-2">
              Bachelor of Science in Computer Science and Engineering
            </p>
            <p className="text-gray-500 text-sm mt-1">2019 - 2022</p>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="relative p-6 rounded-xl overflow-hidden"
        >
          <div className="relative z-10 bg-white/70 backdrop-blur-sm p-4 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800">
              Eindhoven Technical University
            </h3>
            <p className="text-gray-600 mt-2">
              Master of Science in Artificial Intelligence and Engineering
              Systems
            </p>
            <p className="text-gray-500 text-sm mt-1">2023 - 2025</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
