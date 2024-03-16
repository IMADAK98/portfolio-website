import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import React from "react";
import { useIntroMessages, useAboutmeMessages } from "@/lib/newData";

export default function Home() {
  const introMessages = useIntroMessages();
  const aboutMessages = useAboutmeMessages();
  return (
    <main className="flex flex-col items-center px-4">
      <Intro messages={introMessages} />
      <SectionDivider />
      <About messages={aboutMessages} />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
