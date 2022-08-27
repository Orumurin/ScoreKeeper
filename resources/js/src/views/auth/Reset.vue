<template>
    <Guest>
        <div class="text-2xl">Reset</div>
        <form class="flex flex-col">
            <input class="m-2 bg-transparent border-b-2 border-b-black placeholder-black p-1 outline-0" placeholder="email">
            <input class="m-2 bg-blue-300 py-2 rounded-2xl cursor-pointer" type="submit" value="Reset">
        </form>
    </Guest>
</template>

<script setup>
    import Guest from "../../layouts/Guest.vue";
</script>

<style scoped>

</style>
