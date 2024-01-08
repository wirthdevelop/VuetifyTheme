<template>
    <VApp :theme="theme">
        <VNavigationDrawer v-model="navigationDrawer">
            <VList>
                <VListItem prepend-icon="mdi-home-city" title="Home" value="home"></VListItem>
                <VListItem prepend-icon="mdi-account" title="My Account" value="account"></VListItem>
                <VListItem prepend-icon="mdi-account-group-outline" title="Users" value="users"></VListItem>
            </VList>
        </VNavigationDrawer>
        <VNavigationDrawerSettings v-model="settingsDrawer"></VNavigationDrawerSettings>
        <VAppBar>
            <template v-slot:prepend>
                <VAppBarNavIcon @click="navigationDrawer = !navigationDrawer"></VAppBarNavIcon>
                <VBreadcrumbs :items="breadcrumbs"></VBreadcrumbs>
            </template>
            <template v-slot:append>
                <VBtn icon="mdi-magnify"></VBtn>
                <VBtn @click="notificationDrawer = !notificationDrawer" icon="mdi-bell-outline"></VBtn>
                <VDivider />
                <VBtn icon="mdi-translate"></VBtn>
                <VBtn @click="settingsDrawer = !settingsDrawer" icon="mdi-cog-outline" ></VBtn>
                <VDivider />
                <VBtn icon="mdi-login"></VBtn>
            </template>
        </VAppBar>
        <VMain>
            <NuxtPage />
        </VMain>
        <VNavigationDrawerNotification v-model="notificationDrawer"></VNavigationDrawerNotification>
    </VApp>
</template>

<script setup lang="ts">
const theme = ref('dark');

const navigationDrawer = ref(true);
const notificationDrawer = ref(false);
const settingsDrawer = ref(false);

const breadcrumbs = [{ title: 'Ticket', disabled: false, href: 'ticket' }, { title: 'Overview', disabled: false, href: 'overview' }];
</script>

<style lang="scss">
@import url("~/assets/global/fonts.scss");

body {
    font-family: "Open Sans", sans-serif;
}
</style>