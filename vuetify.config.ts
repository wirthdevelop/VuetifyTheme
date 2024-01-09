import type { ExternalVuetifyOptions } from 'vuetify-nuxt-module';
import { en, de, zhHans } from 'vuetify/locale';
import { lightTheme, darkTheme } from './assets/styles/themes';
import { aliases, defaults } from './assets/styles/settings';

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
    aliases: aliases,
    defaults: defaults,
} satisfies ExternalVuetifyOptions;