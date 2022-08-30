<template>
    <div class="main flex">
        <MainNav class="hidden md:block" />
        <section class="w-full md:w-4/5 p-2">
            <div class="w-full h-full bg-white rounded-2xl p-2">
                <slot></slot>
            </div>
        </section>
    </div>
</template>

<script>
import MainNav from "../components/MainNavigations/MainNav.vue";
export default {
    components: {MainNav}
}
</script>

<style scoped>
    .main {
        width: 100vw;
        min-height: 100vh;
        background: conic-gradient(from 98.68deg at 50% 50%, rgba(27, 149, 188, 0.21) 0deg, #6417E1 18.28deg, rgba(68, 77, 209, 0.662513) 186.95deg, rgba(27, 149, 188, 0.21) 360deg, rgba(27, 149, 188, 0.21) 360deg);
    }
</style>
