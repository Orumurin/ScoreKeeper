<template>
    <div
        :id="modalId"
        class="toastify-content-success hidden flex"
    >
        <CheckCircleIcon class="text-theme-10" />
        <div class="ml-4 mr-4">
            <div class="font-medium">{{ props.title }}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    modalId: String
})

</script>
