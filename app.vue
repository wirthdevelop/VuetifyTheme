<template>
    <App :theme="theme">
        <NavigationDrawer v-model="navigationDrawer">
            <NavigationList>
                <VListItem prepend-icon="mdi-home-city" title="Home" value="home"></VListItem>
                <VListItem prepend-icon="mdi-account" title="My Account" value="account"></VListItem>
                <VListItem prepend-icon="mdi-account-group-outline" title="Users" value="users"></VListItem>
            </NavigationList>
        </NavigationDrawer>
        <SettingsDrawer v-model="settingsDrawer"></SettingsDrawer>
        <AppBar>
            <template v-slot:prepend>
                <VAppBarNavIcon @click="navigationDrawer = !navigationDrawer"></VAppBarNavIcon>
                <VBreadcrumbs :items="breadcrumbs"></VBreadcrumbs>
            </template>
            <template v-slot:append>
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon @click="notificationDrawer = !notificationDrawer">
                    <v-icon>mdi-bell-outline</v-icon>
                </v-btn>
                <ToolbarDivider />
                <v-btn icon>
                    <v-icon>mdi-translate</v-icon>
                </v-btn>
                <v-btn icon @click="settingsDrawer = !settingsDrawer">
                    <v-icon>mdi-cog-outline</v-icon>
                </v-btn>
                <ToolbarDivider />
                <v-btn icon>
                    <v-icon>mdi-login</v-icon>
                </v-btn>
            </template>
        </AppBar>
        <VMain>
            <NuxtPage />
        </VMain>
        <NotificationDrawer v-model="notificationDrawer"></NotificationDrawer>
    </App>
</template>

<script setup lang="ts">
const theme = ref('dark');

const navigationDrawer = ref(true);
const notificationDrawer = ref(false);
const settingsDrawer = ref(false);
const breadcrumbs = [{ title: 'Ticket', disabled: false, href: 'ticket' }, { title: 'Overview', disabled: false, href: 'overview' }];
</script>

<style lang="scss">
@import url("~/assets/styles/global.scss");

body {
    font-family: "Open Sans", sans-serif;
}
</style>