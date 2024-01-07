import type { ExternalVuetifyOptions } from 'vuetify-nuxt-module';
import { en, de, zhHans } from 'vuetify/locale';

// const themeInternalLight: ThemeDefinition = {
//     dark: false,
//     colors: {
//         background: '#FFFFFF',
//     },
// }

// const themeInternalDark: ThemeDefinition = {
//     dark: true,
//     colors: {
//         background: '#000000',
//     },
// }

export default {
    directives: true,
    labComponents: true,
    theme: {
        defaultTheme: 'light',
        // themes: {
        //     themeInternalLight,
        //     themeInternalDark
        // }
    },
    locale: {
        locale: 'de',
        fallback: 'en',
        messages: { zhHans, en, de }
    },
    aliases: {
        App: 'VApp',
        AppBar: 'VAppBar',
        ToolbarDivider: 'VDivider',
        NavigationDrawer: 'VNavigationDrawer',
        NavigationList: 'VList',
        NotificationDrawer: 'VNavigationDrawer',
        SettingsDrawer: 'VNavigationDrawer',
        MainContainer: 'VContainer',
        MainRow: 'VRow',
        MainCol: 'VCol',
        MainSubCol: 'VCol',
        VCardMain: 'VCard',
        VCardAction: 'VCard',
    },
    defaults: {
        App: {
            fullHeight: true,
        },
        NavigationDrawer: {
            location: 'left',
            permanent: true,
            floating: true,
            rail: false,
            width: 300,
        },
        NavigationList: {
            density: 'compact',
            nav: true,
        },
        NotificationDrawer: {
            location: 'right',
            width: 300,
        },
        SettingsDrawer: {
            location: 'right',
            width: 300,
        },
        ToolbarDivider: {
            vertical: true,
            inset: true,
            style: [{ height: '16px' }, { 'margin-top': 'auto'}, { 'margin-bottom': 'auto'}, { 'margin-left': '6px'}, { 'margin-right': '6px'}],
            length: 18,
        },
        MainRow: {
            noGutters: false,
            class: 'mainContant',
            style: [{ margin: '0px' }],
        },
        MainCol: {
            cols: '9',
        },
        MainSubCol: {

        },
        VCardMain: {
            class: 'v-card--main',
        },
        VCardAction: {
            class: 'v-card--action',
        }
    }
} satisfies ExternalVuetifyOptions;