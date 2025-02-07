import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const WORK_EXPERIENCES = [
  {
    company: "TechCorp Inc.",
    role: "Software Engineer",
    period: "2021 - Present",
    description:
      "Developed and maintained scalable web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software.",
    skills: ["React", "TypeScript", "Node.js"],
  },
  {
    company: "Innovate Labs",
    role: "Junior Developer",
    period: "2019 - 2021",
    description:
      "Contributed to the development of customer-facing applications. Worked on optimizing performance and user experience.",
    skills: ["Vue.js", "JavaScript", "CSS"],
  },
  {
    company: "Digital Pioneers",
    role: "Frontend Intern",
    period: "2018 - 2019",
    description:
      "Assisted in building responsive user interfaces and implementing design systems. Learned modern web development practices.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Create a spring animation for smooth transitions
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Create snap points for each experience
  const progressBar = useTransform(springProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="container mx-auto px-6 relative py-20" ref={containerRef}>
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Work Experience
      </h2>

      {/* Timeline track and progress indicator */}
      <div className="absolute left-8 top-40 bottom-20 w-0.5 bg-gray-200">
        <motion.div
          className="absolute w-2 h-12 -left-[3px] bg-blue-500 rounded-full"
          style={{
            top: progressBar,
            transform: "translateY(-50%)",
          }}
        />
      </div>

      <div className="space-y-16 ml-16">
        {WORK_EXPERIENCES.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-xl p-8 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.2)] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {experience.company}
                  </h3>
                  <p className="text-blue-600 font-medium">{experience.role}</p>
                </div>
                <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                  {experience.period}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {experience.description}
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {experience.skills.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
