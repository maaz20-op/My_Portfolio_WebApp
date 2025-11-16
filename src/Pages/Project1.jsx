import React from "react";
import LinksButtons from "../utils/buttonsLinks";
import BackButton from "../utils/backButton";
import { useRef, useEffect } from "react";


const Project1 = () => {
  const keyFeatures = [
    {
      title: "Core Platform",
      items: [
        "Full-stack social media platform for sharing images and short videos",
        "Mobile-first UI/UX optimized for smooth scrolling & interaction",
        "Server-side rendering using EJS for fast initial page loads",
      ],
    },
    {
      title: "User Accounts & Authentication",
      items: [
        "Secure user authentication with JWT + cookies",
        "Password hashing (bcrypt) for account protection",
        "Profile pages with user bio, picture, and posts grid",
        "Follow system (future-ready design) for scaling to social graph interactions",
      ],
    },
    {
      title: "Post System",
      items: [
        "Users can upload images and videos",
        "Uploads are stored and optimized using Cloudinary CDN",
        "Video player with auto-play/pause on scroll, seek/progress control, and Mute/Unmute toggle",
        "Posts support Like, Comment, and Share actions",
      ],
    },
    {
      title: "Real-Time Interactions",
      items: [
        "Dynamic like & comment updates without page reload",
        "Comment section uses event delegation for scalable DOM efficiency",
      ],
    },
    {
      title: "Search & Explore",
      items: [
        "Search posts by caption / prompt / tags",
        "Search users by username or display name",
        "Optimized using MongoDB text queries / (Atlas Search optional)",
      ],
    },
    {
      title: "AI Image Generation (Premium Feature)",
      items: [
        "Built-in AI image creation using prompt input",
        "Generated images automatically uploaded and displayed in feed",
        "Credits/usage handled per account plan",
      ],
    },
    {
      title: "Premium Subscription System",
      items: [
        "Free vs Premium account tiers",
        "Premium users get higher upload limits, access to AI features, faster processing & priority queue",
        "Payment integration options prepared (Stripe / JazzCash / EasyPaisa)",
      ],
    },
    {
      title: "Background Job Queues & Email Notifications",
      items: [
        "Heavy tasks like video processing, AI image generation, and email notifications handled using Redis-based Bull queue",
        "Welcome email on signup and login alert email for security",
        "Uses Nodemailer / Resend for reliable delivery",
      ],
    },
    {
      title: "Security & Validation",
      items: [
        "Protected routes for all user features",
        "Secure cookies to prevent unauthorized session access",
        "Input validation to prevent malformed requests",
      ],
    },
  ];

  const useRef2 = useRef(null)

  useEffect(() => {
    useRef2.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []); 




  return (
    <div ref={useRef2} className="min-h-screen text-gray-200 flex flex-col items-center p-6 font-sans">
    <BackButton/>
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6 text-center">
        ReelNest Web App
      </h1>
 <div className="flex lg:flex-row flex-col  gap-6">
  <div className="flex h-[200px] lg:h-[40vh] gap-6 items-center w-[300px] lg:w-[600px]">
    <video
  muted 
  controls
  loop 
  playsInline
  className="w-full h-full object-cover rounded-2xl"
>
  <source src="https://res.cloudinary.com/ddl6cgcbp/video/upload/q_auto,f_auto/v1763264712/ReelNest/videos/mri6le0hrnygreqhya3h.mp4" type="video/mp4" />
</video>
</div>
      <div className="flex h-[250px] lg:h-[40vh] gap-6 items-center w-[300px] lg:w-[700px] overflow-x-scroll custom-scrollbar">
        {[
          "https://i.postimg.cc/c1jmKJ8L/reelnest-5.png",
          "https://i.postimg.cc/7PpWF991/reelnest-1.png",
          "https://i.postimg.cc/YSZ96TNY/reelnest-2.png",
          "https://i.postimg.cc/y69PZHh9/reelnest-4.png",
          "https://i.postimg.cc/SN2gV9pJ/reelnest-3.png",
        ].map((src, indx) => (
          <img
            key={indx}
            src={src}
            alt="Planet illustration"
            className="flex-shrink-0 rounded-lg object-cover lg:mb-6 h-[165px] lg:h-[90%] w-[320px] lg:w-[70%]"
          />
        ))}
      </div>
</div>
      {/* Subtitle */}
      <p className="text-lg text-gray-300 text-center mt-5 mb-8">
        Full-Stack Social Media App
      </p>

       {/* Buttons */}
<LinksButtons/> 


      {/* Key Features */}
      <div className="max-w-2xl w-full mb-10">
        {keyFeatures.map((section, index) => (
          <div key={index} className="mb-2">
            <h1 className="text-[18px] font-bold text-orange-500">
              {section.title}
            </h1>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-gray-300">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Preview Images */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <img
          src="https://i.postimg.cc/c1jmKJ8L/reelnest-5.png"
          alt="Dashboard"
          className="w-78 h-40 object-cover rounded-lg"
        />
        <img
          src="https://i.postimg.cc/7PpWF991/reelnest-1.png"
          alt="Analytics"
          className="w-64 h-40 object-cover rounded-lg"
        />
        <img
          src="https://i.postimg.cc/y69PZHh9/reelnest-4.png"
          alt="Settings"
          className="w-64 h-40 object-cover rounded-lg"
        />
      </div>

      {/* Technologies */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl text-orange-500 font-semibold mb-4">
          Technologies
        </h2>
        <div className="flex flex-wrap lg:w-[600px] justify-center gap-3">
          {[" EJS, CSS, JS", "Express.JS", "Node.js", "MongoDB", "Nginx LoadBalancing", "Redis Caching" , "Clouldinary Storage", "Passport.JS Authentication", "Payment Stripe.JS" ,"Huggy Face Ai"].map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Description */}
      <div className="max-w-2xl text-center mb-10">
        <h2 className="text-2xl text-orange-500 font-semibold mb-3">
          Project Description
        </h2>
        <p className="text-gray-300">
          ReelNest is a full-stack social media platform focused on sharing short videos and images. It includes secure user authentication, a mobile-optimized feed, interactive post features (like, comment, share), Cloudinary-based media handling, and a premium upgrade system offering AI image generation and faster processing. Built with Node.js, Express, MongoDB, and Redis queues for scalable performance
        </p>
      </div>

 {/* Buttons */}
    <LinksButtons/>
     

      {/* Back Button */}
      <button className="text-orange-400 hover:underline flex items-center gap-2">
        ← Back
      </button>
    </div>
  );
};

export default Project1;
