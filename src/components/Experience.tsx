import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold">TechCorp Inc.</h3>
          <p className="text-gray-600">Software Engineer</p>
          <p className="text-gray-500 text-sm">2021 - Present</p>
          <p className="text-gray-700 mt-2">
            Developed and maintained scalable web applications using modern
            frameworks. Collaborated with cross-functional teams to deliver
            high-quality software.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold">Innovate Labs</h3>
          <p className="text-gray-600">Junior Developer</p>
          <p className="text-gray-500 text-sm">2019 - 2021</p>
          <p className="text-gray-700 mt-2">
            Contributed to the development of customer-facing applications.
            Worked on optimizing performance and user experience.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
