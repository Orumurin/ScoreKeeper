<template>
    <div class="m-2">
        <span class="">Rounds:</span>
        <select class="ml-2">
            <option
                v-for="num in (Array(15).keys())"
                :key="num"
                :value="num++"
            >
                {{ num++ }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "RoundsSetting"
}
</script>

<style scoped>

</style>
