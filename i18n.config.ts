import en from './locales/en-US.json'
import de from './locales/de-DE.json'
import zh from './locales/zhHans-ZH.json'

export const I18nConfig = {
    legacy: false,
    locale: 'de',
    messages: {
        en,
        de,
        zh
    }
}

export default defineI18nConfig(() => {
    return I18nConfig;
})