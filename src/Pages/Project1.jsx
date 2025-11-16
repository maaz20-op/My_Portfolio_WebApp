import React from "react";
import LinksButtons from "../utils/buttonsLinks";


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

  return "hi"
};

export default Project1;
