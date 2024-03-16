"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DropdownLanguage() {
  const locale = useLocale();
  return (
    <div className="dropdown dropdown-hover flex relative ">
      <div
        tabIndex={0}
        role="button"
        className="btn  bg-transparent border border-none outline-none hover:border-none
         hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300  
        flex-row
      "
      >
        {locale === "ar" ? "Language" : "اللغة"}
        <RiArrowDropDownLine />
      </div>
      <div className="absolute top-10">
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-[8.5rem] "
        >
          <li>
            <Link href="/ar">العربية</Link>
          </li>
          <li>
            <Link href="/en">English</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
