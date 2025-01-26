"use client"

import { motion } from "framer-motion"
import ParticleBackground from "./ParticleBackground"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
      <ParticleBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
        >
          Hello, I'm <span className="text-accent">Your Name</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-200 mb-8"
        >
          Full-stack Developer | UI/UX Enthusiast | Problem Solver
        </motion.p>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-white px-8 py-3 rounded-full font-medium hover:bg-accent transition-colors"
        >
          Explore My Work
        </motion.a>
      </motion.div>
    </section>
  )
}

