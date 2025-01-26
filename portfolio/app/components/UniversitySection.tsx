"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const courses = [
  {
    name: "Advanced Algorithms",
    grade: "A",
    description: "Studied complex algorithmic concepts and their applications in software development.",
  },
  {
    name: "Machine Learning",
    grade: "A-",
    description: "Explored various machine learning models and their implementation using Python and TensorFlow.",
  },
  {
    name: "Database Systems",
    grade: "B+",
    description:
      "Learned about database design, SQL, and worked on a project to create a fully functional web application with a database backend.",
  },
  {
    name: "Computer Networks",
    grade: "A",
    description:
      "Studied network protocols, security, and implemented a peer-to-peer file sharing system as a course project.",
  },
]

export default function UniversitySection() {
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
    <section id="university" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">University Education</h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary">{course.name}</h3>
              <p className="text-secondary mb-2">Grade: {course.grade}</p>
              <p className="text-text-light">{course.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

