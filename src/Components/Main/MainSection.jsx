import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";

function MainSection() {
 return (
 <div className="lg:h-[200vh] h-[220vh] flex flex-col w-[88vw] lg:border p-6 lg:mx-auto mt-15  lg:border-orange-400  rounded-2xl ">
   <About/>
   <Skills/>
   <Services/>
   <Projects/>
 </div>
 )
}

export default MainSection;
