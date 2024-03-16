import { useTranslations } from "next-intl";

export const useIntroMessages = () => {
  const t = useTranslations("Intro");

  return {
    hello: t("hello"),
    title: t("title"),
    passion: t("passion"),
    build: t("build"),
    focus: t("focus"),
    // background: t("Intro.background"),
    // Add more messages as needed
  };
};

export const useAboutmeMessages = () => {
  const t = useTranslations("About");

  return {
    background: t("background"),
    skills: t("skills"),
    mindset: t("mindset"),
    interests: t("interests"),
    carrer: t("career"),
  };
};
