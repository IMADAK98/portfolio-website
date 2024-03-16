import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context-provider";
import {useEffect} from "react";
import type {SectionName} from "@/lib/types";
import { useLocale } from "next-intl";



export function useSectionInView(sectionName:SectionName, threshold= 0.75){
    const {ref, inView} = useInView(
        {
           threshold
        }
    );
    const {setActiveSection,timeOfLastClick}=useActiveSectionContext();

    useEffect(()=>{
        if (inView && Date.now() - timeOfLastClick > 1000){
            console.log(sectionName);
            setActiveSection(sectionName);
        }
    },[inView, sectionName, setActiveSection, timeOfLastClick]);

    return {
        ref
    }
}