'use client'
import React from "react";
import Link from "next/link";
import {useLanguage} from "@/context/language-context";

export default function LinkingTest(){


    return (
        <div>
            <>
                <Link locale={"ar"} href={"/ar"}>
                    Switch to Arabic
                </Link>
            </>

            <>
            <Link locale={"en"} href={"/en"}>
                Switch to English
            </Link>
            </>

        </div>
    )
}