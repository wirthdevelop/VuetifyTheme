import type { ExternalVuetifyOptions } from 'vuetify-nuxt-module';
import type { ThemeDefinition } from 'vuetify';
import { en, de, zhHans } from 'vuetify/locale'

const themeInternalLight: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

const themeInternalDark: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

export default {
    labComponents: true,
    directives: true,
    // icons: {
    //     defaultSet: 'mdi',
    //     sets: ['mdi', 'fa']
    // },
    theme: {
        defaultTheme: 'themeInternalLight',
        themes: {
            themeInternalLight,
            themeInternalDark
        }
    },
    locale: {
        locale: 'de',
        fallback: 'en',
        messages: { zhHans, en, de }
    }    
} satisfies ExternalVuetifyOptions

