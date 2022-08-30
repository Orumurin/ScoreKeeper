<template>
    <div
        :id="modalId"
        class="toastify-content-error hidden flex"
    >
        <XCircleIcon class="text-theme-24" />
        <div class="ml-4 mr-4">
            <div class="font-medium">Registration failed!</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    modalId: String
})

</script>
