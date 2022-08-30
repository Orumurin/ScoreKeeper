<template>
    <div class="main flex">
        <MainNav />
        <section class="w-4/5">
            <slot></slot>
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
        height: 100vh;
        background: conic-gradient(from 98.68deg at 50% 50%, rgba(27, 149, 188, 0.21) 0deg, #6417E1 18.28deg, rgba(68, 77, 209, 0.662513) 186.95deg, rgba(27, 149, 188, 0.21) 360deg, rgba(27, 149, 188, 0.21) 360deg);
    }
</style>
