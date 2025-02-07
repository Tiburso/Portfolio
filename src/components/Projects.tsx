import { motion } from "framer-motion";
import {
  ArrowTopRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    skipSnaps: false,
    dragFree: false,
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

  return (
    <div className="container-wrapper section-wrapper">
      <h2 className="section-title gradient-text">Featured Projects</h2>
      <div className="relative px-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-4"
              >
                <motion.div
                  animate={{
                    scale: selectedIndex === index ? 1.05 : 1,
                    opacity: selectedIndex === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="card group relative overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 gradient-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  <div className="aspect-[4/3] bg-gray-100 rounded-xl">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white select-none">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-100 mb-4">
                      {project.description}
                    </p>
                    <div className="pointer-events-auto">
                      <a
                        href={project.link}
                        className="inline-flex items-center text-sm text-blue-300 hover:text-blue-200"
                      >
                        View Project{" "}
                        <ArrowTopRightIcon className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-600/40 to-blue-600/40 hover:from-purple-600/60 hover:to-blue-600/60 backdrop-blur-sm p-3 rounded-full transition-all duration-300 border border-white/20 shadow-lg cursor-pointer hover:scale-110"
          aria-label="Previous project"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white drop-shadow-lg" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-600/40 to-blue-600/40 hover:from-purple-600/60 hover:to-blue-600/60 backdrop-blur-sm p-3 rounded-full transition-all duration-300 border border-white/20 shadow-lg cursor-pointer hover:scale-110"
          aria-label="Next project"
        >
          <ChevronRightIcon className="w-6 h-6 text-white drop-shadow-lg" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
