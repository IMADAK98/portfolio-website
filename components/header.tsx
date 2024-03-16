"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { links, links_ar } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context-provider";
import { usePathname } from "next/navigation";
import DropdownLanguage from "./dropdown-language";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const path = usePathname();

  return (
    <header className="z-[999] relative ">
      <motion.div
        className="fixed  top-0 left-1/2 h-[4.5rem] w-full
            rounded-none border border-white border-opacity-40 bg-white
            bg opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
            sm:top-6 sm:h-[3.25rem] sm:w-[45rem] sm:rounded-full
            dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75
            flex flex-row items-center justify-between
            "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        className=" flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
            py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 
            "
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center text-[0.9rem]
                 font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5
                 "
        >
          {path === "/en"
            ? links.map((link) => (
                <motion.li
                  className="h-3/4 flex items-center justify-center relative "
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-200":
                          activeSection === link.id,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.id);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                    {link.id === activeSection && (
                      <motion.span
                        className="bg-gray-100 rounded-full
                                     absolute inset-0 -z-10
                                     dark:bg-gray-800
                                     "
                        layoutId={"activeSection"}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))
            : links_ar.map((link_ar) => (
                <motion.li
                  className="h-3/4 flex items-center justify-center relative "
                  key={link_ar.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-200":
                          activeSection === link_ar.id,
                      }
                    )}
                    href={link_ar.hash}
                    onClick={() => {
                      setActiveSection(link_ar.id);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link_ar.name}
                    {link_ar.id === activeSection && (
                      <motion.span
                        className="bg-gray-100 rounded-full
                                     absolute inset-0 -z-10
                                     dark:bg-gray-800
                                     "
                        layoutId={"activeSection"}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}

          <DropdownLanguage />
        </ul>
      </nav>
    </header>
  );
}
