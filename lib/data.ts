import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import marketplaceImage from "@/public/MarkeetPlace.png";
import movieWebsiteImage from "@/public/movie.png";
import staticCarWebsiteImage from "@/public/car2.png";
import vehicleManagementSystemImage from "@/public//carweb.png";

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experiences",
      hash: "#experience",
    },
  ];

export const experiencesData = [
    {
        title: "Software Engineering at Aptech",
        location: "Karachi, Pakistan",
        description:
            "Currently pursuing a 3-year diploma in Software Engineering, where I am building foundational expertise in web development, programming languages, and IT systems.",
        icon: React.createElement(LuGraduationCap),
        date: "2023 - Ongoing",
    },
    {
        title: "AI Training at Governor House GIAIC",
        location: "Karachi, Pakistan",
        description:
            "Learning AI concepts and technologies to leverage artificial intelligence in solving real-world problems and improving system efficiencies.",
        icon: React.createElement(LuGraduationCap),
        date: "2024 - Ongoing",
    },
    {
        title: "IT Executive",
        location: "IF Condition",
        description:
            "Gained 1 year of experience as an IT Executive, managing company IT infrastructure, troubleshooting technical issues, and providing support across the organization.",
        icon: React.createElement(FaReact),
        date: "2023 - 2024",
    },
    {
        title: "Hardware Technician",
        location: "Own Shop",
        description:
            "Over 4 years of experience in computer hardware work, providing repairs, upgrades, and support for various computer systems.",
        icon: React.createElement(FaReact),
        date: "2019 - 2023",
    },
];

export const projectsData = [
    {
        title: "MarketPlace - Comforty",
        description:
            "A full-featured marketplace with product listings, cart, order management, and integration with APIs. Built with Next.js and Sanity CMS for dynamic content management.",
        tags: ["Next.js", "TypeScript", "Sanity CMS", "TailwindCSS"],
        imageUrl: marketplaceImage,
        projectUrl: "https://github.com/Hamza123545/Marketplace-Technical-Foundation--Comforty.git",
        demoUrl: "https://marketplace-technical-foundation-comforty-n3p7.vercel.app/"
    },
    {
        title: "Movie Website",
        description:
            "A dynamic movie website built with PHP and Laravel. Features include movie details, reviews, and user authentication.",
        tags: ["PHP", "Laravel"],
        imageUrl: movieWebsiteImage,
        projectUrl: "https://github.com/Hamza123545/MovieWebsite.git",
        demoUrl: "https://movie-website-demo.com"
    },
    {
        title: "Static Car Website",
        description:
            "A responsive car dealership website created using HTML, CSS, and JavaScript. Features product displays, car details, and contact forms.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: staticCarWebsiteImage,
        projectUrl: "https://github.com/Hamza123545/Auto-World-Car-Website.git",
        demoUrl: "https://auto-world-car-website.com"
    },
    {
        title: "Vehicle Management System",
        description:
            "A .NET Core MVC-based system for managing vehicle data, including registration, maintenance, and inventory tracking.",
        tags: [".NET Core", "MVC"],
        imageUrl: vehicleManagementSystemImage,
        projectUrl: "https://github.com/Hamza123545/Vehicle-Management-system-.git",
        demoUrl: "https://vehicle-management-system-demo.com"
    },
];

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "PHP",
    "SQL Server",
    "Git",
    "GitHub",
    "Tailwind",
    "Chakra UI",
    "Bootstrap",
    "Framer Motion",
    "UI/UX"
];
