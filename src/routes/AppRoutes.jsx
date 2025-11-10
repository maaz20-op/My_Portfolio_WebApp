import { Route, Routes } from "react-router-dom";
import Project1 from "../Pages/Project1";
import Project2 from "../Pages/Projects2";
import Project3 from "../Pages/Project3";

function AppRoutes(){
return (
 <Routes>
    <Route path='/project1' element={<Project1/>}/>
     <Route path='/project2' element={<Project2/>}/>
      <Route path='/project3' element={<Project3/>}/>
 </Routes>
)
}

export default AppRoutes;