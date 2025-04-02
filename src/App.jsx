import { useState } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection "
import StatsSection from "./StatsSection"
import SkillsSection from "./SkillsSection"
import ResumeSection from "./ResumeSection"
import Portfolio from "./Portfolio"
import ServicesSection from "./ServicesSection"
import Testimonials from "./Testimonials"
import Contact from "./Contact"




function App() {
  return (
    <div className="flex  bg-red-300 w-full">
      {/* <div className="w-72 bg-blue-500 text-white">
        <Header />
      </div> */}
      <div className="flex-1 bg-green-500 text-white">
        {/* <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ResumeSection /> */}
        {/* <Portfolio /> */}
        {/* <ServicesSection /> */}
        <Testimonials />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
