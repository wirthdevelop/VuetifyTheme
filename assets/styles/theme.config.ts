import type { ThemeDefinition } from 'vuetify';

export const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: '#6750A4',
        'primary-darken-1': '#0B5EF5',
        secondary: '#373947',
        'secondary-darken-1': '#373947',
        background: '#E8E9EC',
        surface: '#F5F5F5',

        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',

        'on-primary': '#0B5EF5',
        'on-secondary': '#000000',
        'on-background': '#000000',
        'on-surface':   '#0B5EF5',
        'on error': '#FFFFFF',
    },
}

export const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        primary: '#D0BCFF',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        background: '#FFFFFF',
        surface: '#FFFFFF',

        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',

        'on-primary': '#FFFFFF',
        'on-secondary': '#000000',
        'on-background': '#000000',
        'on-surface':   '#000000',
        'on error': '#FFFFFF',
    },
}