<template>
    <input
        class="m-2 bg-transparent border-b-2 border-b-black placeholder-gray-700 p-1 outline-0"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateInput"
        :type="type"
    />
</template>

<script setup>
defineProps({
    placeholder: String,
    modelValue: String,
    type: {
        type: String,
        default: () => 'input'
    }
})

const emit = defineEmits(['update:modelValue']);

const updateInput = event => {
    emit('update:modelValue', event.target.value)
}
</script>
