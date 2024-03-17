import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context-provider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import useTextDirection from "@/actions/useTextDirection";
import { Locale } from "@/i18nconfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imads | Personal Portfolio",
  description:
    "Imad is a full stack engineer with" + " passion for software development",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const direction = useTextDirection(locale);

  return (
    <html lang={locale} className={"!scroll-smooth"} dir={direction}>
      <body
        className={`${inter.className}
      bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90
      `}
      >
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem]
         h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
         dark:bg-[#946263]
        "
        ></div>

        <div
          className="bg-[#dbd7fb] absolute top-[-1 rem] -z-10 left-[-35rem]
       h-[31.25rem] w-[50 rem] rounded-full blur-[10rem] sm:w-[68.75rem]
       md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
        dark:bg-[#676394]
        "
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position={"top-right"} />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
