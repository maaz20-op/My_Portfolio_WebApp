import {Menu} from 'lucide-react'
import { useState } from 'react';

function NavBar({scrollToProjects, scrollToAbout, scrollToSkills, scrollToServices ,scrollToContact }) {
const [isMenuHidden, setMenu] = useState(true);


function onClick() {
    console.log(scrollToProjects, scrollToAbout, scrollToSkills, scrollToServices ,scrollToContact )
    if(isMenuHidden)  setMenu(false)
    else setMenu(true)
}

    return (
        <div className="lg:h-[10vh] select-none   py-6 px-10 lg:py-0 lg:w-full flex  justify-between lg:items-center lg:px-23 lg:font-bold">
    
              <h1 className="text-amber-50 text-2xl font-bold lg:text-xl">Maaz Devs</h1>
           <ul className={` ${isMenuHidden?"right-[-50vw]  lg:flex lg:flex-row  lg:right-0 hidden ":"right-0 block  z-999 lg:flex lg:flex-row"} transition-opacity ease-in-out duration-1150 absolute top-[12vh]   text-center lg:bg-transparent lg:flex-row lg:px-0 text lg:py-0 px-8 py-5 flex-col gap-4 bg-[#1b1a1a3f]  lg:relative lg:top-0 flex lg:gap-20 lg:text-xs lg:items-center text-[#cccccc]`}>
            <li className="text-[#ff9633]">Home</li>
            <li onClick={scrollToProjects}>Projects</li>
            <li onClick={scrollToServices}>Services</li>
         <li onClick={scrollToAbout}>About</li>
            <li onClick={scrollToSkills}>Skills</li>
            <li onClick={function(){
                scrollToContact();
                console.log("clicked contact ")
            }}>Contact Me</li>
           </ul>
         <div className='flex  items-center gap-3'>
           <button className="bg-[#ff9633] px-2 py-2 hidden lg:block lg:px-6 lg:text-xs lg:py-2.5 text-white rounded">Hire Me</button>
           <Menu size={40}
           onClick={onClick}
           className='lg:hidden font-bold block active:scale-95 z-99'/>
           </div>
        </div>
    )
}

export default NavBar;