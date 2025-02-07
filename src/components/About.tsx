import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
        I'm a passionate software engineer with a knack for building scalable
        and efficient solutions. My journey in technology started at a young
        age, and I've honed my skills through rigorous education and diverse
        work experiences. I love solving complex problems and continuously
        learning new technologies.
      </p>
    </motion.div>
  );
};

export default About;
