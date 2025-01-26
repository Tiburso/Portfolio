"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "Tech Innovators Inc.",
    position: "Junior Software Developer",
    period: "June 2022 - Present",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with the design team to implement responsive UI/UX designs",
      "Participated in code reviews and contributed to improving development processes",
    ],
  },
  {
    company: "DataDrive Solutions",
    position: "Data Science Intern",
    period: "Summer 2021",
    responsibilities: [
      "Assisted in developing machine learning models for predictive analytics",
      "Cleaned and preprocessed large datasets for analysis",
      "Created data visualizations to communicate insights to stakeholders",
    ],
  },
]

export default function ProfessionalExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-blue-600">{exp.company}</h3>
                  <span className="text-gray-600">{exp.period}</span>
                </div>
                <h4 className="text-xl font-medium mt-2 text-teal-600">{exp.position}</h4>
              </div>
              <motion.div
                className="px-6 pb-6"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

