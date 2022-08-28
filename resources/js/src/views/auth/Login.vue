<template>
    <Guest>
        <div class="text-2xl">Login</div>
        <form class="flex flex-col" @submit.prevent="login">
            <AuthInput
                placeholder="Email"
                v-model="userData.email"
            />
            <AuthInput
                placeholder="Password"
                type="password"
                v-model="userData.password"
            />

            <AuthButton value="Login"/>
        </form>
    </Guest>
</template>

<script setup>
    import Guest from "@/layouts/Guest.vue";
    import { useUserStore } from "@/stores/UseUserStore";
    import { reactive } from "vue";
    import router from "@/router";

    const { authUser } = useUserStore();
    const userData = reactive({
        email: '',
        password: ''
    })

    const login = () => {
        authUser(userData)
            .then(() => {
                router.push('/')
            })
    }
</script>

