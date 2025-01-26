"use client"

import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A real-time weather application using OpenWeatherMap API",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A productivity app built with React and Firebase",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ProjectGallery() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-64 object-cover" />
              <div
                className={`absolute inset-0 bg-teal-500 bg-opacity-90 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-center p-4">
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-100">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

