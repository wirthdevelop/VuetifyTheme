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
                <VBtn @click="historyDrawer = !historyDrawer; notificationDrawer = false" icon="mdi-history"></VBtn>
                <VBtn @click="notificationDrawer = !notificationDrawer; historyDrawer = false" icon="mdi-bell-outline"></VBtn>
                <VDivider />
                <VBtn icon="mdi-text-box-plus-outline"></VBtn>
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
        <VNavigationDrawerHistory v-model="historyDrawer"></VNavigationDrawerHistory>
    </VApp>
</template>

<script setup lang="ts">
const defaultTheme = useTheme();
const theme = defaultTheme.global.name.value;

const navigationDrawer = ref(true);
const notificationDrawer = ref(false);
const historyDrawer = ref(false);
const settingsDrawer = ref(false);

const breadcrumbs = [{ title: 'Ticket', disabled: false, href: 'ticket' }, { title: 'Overview', disabled: false, href: 'overview' }];
</script>

<style lang="scss">
body {
    font-family: "Open Sans", sans-serif;
}
</style>