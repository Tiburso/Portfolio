import { motion } from "framer-motion";
import work_experience from "../info/experience";

const Experience = () => {
  return (
    <div className="container-wrapper section-wrapper">
      <h2 className="section-title gradient-text">Work Experience</h2>

      <div className="relative">
        <div className="timeline-line" />

        <div className="space-y-4 sm:space-y-6">
          {work_experience.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative ml-6 sm:ml-8"
            >
              <div className="timeline-dot" />

              <div className="card p-4 sm:p-6">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      {experience.company}
                    </h3>
                    <span className="text-sm text-blue-600 font-medium px-3 py-1 rounded-full bg-blue-50 self-start sm:self-center">
                      {experience.period}
                    </span>
                  </div>

                  <p className="text-blue-600 font-medium text-sm sm:text-base">
                    {experience.role}
                  </p>

                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm sm:text-base">
                    {experience.description.map((bullet, i) => (
                      <li key={i} className="pl-1 sm:pl-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-1.5 flex-wrap">
                    {experience.skills.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-100/80 text-gray-600 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
