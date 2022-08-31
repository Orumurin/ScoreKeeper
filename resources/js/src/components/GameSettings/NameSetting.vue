<template>
    <div class="m-2">
        <span class="">Game:</span>
        <input
            class="border-b-black border-b-2 ml-2"
            :value="modelValue"
            @input="updateInput"
        />
    </div>
</template>

<script setup>
defineProps({
    modelValue: String,
})

const emit = defineEmits(['update:modelValue']);

const updateInput = event => {
    emit('update:modelValue', event.target.value)
}
</script>

<style scoped>

</style>
