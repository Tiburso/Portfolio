"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description:
      "Led the frontend development of a large-scale SaaS platform, improving performance and user experience.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed and maintained multiple web applications using React, Node.js, and PostgreSQL.",
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2016 - 2018",
    description: "Assisted in the development of responsive websites and implemented UI/UX designs.",
  },
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Experience</h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-12 relative pl-8 border-l-2 border-primary">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-semibold mb-1 text-primary">{exp.title}</h3>
              <p className="text-accent mb-2">
                {exp.company} | {exp.period}
              </p>
              <p className="text-secondary">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

