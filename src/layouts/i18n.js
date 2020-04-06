import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "../translations/en/common"
import common_fr from "../translations/fr/common"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'fr',                              // language to use
    resources: {
      en: {
        common: common_en               // 'common' is our custom namespace
      },
      fr: {
        common: common_fr
      },
    },
  });

export default i18n;
