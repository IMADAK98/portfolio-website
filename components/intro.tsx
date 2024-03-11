"use client"
import React, {useEffect} from 'react'
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import {BsArrowRight, BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import ImadsPicImg  from "@/public/ImadsPic.jpg"
import {useSectionInView} from "@/lib/hooks";
import {useActiveSectionContext} from "@/context/active-section-context-provider";

export default function Intro(){

   const {ref} =useSectionInView("Home",0.5);
   const {setTimeOfLastClick ,setActiveSection }=useActiveSectionContext();



    return(
        <section ref={ref} className={"mb-28 max-w-[50rem] scroll-mt-[100rem] "} id={"home"}>
            <div className='flex items-center justify-center '>
                <div className={"relative"}>
                    <motion.div
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1 , scale:1}}
                    transition={{
                        type:"tween",
                        duration:0.2
                    }}
                    >
                        <Image src={ImadsPicImg}
                               alt={"demo portrait"}
                               quality={95} priority={true}
                               className={"h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl "}

                        />
                    </motion.div>

                    <motion.span
                        className={"absolute bottom-0 right-0 text-3xl"}
                        initial={{opacity:0,scale:0}}
                        animate={{opacity:1,scale:1}}
                        transition={{
                            type:"spring",
                            stiffness: 125,
                            delay:0.1
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className={"mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"}
                initial={{opacity:0,y:100}}
                animate={{opacity:10,y:0}}
            >
                <span className="font-bold">{`Hello, I'm Imad.`}</span> I'm a{" "}
                <span className="font-bold">Full Stack Engineer</span> with{" "}
                <span className="font-bold">a passion </span> for software development. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">Backend Systems</span>
            </motion.h1>

            <motion.div
                className={"flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"}
                initial={{opacity:0,y:100}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.1}}

            >
                <Link href={"#contact"}
                      className={"group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110" +
                    " hover:scale-110 hover:bg-gray-950 active:scale-105 transition"}
                    onClick={()=>{
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now())
                    }}
                >
                    Contact me here
                    <BsArrowRight className={"opacity-70 group-hover: translate-x-1 transition"}/> {" "}
                </Link>
                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
                    hover:scale-110  active:scale-105 transition cursor-pointer border border-black/20
                    dark:bg-white/10
                    "
                     href={"/CV.pdf"} download>
                    Download CV
                    <HiDownload className={"opacity-60 group-hover:translate-y-1 transition"}/>
                </a>

                <a className={"bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-110 hover:text-gray-950  active:scale-105 transition cursor-pointer border border-black/20 dark:bg-white/60 "}
                   href="https://www.linkedin.com/in/imad-al-khawam-446a2b25a/"  target={"_blank"}
                >
                    <BsLinkedin />
                </a>

                <a className={"bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-110 hover:text-gray-950  active:scale-105 transition cursor-pointer border border-black/20 dark:bg-white/60"}
                   href="https://github.com/IMADAK98"  target={"_blank"}
                >
                    <BsGithub/>
                </a>

                <a className={"bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-110 hover:text-gray-950  active:scale-105 transition cursor-pointer border border-black/20 dark:bg-white/60"}
                   href="https://wa.me/message/LDNHEXFGMDOIG1"  target={"_blank"}
                >
                    <BsWhatsapp/>
                </a>
            </motion.div>
        </section>


    )
}