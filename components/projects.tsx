"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData, projectsData_ar } from "@/lib/data";
import Project from "@/components/project";
import { useSectionInView } from "@/lib/hooks";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function Projects() {
  const { ref } = useSectionInView(3, 0.25);
  const locale = useLocale();
  return (
    <section ref={ref} id="projects" className={"scroll-mt-28 mb-28"}>
      <SectionHeading>
        {" "}
        {locale === "en" ? "My Projects" : "مشاريعي"}
      </SectionHeading>
      <div>
        {locale === "en"
          ? projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))
          : projectsData_ar.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))}
      </div>
    </section>
  );
}
