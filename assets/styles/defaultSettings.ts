export const aliasesSettings: Record<string, "VNavigationDrawer" | "VRow" | "VCol" | "VCard"> = {
    VNavigationDrawerNotification: 'VNavigationDrawer',
    VNavigationDrawerHistory: 'VNavigationDrawer',
    VNavigationDrawerSettings: 'VNavigationDrawer',
    VRowMain: 'VRow',
    VColMain: 'VCol',
    VColMainSub: 'VCol',
    VCardMain: 'VCard',
    VCardMainSub: 'VCard',
}

export const defaultSettings = {
    VApp: {
        fullHeight: true,
    },
    VAppBar: {
        VBtn: {
            rounded: true,
        },
        VDivider: {
            vertical: true,
            inset: true,
            style: [{ height: '16px' }, { 'margin-top': 'auto' }, { 'margin-bottom': 'auto' }, { 'margin-left': '6px' }, { 'margin-right': '6px' }],
            length: 18,
        }
    },
    VNavigationDrawer: {
        location: 'left',
        permanent: true,
        floating: true,
        rail: false,
        width: 300,

        VList: {
            density: 'compact',
            nav: true,
        }
    },
    VNavigationDrawerNotification: {
        location: 'right',
        width: 300,
    },
    VNavigationDrawerHistory: {
        location: 'right',
        width: 300,
    },
    VNavigationDrawerSettings: {
        location: 'right',
        width: 300,
    },
    VRowMain: {
        noGutters: false,
        class: 'v-row--main',
        style: [{ margin: '0px' }],
    },
    VColMain: {
        cols: '8',
    },
    VCardMain: {
        class: 'v-card--main',
        // variant: 'elevated',
    },
    VCardMainSub: {
        class: 'v-card--main-sub',
        // variant: 'elevated',
    }
}