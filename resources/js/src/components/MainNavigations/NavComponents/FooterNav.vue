<template>
    <div>
        <button
            class="bg-orange-400 w-64 py-1 my-4 rounded-xl text-center"
            @click="exit"
        >
            Exit
        </button>
        <SuccessToast
            title="See you latter!"
            modalId="exit"
        />
    </div>
</template>

<script setup>

    import {useUserStore} from "../../../stores/UserStore";
    import {pushToast} from "../../../helpers/ToastHelper";
    import router from "../../../router";

    const { logoutUser } = useUserStore();
    const exit = () => {
        if(confirm('Do you want exit?')) {
            logoutUser()
            router.push('/login');
            pushToast('exit');
        }
    }
</script>
