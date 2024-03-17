"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { IntroProps } from "@/lib/types";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function About({ messages }: IntroProps) {
  const { ref } = useSectionInView(2);
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem]
            text-center leading-8 sm:mb-40
            scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        {locale === "en" ? "About me" : "نبذة عني"}{" "}
      </SectionHeading>
      <p className={"mb-3"}>
        <span className={"font-normal"}>{messages.background}</span>
        <span className="font-semibold">{messages.skills} </span>
        <span className="italic underline">{messages.mindset}</span>{" "}
        <span className="font-medium italic">{messages.interests} </span>
        <span className="font-extrabold font-serif">{messages.carrer} </span>
      </p>
    </motion.section>
  );
}

// After graduating with a degree in {" "}
//                 <span className="font-medium">Computer Engineering</span>,  I've always approached the world from an abstract perspective
//                 <span className={"font-medium"}>  focusing on the bigger picture. </span> This led me to pursue internships in both hardware and software domains.
//                 I enjoy analyzing the world systematically and solving problems, which is why I decided to embark on a career in software engineering.
//                 {" "}
//                 My tech stack is diverse, ranging from {" "}
//                 <span className="font-medium underline">Java and Spring Boot to JavaScript Node.js and React </span>.{" "}
//                 <span className="italic">I'm also familiar with System Design and Distributed Systems.</span>
//                 <br/>
//                 <span className="font-bold">{" "} Currently I'm actively seeking opportunities in Software Engineering.</span>
//             </p>
//             <p>
//                 <span className="italic">When I'm not coding</span>
//                 I indulge in reading . {" "}
//                 <span className="font-medium">classical literature, psychology, and history books</span>.  Music is another passion of mine,{" "}
//                 <span className="font-medium"> and I enjoy playing the guitar.</span>
