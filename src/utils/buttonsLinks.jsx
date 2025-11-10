import {Github, RadioTower} from 'lucide-react'
import { Link } from "react-router-dom";

function LinksButtons(){
    return <>
       {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <Link to="https://reelnest-official.vercel.app/profile">
        <div
          className="border flex gap-2 border-orange-500 text-orange-400 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition"
        >
        <span>Live Demo</span> <RadioTower />
        </div> 
        </Link>
       
       <Link to="https://github.com/maaz20-op/Pinterest_Clone">
 <div
 className="border flex gap-2 border-orange-500 text-orange-400 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition"
        >
         <span> Source Code</span> <Github />
        </div>
        </Link>
      
      </div>
     
    </>
}

export default LinksButtons;