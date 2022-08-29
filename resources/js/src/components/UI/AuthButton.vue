<template>
    <input
        class="m-2 bg-blue-300 py-2 rounded-2xl cursor-pointer"
        type="submit"
        :value="value"
        :disabled="disabled"
    />
</template>

<script setup>
defineProps(['value', 'disabled'])
</script>
