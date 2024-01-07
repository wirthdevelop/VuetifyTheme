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
        },
        SettingsDrawer: {
            location: 'right',
        },
        ToolbarDivider: {
            vertical: true,
            inset: true,
            style: [{ height: '16px' }, { 'margin-top': 'auto'}, { 'margin-bottom': 'auto'}, { 'margin-left': '6px'}, { 'margin-right': '6px'}],
            length: 18,
        },
        MainRow: {
            noGutters: true,
            class: 'mainContant'
        },
        MainCol: {
            cols: '9'
        },
        MainSubCol: {
            cols: '3'
        }
    }
} satisfies ExternalVuetifyOptions;