import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills({ sectionRefrence }) {
  // Array of refs for all skill bars
  const boxRefs = useRef([]);
  boxRefs.current = []; // Clear array on each render

  // GSAP animation
  useGSAP(() => {
    gsap.to(boxRefs.current, {
      width: (i, el) => el.dataset.percent, // fill width according to data-percent
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRefrence.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  // Helper function to add refs
  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  const frontendSkills = [
    ["HTML", "95%"],
    ["CSS", "80%"],
    ["Tailwind.CSS", "84%"],
    ["JavaScript", "92%"],
    ["React.js", "86%"],
  ];

  const backendSkills = [
    ["Node.js", "87%"],
    ["Express.js", "80%"],
    ["MongoDB", "89%"],
    ["Problem Solving", "85%"],
    ["Debugging", "83%"],
  ];

  const renderSkillSection = (title, skills) => (
    <div className="flex-shrink-0 lg:w-[46%] w-[80vw] lg:h-[50vh] py-6 px-8 rounded-2xl flex-col gap-4 flex items-center bg-[#201e1e]">
      <h1 className="text-xl">{title}</h1>
      <div className="flex flex-col gap-4">
        {skills.map(([tech, percent]) => (
          <div className="flex flex-col gap-1.5" key={tech}>
            <div className="flex justify-between w-[60vw] lg:w-[28vw]">
              <h3>{tech}</h3> <h3>{percent}</h3>
            </div>
            <div className="bg-[#121212] w-[60vw] lg:w-[28vw] h-1.5 rounded-2xl">
              <div
                ref={addToRefs}
                data-percent={percent}
                className="bg-[#ff9633] h-full rounded-2xl"
                style={{ width: "0%" }} // start from 0%
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={sectionRefrence} className="lg:w-[75vw]">
      <h2 className="font-heading text-xl text-[#cccccc] mt-10">Skills</h2>
      <div className="flex overflow-x-auto px-6 w-[90vw] lg:overflow-hidden gap-4 mt-2 text-[#cccccc] rounded-2xl scroll-smooth">
        {renderSkillSection("Frontend", frontendSkills)}
        {renderSkillSection("Backend", backendSkills)}
      </div>
    </div>
  );
}

export default Skills;
