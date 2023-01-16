import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translaction_ko from './lang/ko.json';
import translaction_en from './lang/en.json';

const resources = {
    ko: { translation: translaction_ko },
    en: { translation: translaction_en },
};

i18next
    .use(initReactI18next)
    .init({
        resources: resources,
        // lng: process.env.REACT_APP_LANGUAGE,
        lng: 'ko',
        // lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
        debug: true,
    });

export default i18next;
