"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ContactSection() {
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
    <section id="contact" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8">
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg mb-8 text-gray-300">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="mailto:your.email@example.com"
            className="inline-block bg-accent text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Contact Me
          </motion.a>
          <motion.div variants={itemVariants} className="mt-12 flex justify-center space-x-6">
            {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
              <a key={platform} href="#" className="text-gray-300 hover:text-white transition-colors">
                {platform}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

