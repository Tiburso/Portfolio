"use client"

import { useState, useRef, type MouseEvent } from "react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
}

export default function ProjectCard({ title, description, technologies, image }: ProjectCardProps) {
  const [tiltAngle, setTiltAngle] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = (y - centerY) / 10
    const tiltY = (centerX - x) / 10

    setTiltAngle({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTiltAngle({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tiltAngle.x}deg) rotateY(${tiltAngle.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-accent text-white text-sm px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

