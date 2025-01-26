"use client"

import { useState } from "react"

export default function AboutMe() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">About Me</h2>
        <div className="max-w-2xl mx-auto">
          <div
            className={`bg-gray-100 p-8 rounded-lg shadow-md cursor-pointer transition-transform duration-500 transform ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className={`${isFlipped ? "hidden" : "block"}`}>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Hello, I'm Your Name</h3>
              <p className="text-gray-700">
                I'm a passionate developer with a strong academic background and professional experience. Click to learn
                more about me!
              </p>
            </div>
            <div className={`${isFlipped ? "block" : "hidden"}`}>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Key Achievements</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Graduated with honors in Computer Science</li>
                <li>Completed multiple internships in software development</li>
                <li>Contributed to open-source projects</li>
                <li>Won hackathons and coding competitions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

