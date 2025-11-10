import {Youtube, Linkedin, Instagram, Github  } from 'lucide-react'

function HeroSection() {
return (
    <div className="h-full flex-col-reverse justify-center lg:gap-0 gap-[5vh]  lg:mt-0 mt-[120px]  lg:flex-row lg:w-full flex lg:justify-center">
    <div className="lg:h-[80%] h-[90%]   w-full lg:p-0 p-7 lg:w-[44%] lg:mt-22">
 <h1 className="text-[16px] text-[#b5b5b5]">Hi i am</h1>
 <h1 className="text-2xl font-bold  text-[#b5b5b5]">Maaz Javed</h1>
 <h1 className="lg:text-4xl lg:pt-4 text-3xl lg:p-0 p-3 font-heading font-extrabold text-[#ff7b00]">Full-stack MERN Developer</h1>
 <div className="flex  gap-6  items-center h-18 mt-6">
 <a   href="https://www.youtube.com/@maazjaved-ps5jn" target="_blank"  rel="noopener noreferrer" className="rounded-full  h-10 w-10 bg-[#2f2d2d] flex items-center justify-center"><Youtube strokeWidth={1} /></a>
<a  href="https://www.linkedin.com/in/maaz-javed-4793b9363/"  target="_blank" rel="noopener noreferrer" className="rounded-full  h-10 w-10 bg-[#2f2d2d] flex items-center justify-center"><Linkedin strokeWidth={1} /></a>
<a  href="https://www.instagram.com/m347807/" target="_blank"  rel="noopener noreferrer" className="rounded-full  h-10 w-10 bg-[#2f2d2d] flex items-center justify-center"><Instagram strokeWidth={1} /></a>
<a  href="https://github.com/maaz20-op/Pinterest_Clone" target="_blank" rel="noopener noreferrer" className="rounded-full  h-10 w-10 bg-[#2f2d2d] flex items-center justify-center"><Github strokeWidth={1} /></a>
  </div>
 <div className="flex gap-4 mt-5 lg:mt-14">
     <button className="bg-[#ff9633] lg:px-16 px-5 py:1.5 active:scale-95 lg:py-2.5 text-white rounded">Hire Me</button>
        <button className="bg-transparent border-2 px-10 lg:px-16 active:scale-95 border-gray-500  text-[#b5b5b5] lg:text-xs lg:py-2.5  rounded">Download CV</button>
 </div>
 <div className="mt-17 flex items-center  lg:w-[80%] w-full bg-[#201e1e] rounded-2xl">
  <div className="h-28 w-43 p-2  flex  flex-col items-center  ">
   <h2 className="text-[#ff7b00] lg:text-2xl text-xl font-bold">2+</h2>
   <div className="flex flex-col lg:text-sm text-xs text-[#cccccc] items-center mt-2">
       <h3 className="">Real World</h3>
   <h3>Projects</h3>
   </div>
   </div>
   <div className="h-24 w-[1.5px] bg-[#4b4949]"></div>
<div className="h-28 w-43 p-2  flex  flex-col items-center  ">
   <h2 className="text-[#ff7b00] lg:text-2xl  text-xl font-bold">Frontend</h2>
   <div className="flex flex-col lg:text-sm text-xs  text-[#cccccc] items-center mt-2">
       <h3 className="">UI/UX Design</h3>
   <h3> Expertise</h3>
   </div>
   </div>
    <div className="h-24 w-[1.5px]  bg-[#4b4949]"></div>
   <div className="h-28 lg:w-43 w-[300px] p-2 text-2xl flex  flex-col items-center  ">
   <h2 className="text-[#ff7b00] lg:text-2xl text-xl font-bold">Backend</h2>
   <div className="flex flex-col lg:text-sm text-xs text-[#cccccc] items-center mt-2">
       <h3>DataBase & Server</h3>
   <h3> Expertise</h3> 
   </div>
   </div>
 </div>


    </div>
       <div className="lg:h-[80%] h-[50%] lg:p-0   p-7 w-full flex  justify-start lg:justify-center items-center lg:mt-16 lg:w-[44%]">
        <div className="lg:h-[500px] lg:w-[500px] relative over  h-[300px] w-[300px] rounded-[50%] bg-[#232222cc]">
            <img  className='lg:h-[700px]  h-[450px] object-cover rounded-b-full  absolute bottom-0 ' src=" https://res.cloudinary.com/ddl6cgcbp/image/upload/q_auto,f_auto/v1762598758/ReelNest/images/zmgqchp0xwttq5pretea.png" alt="My Image" />
           </div>
       </div>
    </div>
)
}

export default HeroSection;
