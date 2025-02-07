import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-10 backdrop-blur-md bg-white/80 shadow-md"
    >
      <div className="container-wrapper py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text uppercase tracking-wide">
          Manuel Costa | Portfolio
        </div>
        <nav className="space-x-6">
          {["about", "education", "experience", "projects", "blog"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                className="uppercase text-sm font-medium text-gray-700 hover:gradient-text transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
