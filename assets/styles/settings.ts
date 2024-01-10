export const aliases: Record<string, "VNavigationDrawer" | "VRow" | "VCol" | "VCard"> = {
    VNavigationDrawerNotification: 'VNavigationDrawer',
    VNavigationDrawerHistory: 'VNavigationDrawer',
    VNavigationDrawerSettings: 'VNavigationDrawer',
    VRowMain: 'VRow',
    VColMain: 'VCol',
    VColMainSub: 'VCol',
    VCardMain: 'VCard',
    VCardMainSub: 'VCard',
}

export const defaults = {
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
        style: [{ margin: '0px' }, { 'max-width': '1200px' }],
    },
    VColMain: {
        cols: '8',
    },
    VColMainSub: {
        class: 'pl-0',
    },
    VCardMain: {
        styles: [{ height: '600px' }],
    },
    VCardMainSub: {
        class: 'v-card--main-sub',
    }
}