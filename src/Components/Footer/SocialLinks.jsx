
import SocialPlatformLinks from "../../utils/socialPlatform";

function SocialLinks() {
  return (
    <div className="h-full flex flex-col gap-5 justify-center items-center lg:border-r border-amber-300 w-full lg:w-[50%]">
      <h1 className="text-xl text-[#cccccc] font-bold">
        Get In Touch with Me On
      </h1>
<SocialPlatformLinks/>
    </div>
  );
}

export default SocialLinks;
