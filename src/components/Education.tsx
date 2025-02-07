import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold">University of Example</h3>
          <p className="text-gray-600">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-gray-500 text-sm">2015 - 2019</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold">Institute of Technology</h3>
          <p className="text-gray-600">
            Master of Science in Software Engineering
          </p>
          <p className="text-gray-500 text-sm">2019 - 2021</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
