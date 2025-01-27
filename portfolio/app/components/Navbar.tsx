"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const navItems = ["About", "University", "Experience", "Projects"]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.toLowerCase()))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item ? "text-primary" : "text-text-light hover:text-primary"
                }`}
              >
                {item}
                {activeSection === item && (
                  <motion.div
                    className="h-0.5 bg-primary mt-1"
                    layoutId="underline"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

