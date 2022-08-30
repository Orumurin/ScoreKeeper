<template>
    <nav class="bg-indigo-300 w-72 flex flex-col justify-between items-center p-4">
        <section>
            <HeadNav />
            <BaseNav />
        </section>
        <section>
            <FooterNav />
        </section>
    </nav>
</template>

<script setup>
    import HeadNav from './HeadNav.vue';
    import BaseNav from './BaseNav.vue';
    import FooterNav from './FooterNav.vue';

</script>

<style scoped>

</style>
