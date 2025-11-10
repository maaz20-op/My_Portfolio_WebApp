import { CodeXml, Palette, Server } from 'lucide-react'

function Services({sectionRefrence}) {
  return (
    <div ref={sectionRefrence} className="lg:h-80 lg:w-[75vw]">
      <h2 className="font-heading text-xl text-[#cccccc] mt-10">My Services</h2>

      <div className="flex gap-5 w-[90vw] px-6 mt-5 overflow-x-auto scroll-smooth">

        <div className="flex-shrink-0 h-[230px] flex flex-col items-center gap-4 justify-center p-5 w-[230px] bg-[#201e1e] rounded-2xl">
          <Palette size={40} color="#ff9633" strokeWidth={2.5} />
          <div className="text-center flex flex-col gap-1.5">
            <h3 className="text-xl font-bold">UI/UX Design</h3>
            <p className="text-[#cccccc] text-sm">
              Lorem, ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 h-[230px] flex flex-col items-center gap-4 justify-center p-5 w-[230px] bg-[#201e1e] rounded-2xl">
          <CodeXml size={40} color="#ff9633" strokeWidth={2.5} />
          <div className="text-center flex flex-col gap-1.5">
            <h3 className="text-xl font-bold">Frontend Development</h3>
            <p className="text-[#cccccc] text-sm">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 h-[230px] flex flex-col items-center gap-4 justify-center p-5 w-[230px] bg-[#201e1e] rounded-2xl">
          <Server size={40} color="#ff9633" strokeWidth={2.5} />
          <div className="text-center flex flex-col gap-1.5">
            <h3 className="text-xl font-bold">Backend Development</h3>
            <p className="text-[#cccccc] text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
