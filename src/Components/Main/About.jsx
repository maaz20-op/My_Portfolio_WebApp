import { useState } from "react";
import {ChevronDown} from 'lucide-react';

function About({sectionRefrence}) {
const [isToggleAbout, setToggle] = useState(false);


function onClick(){
console.log("clicked")
}
return (
    <div ref={sectionRefrence} >
        <div className="font-heading text-xl flex items-center "><h1>About Me</h1><ChevronDown className="lg:hidden" onClick={onClick}/></div>
        <div className="px-5 py-5 bg-[#201e1e] mt-4 lg:text-sm text-xs text-[#cccccc] rounded-2xl">
            I am a MERN Stack Developer with a strong focus on building real-world, full-stack applications that are fast, scalable and easy to use. I enjoy turning ideas into functional products by combining clean UI design with efficient backend architecture. I work with modern tools like React, Node.js, Express and MongoDB, and I pay attention to code quality, API structure, and user experience. I believe in improving through continuous learning and building. Every project I create teaches me something new and helps me write better, more maintainable code.
          </div>
          </div>
)
}

export default About;