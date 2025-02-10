import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Education = () => {
  const education = [
    {
      school: "Eindhoven Technical University",
      degree:
        "Master of Science in Artificial Intelligence and Engineering Systems",
      period: "2023 - 2025",
      current: true,
    },
    {
      school: "Technical University of Lisbon",
      degree: "Bachelor of Science in Computer Science and Engineering",
      period: "2019 - 2022",
      current: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="container-wrapper section-wrapper"
    >
      <h2 className="section-title gradient-text">Education</h2>

      <div className="relative">
        <div className="timeline-line" />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative ml-6 sm:ml-8 mb-4 sm:mb-6 last:mb-0"
          >
            <div className="timeline-dot" />

            <div className="card p-4 sm:p-6">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {edu.school}
                  </h3>
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="text-sm text-blue-600 font-medium px-3 py-1 rounded-full bg-blue-50">
                      {edu.period}
                    </span>
                    {edu.current && (
                      <span className="text-xs text-green-600 font-medium px-2 py-0.5 rounded-full bg-green-50">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  {edu.degree}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
