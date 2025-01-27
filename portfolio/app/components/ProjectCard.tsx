"use client"

import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
}

export default function ProjectCard({ title, description, technologies, image }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-card-bg rounded-lg overflow-hidden shadow-lg">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-text mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-secondary text-white text-sm px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

