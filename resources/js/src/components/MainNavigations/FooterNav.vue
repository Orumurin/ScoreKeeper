<template>
    <div>
        <button
            class="bg-orange-400  py-1 px-24 my-4 rounded-xl"
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

    import {useUserStore} from "../../stores/UseUserStore";
    import {pushToast} from "../../helpers/ToastHelper";
    import router from "../../router";

    const { logoutUser } = useUserStore();
    const exit = () => {
        if(confirm('Do you want exit?')) {
            logoutUser()
            router.push('/login');
            pushToast('exit');
        }
    }
</script>
