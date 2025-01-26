export default function UniversityWork() {
  const universityProjects = [
    {
      title: "Machine Learning Algorithm Comparison",
      description: "Implemented and compared various ML algorithms for image classification.",
      technologies: ["Python", "TensorFlow", "Scikit-learn"],
    },
    {
      title: "Distributed Systems Simulation",
      description: "Developed a simulation of a distributed system using actor model.",
      technologies: ["Java", "Akka", "Docker"],
    },
    {
      title: "Web-based Collaborative Text Editor",
      description: "Created a real-time collaborative text editor using websockets.",
      technologies: ["JavaScript", "Node.js", "Socket.io", "MongoDB"],
    },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">University Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universityProjects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

