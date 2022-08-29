<template>
    <Guest>
        <div class="text-2xl">Register</div>
        <form class="flex flex-col">
<!--            <AuthInput placeholder="Login" />-->
<!--            <AuthInput placeholder="Email" />-->
<!--            <AuthInput placeholder="Password" />-->
            <AuthButton value="Register" />
        </form>
    </Guest>
</template>

<script setup>
    import Guest from "@/layouts/Guest.vue";
</script>
