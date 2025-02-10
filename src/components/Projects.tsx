import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowTopRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  InfoCircledIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Project Alpha",
      description: "A full-stack web application built with React and Node.js.",
      link: "#",
    },
    {
      title: "Project Beta",
      description:
        "An innovative mobile app leveraging AI for personalized experiences.",
      link: "#",
    },
    {
      title: "Project Gamma",
      description: "A cloud-based solution for real-time data analytics.",
      link: "#",
    },
    {
      title: "Project Teta",
      description: "A cloud-based solution for real-time data analytics.",
      link: "#",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    slidesToScroll: 1,
    loop: true,
    dragFree: false, // Changed to false for better mobile control
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openProjectInfo = (project) => {
    setSelectedProject(project);
    setShowInfo(true);
  };

  return (
    <div className="container-wrapper section-wrapper">
      <h2 className="section-title gradient-text">Featured Projects</h2>

      <div className="relative px-2 sm:px-8">
        <div className="overflow-hidden -mx-2 sm:-mx-8" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_85%] sm:flex-[0_0_70%] lg:flex-[0_0_60%] min-w-0 px-2 sm:px-4"
              >
                <motion.div
                  animate={{
                    scale: selectedIndex === index ? 1 : 0.9,
                    opacity: selectedIndex === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="card relative overflow-hidden hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 gradient-overlay opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

                  <div className="aspect-video max-h-[70vh] bg-gray-100 rounded-xl">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white select-none">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="hidden sm:block text-base md:text-lg text-gray-100 mb-6">
                          {project.description}
                        </p>
                        <div className="pointer-events-auto">
                          <a
                            href={project.link}
                            className="inline-flex items-center text-sm sm:text-base md:text-lg text-blue-300 hover:text-blue-200"
                          >
                            View Project{" "}
                            <ArrowTopRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => openProjectInfo(project)}
                        className="sm:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        aria-label="Show project info"
                      >
                        <InfoCircledIcon className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <button
            onClick={scrollPrev}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-600/40 to-blue-600/40 hover:from-purple-600/60 hover:to-blue-600/60 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 border border-white/20 shadow-lg cursor-pointer hover:scale-110 pointer-events-auto z-[5] max-h-[90vh]"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-lg" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-600/40 to-blue-600/40 hover:from-purple-600/60 hover:to-blue-600/60 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 border border-white/20 shadow-lg cursor-pointer hover:scale-110 pointer-events-auto z-[5] max-h-[90vh]"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-lg" />
          </button>
        </div>
      </div>

      {/* Mobile Project Info Modal */}
      <AnimatePresence>
        {showInfo && selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-x-0 bottom-0 z-50 p-4 sm:hidden"
          >
            <div className="relative bg-white rounded-xl p-4 shadow-lg">
              <button
                onClick={() => setShowInfo(false)}
                className="absolute right-3 top-3 p-1 rounded-full hover:bg-gray-100"
              >
                <Cross2Icon className="w-4 h-4" />
              </button>
              <h4 className="font-bold text-lg mb-2">
                {selectedProject.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
