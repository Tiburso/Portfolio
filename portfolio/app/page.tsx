import Navbar from "./components/Navbar"
import FloatingActionButton from "./components/FloatingActionButton"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import UniversitySection from "./components/UniversitySection"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <FloatingActionButton />
      <HeroSection />
      <AboutSection />
      <UniversitySection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

