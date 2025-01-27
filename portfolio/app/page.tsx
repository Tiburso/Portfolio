import Layout from "./components/Layout"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import UniversitySection from "./components/UniversitySection"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <UniversitySection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  )
}

