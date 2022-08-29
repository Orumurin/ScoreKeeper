<template>
    <div class="flex flex-col items-start">
        <template v-if="validate.$error">
            <div
                v-for="(error, index) in validate.$errors"
                :key="index"
                class="err-message text-red-700 text-sm mt-1"
            >
                {{ error.$message }}
            </div>
        </template>
        <input
            class="mb-4 w-full bg-transparent border-b-2 border-b-black placeholder-gray-700 p-1 outline-0"
            :class="{'border-b-red-600': validate.$error}"
            :placeholder="placeholder"
            :value="modelValue"
            @input="updateInput"
            :type="type"
        />
    </div>
</template>

<script setup>
defineProps({
    placeholder: String,
    modelValue: String,
    type: {
        type: String,
        default: () => 'input'
    },
    validate: Object
})

const emit = defineEmits(['update:modelValue']);

const updateInput = event => {
    emit('update:modelValue', event.target.value)
}
</script>
