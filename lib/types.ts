import {links, links_ar} from "@/lib/data";

export type SectionName = typeof links[number]["id"] | typeof links_ar[number]["id"];


export interface IntroProps {
    messages: Record<string, string>;
}