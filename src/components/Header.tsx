import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Add a small delay to allow the menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      const headerOffset = 80; // Adjust this value based on your header height
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-10 backdrop-blur-md bg-white/80 shadow-md"
    >
      <div className="container-wrapper py-4 flex items-center justify-between">
        <div className="text-lg md:text-2xl font-bold gradient-text uppercase tracking-wide">
          Manuel Costa
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["about", "education", "experience", "projects", "blog"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleClick(e, item)}
                className="uppercase text-sm font-medium text-gray-700 hover:gradient-text transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-gray-600 transition-all transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-gray-600 transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-gray-600 transition-all transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <nav className="container-wrapper py-4 flex flex-col space-y-4">
              {["about", "education", "experience", "projects", "blog"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => handleClick(e, item)}
                    className="uppercase text-sm font-medium text-gray-700 hover:gradient-text transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
