"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">About Me</h2>
          <p className="text-secondary mb-8">
            I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user
            experiences. With a strong foundation in both front-end and back-end technologies, I strive to build
            innovative solutions that make a difference.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React", "Node.js", "TypeScript", "Python"].map((skill) => (
              <motion.div key={skill} whileHover={{ scale: 1.05 }} className="bg-background rounded-lg p-3">
                <p className="font-medium text-primary">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

