import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import Process from "./components/Process.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Location from "./components/Location.jsx";

function AppContent() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return (
      <div className="min-h-screen w-full bg-[#F5F2EC] dark:bg-[#0F0F0F]">
        <Navbar />
        <ProjectDetail
          project={selectedProject}
          onBack={handleBack}
          onSelectProject={handleSelectProject}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#F5F2EC] dark:bg-[#0F0F0F]">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects onSelectProject={handleSelectProject} />
      <Process />
      <Testimonials />
      <Contact />
      <Location/>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

