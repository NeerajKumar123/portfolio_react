import { useState } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import AboutSection  from "./AboutSection "
import StatsSection  from "./StatsSection"
import SkillsSection  from "./SkillsSection"
import ResumeSection  from "./ResumeSection"
import Portfolio  from "./Portfolio"
import ServicesSection  from "./ServicesSection"
import Testimonials  from "./Testimonials"
import Contact  from "./Contact"




function App() {
  return (
    <div >
      {/* <Header /> */}
      {/* <HeroSection />
      <AboutSection/>
      <StatsSection/>
      <SkillsSection/>
      <ResumeSection/> */}
      {/* <Portfolio/> */}
      <ServicesSection/>
      <Testimonials/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
