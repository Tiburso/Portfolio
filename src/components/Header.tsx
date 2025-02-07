import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md fixed w-full z-10"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">MyPortfolio</div>
        <nav className="space-x-4">
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            About
          </a>
          <a
            href="#education"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Education
          </a>
          <a
            href="#experience"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Projects
          </a>
          <a
            href="#blog"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Blog
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
