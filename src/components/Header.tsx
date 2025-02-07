import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md fixed w-full z-10"
    >
      <div className="container-wrapper py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">MyPortfolio</div>
        <nav className="space-x-4">
          {["about", "education", "experience", "projects", "blog"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-600 hover:text-gray-800"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            )
          )}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
