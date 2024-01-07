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
                <VBtn icon="mdi-magnify"></VBtn>
                <VBtn @click="notificationDrawer = !notificationDrawer" icon="mdi-bell-outline"></VBtn>
                <ToolbarDivider />
                <VBtn icon="mdi-translate"></VBtn>
                <VBtn @click="settingsDrawer = !settingsDrawer" icon="mdi-cog-outline" ></VBtn>
                <ToolbarDivider />
                <VBtn icon="mdi-login"></VBtn>
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