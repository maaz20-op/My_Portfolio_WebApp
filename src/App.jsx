import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import HeaderSection from './Components/Header/Header'
import MainSection from './Components/Main/MainSection'
import Footer from './Components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import HeroSection from './Components/Header/HeroSection'
import { useLocation } from 'react-router-dom'
import NavBar from './Components/Header/NavBar'
import About from './Components/Main/About'
import Skills from './Components/Main/Skills'
import Services from './Components/Main/Services'
import Projects from './Components/Main/Projects'

function App() {
const location = useLocation();
const isProjectNotHide = location.pathname.startsWith('/project');
console.log(location)
const projectsRef = useRef(null);
const aboutRef = useRef(null);
const skillsRef = useRef(null);
const ServicesRef = useRef(null);
const ContactRef = useRef(null);

function scrollToProjects() { projectsRef.current?.scrollIntoView({ behavior: "smooth" }) }
function scrollToAbout() { aboutRef.current?.scrollIntoView({ behavior: "smooth" }) }
function scrollToSkills() { skillsRef.current?.scrollIntoView({ behavior: "smooth" }) }
function scrollToServices() { ServicesRef.current?.scrollIntoView({ behavior: "smooth" }) }
function scrollToContact() { ContactRef.current?.scrollIntoView({ behavior: "smooth" }) }


 return (
  <div className='min-h-full w-full select-none bg-[#121212] overflow-x-hidden text-white'>
   
   {isProjectNotHide? 
   <AppRoutes/> :
    <>
     <NavBar
 scrollToProjects={scrollToProjects}
  scrollToAbout={scrollToAbout}
  scrollToSkills={scrollToSkills}
  scrollToServices={scrollToServices}
  scrollToContact={scrollToContact}
    />
    <HeroSection/>
   <div className="lg:h-[200vh] h-[220vh] flex flex-col w-[88vw] lg:border p-6 lg:mx-auto mt-15  lg:border-orange-400  rounded-2xl ">
<About sectionRefrence={aboutRef}/>
  <Projects  sectionRefrence={projectsRef}/>
<Skills  sectionRefrence={skillsRef}/>
<Services  sectionRefrence={ServicesRef}/>
   </div>
   </>
   }
    <Footer sectionRefrence={ContactRef}/>
  </div>
 )
}

export default App
