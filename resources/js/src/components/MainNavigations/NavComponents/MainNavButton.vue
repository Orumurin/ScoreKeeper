<template>
    <RouterLink
        :to="path"
        class="bg-blue-400 w-64 py-1 my-4 rounded-xl text-center"
    >
        {{ name }}
    </RouterLink>
</template>

<script setup>
defineProps(['path', 'name'])
</script>

<style scoped>

</style>
