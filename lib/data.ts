import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {FaJava, FaNodeJs} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Ar2Lt from "@/public/Ar2Lt.jpg";
import spring from "@/public/spring.png"
import calculator from "@/public/calculator.png"

export const links = [
    {
        id:1,
        name: "Home",
        hash: "#home",
    },
    {
        id:2,
        name: "About",
        hash: "#about",
    },
    {
        id:3,
        name: "Projects",
        hash: "#projects",
    },
    {
        id:4,
        name: "Skills",
        hash: "#skills",
    },
    {
        id:5,
        name: "Experience",
        hash: "#experience",
    },
    {
        id:6,
        name: "Contact",
        hash: "#contact",
    },


] as const;
export const links_ar = [
    {
        id:1,
        name: "الرئيسية",
        hash: "#home",
    },
    {
        id:2,
        name: "نبذة عني",
        hash: "#about",
    },
    {
        id:3,
        name: "مشاريعي",
        hash: "#projects",
    },
    {
        id:4,
        name: "مهاراتي",
        hash: "#skills",
    },
    {
        id:5,
        name: "خبراتي",
        hash: "#experience",
    },
    {
        id:6,
        name: "التواصل",
        hash: "#contact",
    },

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

export const experiencesData_ar = [
    {
        title: " مطور جافا متدرب",
        location: "السعودية ,الرياض",
        description:
            "اكملت تدريبي في شركة داتا سيرف حيث عملت كمطور جافا ",
        icon: React.createElement(FaJava),
        date: "May 2023 - June 2023",
    },
    {
        title: "مهندس شبكات متدرب",
        location: "السعودية,الرياض",
        description:
            "اكملت تدريبي الثاني في شركة أسس حيث عملت كمهندس شبكات مسؤول عن خدمات ماقبل المبيعات ومراقب ميداني",
        icon: React.createElement(CgWorkAlt),
        date: "June 2023 - October 2023",
    },

    {
        title: "تخرجت من الجامعة",
        location: "تركيا, اسطنبول",
        description:
            " تخرجت من الجامعة بشهادة البكالوريس في هندسة الكمبيوتر",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        title: "مهندس برمجيات",
        location: "تركيا, اسطنبول",
        description:
            "عملت في اسطنبول حيث كنت مسؤول عن تطوير المواقع  ",
        icon: React.createElement(FaNodeJs),
        date: "Nov 2023 - Feb 2024",
    },
] as const;



export const projectsData = [
    {
        title: "E-Learn",
        description:
            "I developed an E-learning platform backend system where instructors can offer courses and students can interact with it," +
            " the system was built using Spring Boot, Spring Data, Hibernate, MySql, and tested using Junit and Mockito ",
        tags: ["Java", "Spring Boot", "MySql", "Hibernate", "Mockito","Spring Data","Spring Web"],
        imageUrl: spring,
    },
    {
        title: "Ar2Lt",
        description:
            "OCR application to capture Arabic words from images and transliterate to Latin , " +
            "the project was built using python and image processing techniques in addition to a machine learning models   ",
        tags: ["Python", "OpenCv", "NumPy", "Scikit-image", "tensorflow "],
        imageUrl: Ar2Lt,
    },
    {
        title: "Simple Flutter Calculator",
        description:
            "A Calculator application built using Dart and FLutter framework" +
            ", the application implements simple flutter futures and an advanced algorithm for the calculations  ",
        tags: ["Flutter", "Dart", "Firebase", "Data structures"],
        imageUrl: calculator,
    },
] as const;

export const projectsData_ar = [
    {
        title: "E-Learn",
        description:
            "نظام اساسي لمنصة تعليم الكتروني حيث يمكن للطلاب التفاعل مع المدرسين واخذ مواد مختلفة تم بناء النظام باستخدام تقنيات متنوعة",
        tags: ["Java", "Spring Boot", "MySql", "Hibernate", "Mockito","Spring Data","Spring Web"],
        imageUrl: spring,
    },
    {
        title: "Ar2Lt",
        description:
            "تطبيق لمعالجة الصور التي تحتوي كلمات باللغة العربية وتحويلها الى نص لاتيني مكتوب باستخدام تقنيات معالجة الصور و نظم التعرف على الانماط وتعليم الآلة ",
        tags: ["Python", "OpenCv", "NumPy", "Scikit-image", "tensorflow "],
        imageUrl: Ar2Lt,
    },
    {
        title: "Simple Flutter Calculator",
        description:
            " تطبيق حاسبة مبني للجوال , تم تطوير الخواريزمات للحساب باستخدام نظم البيانات والخوارزميات المتقدمة",
        tags: ["Flutter", "Dart", "Firebase", "Data structures"],
        imageUrl: calculator,
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