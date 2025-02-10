import { motion } from "framer-motion";
import {
  ArrowTopRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import projects from "../info/projects";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: number]: boolean;
  }>({});

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    slidesToScroll: 1,
    loop: true,
    dragFree: true,
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

  const toggleDescription = (index: number) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container-wrapper section-wrapper">
      <h2 className="section-title gradient-text">Featured Projects</h2>

      <div className="relative px-1 sm:px-8">
        <div className="overflow-hidden -mx-1 sm:-mx-8" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_95%] sm:flex-[0_0_60%] lg:flex-[0_0_45%] min-w-0 px-1 sm:px-4"
              >
                <motion.div
                  animate={{
                    scale: selectedIndex === index ? 1 : 0.9,
                    opacity: selectedIndex === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800"
                >
                  <div className="aspect-[16/10] relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>

                      <div className="space-y-2">
                        <p className="text-gray-200 text-sm sm:text-base">
                          {project.description}
                        </p>

                        <div className="hidden sm:flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            className="inline-flex items-center text-sm text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            Code
                            <ArrowTopRightIcon className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 border border-white/20"
        >
          <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 border border-white/20"
        >
          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
