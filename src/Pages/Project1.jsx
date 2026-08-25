import React from "react";
import LinksButtons from "../utils/buttonsLinks";
import BackButton from "../utils/backButton";
import { useRef, useEffect } from "react";

const keyFeatures = [
  {
    title: "Core Platform",
    items: [
      "Production-ready full-stack social media platform built with React, Node.js, Express.js, and MongoDB",
      "Modern React CSR architecture with fully responsive UI for desktop and mobile",
      "Users can create, share, discover, and interact with image and video content",
    ],
  },

  {
    title: "Authentication & Account Security",
    items: [
      "Local authentication with secure HTTP-only cookies",
      "Google OAuth authentication using Passport.js",
      "OTP verification and forgot-password flow",
      "Account privacy with public/private profiles",
      "Protected routes, authorization, and account-level access control",
    ],
  },

  {
    title: "Social Features",
    items: [
      "Create and share image and video posts",
      "Like, comment, save, and share posts",
      "Follow/unfollow system with followers and following management",
      "Search users and posts",
      "Block and unblock users",
      "Private account support with controlled content visibility",
    ],
  },

  {
    title: "Real-Time Messaging & Video Calling",
    items: [
      "Real-time one-to-one messaging powered by Socket.IO",
      "Message timestamps, deletion, and active-friend presence",
      "Real-time WebRTC video calling",
      "Socket.IO signaling for WebRTC connection establishment",
      "Metered.ca TURN server integration for reliable peer-to-peer connections",
    ],
  },

  {
    title: "AI-Assisted Content Creation",
    items: [
      "AI-assisted post creation to help users generate content",
      "Prompt-based content generation integrated into the posting workflow",
      "Generated media can be uploaded and published through the platform",
    ],
  },

  {
    title: "Media Upload & Processing",
    items: [
      "Image and video uploads using Multer and Cloudinary",
      "Cloudinary CDN integration for optimized media delivery",
      "Video playback with autoplay/pause behavior based on scrolling",
      "Media-focused feed experience optimized for smooth interaction",
    ],
  },

  {
    title: "Performance & Optimization",
    items: [
      "RTK Query caching for efficient API data management",
      "Optimistic UI updates for faster user interactions",
      "Infinite scrolling for large social feeds",
      "Feed virtualization using react-virtuoso",
      "React.lazy and code splitting for optimized bundle loading",
      "useMemo and useCallback for reducing unnecessary computations and renders",
      "Render profiling and build-size analysis",
      "Error Boundaries for improved application stability",
    ],
  },

  {
    title: "Backend & API Architecture",
    items: [
      "RESTful API architecture built with Node.js and Express.js",
      "Versioned APIs for maintainable backend development",
      "MongoDB with Mongoose for scalable data management",
      "MongoDB aggregation pipelines for complex data operations",
      "Database indexing for improved query performance",
      "Cloudinary and Multer integration for media handling",
    ],
  },

  {
    title: "Background Jobs & Notifications",
    items: [
      "BullMQ and Redis for processing background and asynchronous jobs",
      "Background processing for resource-intensive operations",
      "Nodemailer integration for transactional email notifications",
      "Asynchronous job architecture designed to keep API requests responsive",
    ],
  },

  {
    title: "Security",
    items: [
      "HTTP-only secure cookies for authentication",
      "Password hashing using bcrypt",
      "Rate limiting to reduce abusive requests",
      "Helmet for HTTP security headers",
      "CORS configuration for controlled cross-origin access",
      "Input validation and sanitization",
      "Protected routes and authorization middleware",
    ],
  },

  {
    title: "Deployment & Production",
    items: [
      "Production frontend deployed on Vercel",
      "Production backend deployed on Railway",
      "Separate frontend and backend deployment architecture",
      "Production-focused API, authentication, media, and real-time communication setup",
    ],
  },
];

const Project1 = () => {
  const useRef2 = useRef(null);

  useEffect(() => {
    useRef2.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div
      ref={useRef2}
      className="min-h-screen text-gray-200 flex flex-col items-center p-6 font-sans"
    >
      <BackButton />
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
            <source
              src="https://res.cloudinary.com/ddl6cgcbp/video/upload/q_auto:best,f_auto/v1787614442/ReelNest/videos/hbvq1mybr39htafsyuir.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex h-[250px] lg:h-[40vh] gap-6 items-center w-[300px] lg:w-[700px] overflow-x-scroll custom-scrollbar">
          {[
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608052/client_-_Google_Chrome_8_25_2026_2_30_02_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608382/client_-_Google_Chrome_8_25_2026_2_32_05_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608288/Glory_Collections_-_Google_Chrome_8_24_2026_4_12_13_PM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787609243/client_-_Google_Chrome_8_25_2026_3_05_12_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608536/client_-_Google_Chrome_8_25_2026_2_31_02_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787607879/client_-_Google_Chrome_8_25_2026_2_30_43_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608667/Glory_Collections_-_Google_Chrome_8_24_2026_4_03_15_PM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608667/Glory_Collections_-_Google_Chrome_8_24_2026_4_03_15_PM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608451/client_-_Google_Chrome_8_25_2026_2_34_22_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608786/client_-_Google_Chrome_8_25_2026_2_31_23_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608908/client_-_Google_Chrome_8_25_2026_2_32_42_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608946/client_-_Google_Chrome_8_25_2026_2_33_50_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787609595/client_-_Google_Chrome_8_25_2026_2_33_31_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787609869/client_-_Google_Chrome_8_25_2026_3_15_56_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787619016/client_-_Google_Chrome_8_25_2026_5_49_49_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787610008/client_-_Google_Chrome_8_25_2026_3_16_20_AM.png",
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
      <LinksButtons
        clientURLGithub="https://github.com/maaz20-op/ReelNest_Frontend"
        serverURLGithub="https://github.com/maaz20-op/ReelNest_Backend"
        liveDemoURL="https://reel-nest-frontend.vercel.app/"
      />

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
          src="https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608052/client_-_Google_Chrome_8_25_2026_2_30_02_AM.png"
          alt="Dashboard"
          className="w-78 h-40 object-cover rounded-lg"
        />
        <img
          src="https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608288/Glory_Collections_-_Google_Chrome_8_24_2026_4_12_13_PM.png"
          alt="Analytics"
          className="w-64 h-40 object-cover rounded-lg"
        />
        <img
          src="https://res.cloudinary.com/dqtwdhjup/image/upload/v1787608382/client_-_Google_Chrome_8_25_2026_2_32_05_AM.png"
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
          {[
            "React.js",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Socket.IO",
            "WebRTC",
            "Metered TURN",
            "RTK Query",
            "Redis",
            "BullMQ",
            "Cloudinary",
            "Multer",
            "Passport.js",
            "Google OAuth",
            "JWT",
            "Nodemailer",
            "React Virtuoso",
            "Vercel",
            "Railway",
          ].map((tech) => (
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
          ReelNest is a production-ready full-stack social media platform for
          sharing images and short videos. It features secure authentication
          with Google OAuth, OTP, and forgot-password flows, real-time messaging
          and WebRTC video calling, social interactions, private accounts,
          follow/unfollow, saved posts, search, and block/unblock functionality.
          Built with React, Node.js, Express, MongoDB, Socket.IO, Cloudinary,
          Redis, and BullMQ, ReelNest also uses RTK Query, infinite scrolling,
          feed virtualization, optimistic updates, and code splitting for a
          scalable and performant user experience.
        </p>
      </div>

      {/* Buttons */}
      <LinksButtons
        clientURLGithub="https://github.com/maaz20-op/ReelNest_Frontend"
        serverURLGithub="https://github.com/maaz20-op/ReelNest_Backend"
        liveDemoURL="https://reel-nest-frontend.vercel.app/"
      />

      {/* Back Button */}
      <BackButton />
    </div>
  );
};

export default Project1;
