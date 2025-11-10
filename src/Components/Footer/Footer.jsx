import Contact from "./contact";
import SocialLinks from "./SocialLinks";

function Footer({sectionRefrence}){
return (
<div ref={sectionRefrence} className="lg:h-[30vh] min-h-[30vh]  w-full flex flex-col gap-5 lg:gap-0 lg:flex-row bg-[#070707]  mt-15 p-7 ">
    <SocialLinks/>
 <Contact/>
</div>
)
}

export default Footer;