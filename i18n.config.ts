import en from './locales/en-US.json'
import de from './locales/de-DE.json'
import zh from './locales/zhHans-ZH.json'

export const I18nConfig = {
    globalInjection: true,
    legacy: false,
    locale: 'de',
    availableLocales: ['en-US', 'es-ES', 'zhHans-ZH'],
    // TODO: Disable for go Live
    fallbackWarn: true,
    missingWarn: false,
    messages: {
        en,
        de,
        zh
    }
}

export default defineI18nConfig(() => {
    return I18nConfig;
})