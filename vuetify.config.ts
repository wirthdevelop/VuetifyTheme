import type { ExternalVuetifyOptions } from 'vuetify-nuxt-module';
import { en, de, zhHans } from 'vuetify/locale';
import { lightTheme, darkTheme } from './assets/styles/theme.config';
import { aliasesSettings, defaultSettings } from './assets/styles/defaultSettings';

export default {
    directives: true,
    labComponents: true,
    theme: {
        defaultTheme: 'light',
        themes: {
            lightTheme,
            darkTheme,
        },
    },
    locale: {
        locale: 'de',
        fallback: 'en',
        messages: { zhHans, en, de }
    },
    aliases: aliasesSettings,
    defaults: defaultSettings,
} satisfies ExternalVuetifyOptions;