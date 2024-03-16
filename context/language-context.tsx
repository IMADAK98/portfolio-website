// "use client"
// import React, {createContext, useContext, useEffect, useState} from "react";
// import {useRouter} from "next/router";
// import {useLocale} from "use-intl";

// type Language = 'ar' | 'en'
// type LanguageContextType = {
//     language: Language,
//     toggleLanguage: () => void
// }
// type LanguageContextProviderProps = {
//     children: React.ReactNode
// }

// const LanguageContext = createContext<LanguageContextType | null>(null);
// export default function LanguageContextProvider({children}: LanguageContextProviderProps) {

//     const [language, setLanguage] = useState<Language>('en');

//     // const toggleLanguage = () => {
//     //
//     //     console.log(language)
//     //     if (language === 'en') {
//     //         setLanguage('ar')
//     //         window.localStorage.setItem("language", "ar")
//     //         document.documentElement.classList.add("ar")
//     //     } else {
//     //         setLanguage('en')
//     //         window.localStorage.setItem("language", "en")
//     //         document.documentElement.classList.add("en")
//     //     }
//     // }

//     const toggleLanguage = () => {

//         // Update language class and attribute
//         const htmlElement = document.documentElement;
//         const langAttribute = htmlElement.getAttribute('lang');

//         if (langAttribute === 'en') {
//             htmlElement.classList.remove("en");
//             htmlElement.classList.add("ar");
//             htmlElement.setAttribute('lang', 'ar');
//             window.localStorage.setItem("language", "ar");
//         } else {
//             htmlElement.classList.remove("ar");
//             htmlElement.classList.add("en");
//             htmlElement.setAttribute('lang', 'en');
//             window.localStorage.setItem("language", "en");
//         }
//     };

//     useEffect(() => {
//         // Set language class and attribute based on localStorage
//         const localLanguage = window.localStorage.getItem('language') as Language | null;
//         if (localLanguage) {
//             if (localLanguage === 'ar') {
//                 document.documentElement.classList.add("ar");
//             }
//             }
//     }, []); // Empty dependency array ensures this effect runs only once after mount

//     return <LanguageContext.Provider
//         value={
//             {
//                 language,
//                 toggleLanguage
//             }
//         }>
//         {children}
//     </LanguageContext.Provider>
// }

// export  function useLanguage() {
//     const context = useContext(LanguageContext);

//     if (context === null) {
//         throw new Error("useLanguage must be used within a LanguageContextProvider");
//     }
//     return context;
// }
