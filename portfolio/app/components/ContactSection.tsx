"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Get In Touch</h2>
          <p className="text-secondary mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Contact Me
          </motion.a>
          <div className="mt-12 flex justify-center space-x-6">
            {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                whileHover={{ y: -3 }}
                className="text-secondary hover:text-primary transition-colors"
              >
                {platform}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

