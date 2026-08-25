import React from "react";
import LinksButtons from "../utils/buttonsLinks";
import BackButton from "../utils/backButton";
import { useRef, useEffect } from "react";

const keyFeatures = [
  {
    title: "Core Platform",
    items: [
      "Full-stack MERN e-commerce platform built for Glory",
      "Complete online clothing store for Men and Women",
      "Modern responsive UI with GSAP-powered animations",
      "Fully mobile-responsive shopping experience",
    ],
  },

  {
    title: "Authentication & User Accounts",
    items: [
      "Secure authentication using JWT and HTTP-based authorization",
      "Password hashing for secure account protection",
      "Google OAuth login integration",
      "Signup, login, logout, and forgot-password functionality",
      "Email OTP flow for password recovery",
      "Global authentication context with protected frontend routes",
    ],
  },

  {
    title: "Product & Shopping Experience",
    items: [
      "Browse clothing products for Men and Women",
      "Detailed product pages with image sliders",
      "Product information and media optimized using Cloudinary",
      "Add products to cart and remove them from cart",
      "Cart validation and complete shopping cart lifecycle",
    ],
  },

  {
    title: "Reviews & Product Ratings",
    items: [
      "Customers can submit product reviews",
      "Real-time review percentage updates",
      "Dynamic product rating calculations",
      "Review system integrated directly into product details",
    ],
  },

  {
    title: "Order & Checkout System",
    items: [
      "Complete order placement workflow",
      "Manual payment option using transaction ID submission",
      "Order validation before placement",
      "Order confirmation email notifications",
      "Customers can track their order status",
    ],
  },

  {
    title: "Admin Dashboard",
    items: [
      "Secure JWT-protected admin authentication",
      "Real-time business dashboard",
      "Add, edit, and delete products",
      "Product image uploads through Multer and Cloudinary",
      "View and manage all customer orders",
      "View registered users and customer information",
    ],
  },

  {
    title: "Order Management",
    items: [
      "Admin can confirm or reject customer orders",
      "Order status tracking and management",
      "Centralized order management from the admin dashboard",
      "Scalable order workflow designed for business operations",
    ],
  },

  {
    title: "Sales Analytics",
    items: [
      "Monthly sales statistics and revenue tracking",
      "PKR-based monthly revenue analysis",
      "Real-time dashboard statistics for business monitoring",
      "Sales data structured for future analytics expansion",
    ],
  },

  {
    title: "Backend & API Architecture",
    items: [
      "RESTful API architecture built with Node.js and Express.js",
      "Versioned APIs for maintainable and scalable development",
      "MongoDB Atlas for cloud-based data management",
      "MVC folder structure for organized backend architecture",
      "Axios-based communication between frontend and backend",
    ],
  },

  {
    title: "Media Management & Notifications",
    items: [
      "Multer for handling product image uploads",
      "Cloudinary for product image storage and optimized delivery",
      "Nodemailer for signup and order-related email notifications",
      "Automated order confirmation emails",
    ],
  },

  {
    title: "Security & Production Features",
    items: [
      "JWT-based authentication and protected routes",
      "Secure admin authorization",
      "Helmet for HTTP security headers",
      "CORS configuration for controlled API access",
      "Input validation for products, carts, users, and orders",
      "Production-focused authentication and authorization architecture",
    ],
  },
];

const Project2 = () => {
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
        Glory E-Commerce webApp
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
              src="https://res.cloudinary.com/ddl6cgcbp/video/upload/q_auto:best,f_auto/v1787614895/ReelNest/videos/ypdckj4n6win8xlkbhhe.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex h-[250px] lg:h-[40vh] gap-6 items-center w-[300px] lg:w-[700px] overflow-x-scroll custom-scrollbar">
          {[
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617354/New_tab_-_Google_Chrome_8_25_2026_4_45_05_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617479/New_tab_-_Google_Chrome_8_25_2026_4_45_27_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617571/New_tab_-_Google_Chrome_8_25_2026_4_46_04_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617869/New_tab_-_Google_Chrome_8_25_2026_5_09_59_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617891/New_tab_-_Google_Chrome_8_25_2026_5_10_14_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617652/New_tab_-_Google_Chrome_8_25_2026_4_48_50_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617743/New_tab_-_Google_Chrome_8_25_2026_4_49_14_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617939/Glory_Collections_-_Google_Chrome_8_25_2026_5_11_49_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617948/Glory_Collections_-_Google_Chrome_8_25_2026_5_12_34_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787618229/Glory_Collections_-_Google_Chrome_8_25_2026_5_36_50_AM.png",
            "https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617914/New_tab_-_Google_Chrome_8_25_2026_4_49_36_AM.png",
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
        Full-Stack E-Commerce Store
      </p>

      {/* Buttons */}
      <LinksButtons
        clientURLGithub="https://github.com/maaz20-op/E_commerce__Store_Client"
        serverURLGithub="https://github.com/maaz20-op/E_Commerce_Store_Backend"
        liveDemoURL="https://alkaram-collections.vercel.app/"
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
          src="https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617354/New_tab_-_Google_Chrome_8_25_2026_4_45_05_AM.png"
          alt="Dashboard"
          className="w-78 h-40 object-cover rounded-lg"
        />
        <img
          src="https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617571/New_tab_-_Google_Chrome_8_25_2026_4_46_04_AM.png"
          alt="Analytics"
          className="w-64 h-40 object-cover rounded-lg"
        />
        <img
          src="https://res.cloudinary.com/dqtwdhjup/image/upload/v1787617652/New_tab_-_Google_Chrome_8_25_2026_4_48_50_AM.png"
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
            "Context API",
            "React Router",
            "GSAP",
            "Axios",
            "Node.js",
            "Express.js",
            "MongoDB Atlas",
            "JWT Authentication",
            "Google OAuth",
            "Multer",
            "Cloudinary",
            "Nodemailer",
            "Helmet",
            "CORS",
            "REST API",
            "API Versioning",
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
          Glory is a full-stack MERN e-commerce platform built for a real-world
          clothing business, offering a complete online shopping experience for
          Men and Women. The platform includes secure JWT and Google
          authentication, product browsing with detailed image sliders, cart
          management, customer reviews, manual payment through transaction ID
          submission, and order tracking. It also features a powerful admin
          dashboard for product and order management, real-time sales
          statistics, Cloudinary media handling, automated email notifications,
          and production-focused security using Helmet, CORS, and protected
          APIs. The application is fully responsive and enhanced with GSAP
          animations for a modern and engaging user experience.
        </p>
      </div>

      {/* Buttons */}
      <LinksButtons
        clientURLGithub="https://github.com/maaz20-op/E_commerce__Store_Client"
        serverURLGithub="https://github.com/maaz20-op/E_Commerce_Store_Backend"
        liveDemoURL="https://alkaram-collections.vercel.app/"
      />

      {/* Back Button */}
      <BackButton />
    </div>
  );
};

export default Project2;
