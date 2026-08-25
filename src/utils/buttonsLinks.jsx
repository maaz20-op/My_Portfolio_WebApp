import { Github, RadioTower } from "lucide-react";
import { Link } from "react-router-dom";

function LinksButtons({ clientURLGithub, serverURLGithub, liveDemoURL }) {
  return (
    <>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <Link to={liveDemoURL}>
          <div className="border flex gap-2 border-orange-500 text-orange-400 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition">
            <span>Live Demo</span> <RadioTower />
          </div>
        </Link>

        <div className="flex gap-2">
          <Link to={clientURLGithub}>
            <div className="border flex gap-2 border-orange-500 text-orange-400 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition">
              <span> Source Code Frontend</span> <Github />
            </div>
          </Link>
          <Link to={serverURLGithub}>
            <div className="border flex gap-2 border-orange-500 text-orange-400 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition">
              <span> Source Code Backend</span> <Github />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LinksButtons;
