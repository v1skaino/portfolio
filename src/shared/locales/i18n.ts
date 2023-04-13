import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { resources } from "../locales";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["pt-BR", "en"],
    fallbackLng: "pt-BR",
    resources: resources,
    detection: {
      order: ["path", "localStorage", "cookie", "htmlTag", "subdomain"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: { useSuspense: false },
  });
