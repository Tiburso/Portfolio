import { motion } from "framer-motion";

const WORK_EXPERIENCES = [
  {
    company: "TechCorp Inc.",
    role: "Software Engineer",
    period: "2021 - Present",
    description: [
      "Developed and maintained scalable web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software.",
    ],
    skills: ["React", "TypeScript", "Node.js"],
  },
  {
    company: "Innovate Labs",
    role: "Junior Developer",
    period: "2019 - 2021",
    description: [
      "Contributed to the development of customer-facing applications. Worked on optimizing performance and user experience.",
    ],
    skills: ["Vue.js", "JavaScript", "CSS"],
  },
  {
    company: "Digital Pioneers",
    role: "Frontend Intern",
    period: "2018 - 2019",
    description: [
      "Assisted in building responsive user interfaces and implementing design systems. Learned modern web development practices.",
    ],
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

const Experience = () => {
  return (
    <div className="container-wrapper section-wrapper">
      <h2 className="section-title gradient-text">Work Experience</h2>

      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500/20 to-purple-500/20 hidden md:block" />

        <div className="space-y-8">
          {WORK_EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative ml-0 md:ml-8"
            >
              <div
                className="absolute -left-[8px] top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 to-purple-500 origin-top scale-0 transition-transform duration-300 hidden md:block"
                style={{ transform: "scaleY(1)" }}
              />

              <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {experience.company}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {experience.role}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed mt-2">
                      {experience.description.map((bullet, i) => (
                        <li key={i} className="pl-2">
                          {bullet}
                        </li>
                      ))}
                    </ul>
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
                  <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm whitespace-nowrap">
                    {experience.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
