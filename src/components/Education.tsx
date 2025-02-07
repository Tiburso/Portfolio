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
      className="container mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="space-y-4"
      >
        <motion.div
          variants={item}
          className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold">
            Technicla University of Lisbon
          </h3>
          <p className="text-gray-600">
            Bachelor of Science in Computer Science and Engineering
          </p>
          <p className="text-gray-500 text-sm">2019 - 2022</p>
        </motion.div>
        <motion.div
          variants={item}
          className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold">
            Eindhoven Technical University
          </h3>
          <p className="text-gray-600">
            Master of Science in Artificial Intelligence and Engineering Systems
          </p>
          <p className="text-gray-500 text-sm">2023 - 2025</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
