<template>
    <div class="flex flex-col items-center p-2">
        <MainNavButton
            v-for="(navItem, index) in navList"
            :key="index"
            :path="navItem.path"
            :name="navItem.name"
        />
    </div>
</template>

<script setup>
import MainNavButton from "./MainNavButton.vue";

const navList = [
    {path: "/game-setting", name: "Play game"},
    {path: "/templates", name: "Templates"},
    {path: "/last-games", name: "Last games"},
    {path: "/authors", name: "About of author"},
]
</script>
