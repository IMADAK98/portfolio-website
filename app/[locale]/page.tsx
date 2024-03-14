import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import React from "react";
import useIntroMessages from "@/lib/newData";
import LinkingTest from "@/components/linkingTest";

export default function Home() {
    const introMessages = useIntroMessages();
  return (
    <main className="flex flex-col items-center px-4">
        <Intro messages={introMessages}/>
        <LinkingTest/>
        <SectionDivider/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
    </main>
  );
}
