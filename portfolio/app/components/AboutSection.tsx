"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
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
    <section id="about" className="py-20 bg-card-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg mb-8 text-text">
            I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user
            experiences. With a strong foundation in both front-end and back-end technologies, I strive to build
            innovative solutions that make a difference.
          </motion.p>
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React", "Node.js", "TypeScript", "Python"].map((skill) => (
              <div key={skill} className="bg-secondary text-white rounded-lg p-3 text-center">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

