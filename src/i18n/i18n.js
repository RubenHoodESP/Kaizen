import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import commonEn from '../locales/en/translation.json';
import commonEs from '../locales/es/translation.json';

const resources = {
  en: { common: commonEn },
  es: { common: commonEs }
}


const options = {
  order: ['navigator'],
  lookupQuerystring: 'lng'
}

i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: options,
    resources,
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    debug: true
  });

  export default i18n;