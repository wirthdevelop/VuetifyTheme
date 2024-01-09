import type { ThemeDefinition } from 'vuetify';

export const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: '#10657F',
        // 'primary-darken-1': '#10657F',
        secondary: '#BDBDBD',
        // 'secondary-darken-1': '#BDBDBD',
        background: '#FFFFFF',
        surface: '#F5F5F5',

        error: '#B50021',
        info: '#E7E7E7',
        success: '#A0BF31',
        warning: '#F0A400',

        // 'on-primary': '#10657F',
        // 'on-secondary': '#BDBDBD',
        // 'on-background': '#FFFFFF',
        // 'on-surface':   '#F5F5F5',
        // 'on-error': '#B50021',

        black: '#3E3E3E',
        white: 'FFFFFF',
    },
}

export const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        primary: '#0560FD',
        // 'primary-darken-1': '#0560FD',
        secondary: '#03DAC6',
        // 'secondary-darken-1': '#03DAC6',
        background: '#27314A',
        surface: '#151A28',

        error: '#B50021',
        info: '#E7E7E7',
        success: '#A0BF31',
        warning: '#F0A400',

        // 'on-primary': '#0560FD',
        // 'on-secondary': '#03DAC6',
        // 'on-background': '#27314A',
        // 'on-surface':   '#151A28',
        // 'on-error': '#B50021',

        black: '#3E3E3E',
        white: 'FFFFFF',
    },
}