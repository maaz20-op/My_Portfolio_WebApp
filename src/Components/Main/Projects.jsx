import { Link} from "react-router-dom";
import Project1 from "../../Pages/Project1";

function Projects({sectionRefrence}){
  return (
   <div ref={sectionRefrence} className="h-80 w-[75vw] "> 
     <h2 className="font-heading text-xl text-[#cccccc] mt-10">My Projects</h2>

     <div className="flex gap-5 mt-5 px-6 w-[90vw] overflow-x-auto scrollbar-hide">
       <div className="flex-shrink-0 h-60 flex flex-col items-center gap-6 justify-center p-3.5 w-64 bg-[#201e1e] rounded-2xl">
        <img src="https://i.postimg.cc/c1jmKJ8L/reelnest-5.png" alt="Project1" className="rounded-xl" /> 
         <div className="flex flex-col gap-3">
           <h1 className="text-sm">Social Media Full Stack App</h1>
          <Link to='/project1'>
          <button className="text-sm text-black active:scale-95 font-bold rounded-xl px-2.5 py-1 bg-[#ff9633]">
               View Project
           </button>
          </Link> 
         </div>
       </div>

       <div className="flex-shrink-0 h-60 flex flex-col items-center gap-6 justify-center p-3.5 w-64 bg-[#201e1e] rounded-2xl">
         <img src="https://iili.io/fHvvs0g.png" alt="Project1" className="rounded-xl" /> 
         <div className="flex flex-col gap-3">
           <h1 className="text-sm">E-Commerce Full Stack App</h1>
         <Link to='/project2'>
          <button className="text-sm text-black active:scale-95 font-bold rounded-xl px-2.5 py-1 bg-[#ff9633]">
               View Project
           </button>
          </Link> 
         </div>
       </div>
        <div className="flex-shrink-0 h-60 flex flex-col items-center gap-6 justify-center p-3.5 w-64 bg-[#201e1e] rounded-2xl">
        <img src="https://iili.io/fHvvs0g.png" alt="Project1" className="rounded-xl" /> 
         <div className="flex flex-col gap-3">
           <h1 className="text-sm">Pending ....</h1>
            <Link to='/project3'>
          <button className="text-sm text-black active:scale-95 font-bold rounded-xl px-2.5 py-1 bg-[#ff9633]">
               View Project
           </button>
          </Link> 
         </div>
       </div>
     </div>
   </div>
  )
}

export default Projects;