import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend';



export const locales = [
    {
        id: 'en',
        icon: '/src/assets/icons/en.svg',
        title: 'EN'
    },
    {
        id: 'kg',
        icon: '/src/assets/icons/kg.svg',
        title: 'KG'
    },
    {
        id: 'ru',
        icon: '/src/assets/icons/ru.svg',
        title: 'RU'
    }
]

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'ru'
    });

    
export default i18n;