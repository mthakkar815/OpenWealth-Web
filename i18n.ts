// React
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import enTranslation from "@locales/en.json";
import esTranslation from "@locales/es.json";
import frTranslation from "@locales/fr.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false,
    },
    debug: false, // Set to true for debugging
  })
  .then(() => {
    console.log("i18n initialized with language:", i18n.language);
  })
  .catch((error) => {
    console.error("i18n initialization failed:", error);
  });

export default i18n;
