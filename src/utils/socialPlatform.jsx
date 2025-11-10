import { Youtube, Linkedin, Instagram, Github } from "lucide-react";

function SocialPlatformLinks(){
    return (
         <div className="flex gap-8">
        <a
          href="https://www.youtube.com/@maazjaved-ps5jn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube strokeWidth={2} className="hover:text-red-500 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/maaz-javed-4793b9363/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin strokeWidth={2} className="hover:text-blue-500 transition" />
        </a>

        <a
          href="https://www.instagram.com/m347807/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            strokeWidth={2}
            className="hover:text-pink-500 transition"
          />
        </a>

        <a
          href="https://github.com/maaz20-op/Pinterest_Clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github strokeWidth={2} className="hover:text-gray-300 transition" />
        </a>
      </div>
    )
}

export default SocialPlatformLinks;