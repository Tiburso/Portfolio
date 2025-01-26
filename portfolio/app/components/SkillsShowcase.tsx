"use client"

import { useState } from "react"

const skills = [
  { name: "React", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 70 },
  { name: "CSS", level: 80 },
]

export default function SkillsShowcase() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">{skill.name}</h3>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="bg-teal-500 rounded-full h-4 transition-all duration-1000 ease-out"
                  style={{
                    width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

