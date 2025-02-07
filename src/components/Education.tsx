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
      className="container-wrapper section-wrapper mb-4"
    >
      <h2 className="section-title gradient-text">Education</h2>
      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500/20 to-purple-500/20 hidden md:block" />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative ml-0 md:ml-8 mb-8 last:mb-0"
          >
            <div
              className="absolute -left-[8px] top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 to-purple-500 origin-top scale-0 transition-transform duration-300 hidden md:block"
              style={{ transform: "scaleY(1)" }}
            />

            <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {edu.school}
                  </h3>
                  <p className="text-gray-600 mt-1">{edu.degree}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-blue-600 font-medium px-3 py-1 rounded-full bg-blue-50">
                    {edu.period}
                  </span>
                  {edu.current && (
                    <span className="text-xs text-green-600 font-medium px-2 py-1 rounded-full bg-green-50">
                      Current
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
