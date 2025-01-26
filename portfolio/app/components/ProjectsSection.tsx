"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "AI-powered Chat Application",
    description: "A chat app with AI-driven response suggestions and sentiment analysis.",
    technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Blockchain Voting System",
    description: "A secure and transparent voting system built on blockchain technology.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ProjectsSection() {
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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Projects</h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

