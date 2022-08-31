<template>
    <div class="m-2">
        <span class="">Rounds:</span>
        <select @change="updateInput" class="ml-2">
            <option
                v-for="num in (Array(15).keys())"
                :key="num++"
                :selected="num === modelValue"
                :value="num"
            >
                {{ num++ }}
            </option>
        </select>
    </div>
</template>

<script setup>
defineProps({
    modelValue: Number,
})

const emit = defineEmits(['update:modelValue']);

const updateInput = event => {

    emit('update:modelValue', +event.target.value)
}
</script>

<style scoped>

</style>
