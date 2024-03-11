import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {FaJava, FaNodeJs, FaReact} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
    {
        name: "العربية",
        hash: "#arabic"
    }
] as const;

export const experiencesData = [
    {
        title: "Intern Java Developer",
        location: "Riyadh, Saudi Arabia",
        description:
            "I Had my First Internship At DataServe and i worked as Java & Spring boot Developer.",
        icon: React.createElement(FaJava),
        date: "May 2023 - June 2023",
    },
    {
        title: "Intern Network Engineer",
        location: "Riyadh, Saudi Arabia",
        description:
            "I completed my second internship at OSOS Skyline Ltd, where I took on the role of a Network Engineer",
        icon: React.createElement(CgWorkAlt),
        date: "June 2023 - October 2023",
    },

    {
        title: "Graduated University",
        location: "Istanbul, Turkey",
        description:
            "I graduated with a Bachelor's degree in Computer Engineering.",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        title: "Full-Stack Developer",
        location: "Istanbul, Turkey ",
        description:
            "I worked as a Full Stack Enginner in ID8 Media , where i worked with NodeJs and NextJs",
        icon: React.createElement(FaNodeJs),
        date: "Nov 2023 - Feb 2024",
    },
] as const;

export const projectsData = [
    {
        title: "CorpComment",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "Java",
    "Spring Boot",
    "JavaScript",
    "TypeScript",
    "OOP",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Node.js",
    "Angular",
    "Docker",
    "Kubernetes",
    "GKE",
    "OpenCv",
    "Express",
    "PostgreSQL",
    "Git",
    "Flutter",
    "Tailwind",
    "Prisma",
    "MySql",
    "Mockito",
    "JUnit",
    "Python",

] as const;