<template>
    <Guest>
        <div class="text-2xl">Login</div>
        <form class="flex flex-col" @submit.prevent="login">
            <AuthInput
                placeholder="Email"
                v-model.trim="userState.email"
                :validate="validate.email"
            />
            <AuthInput
                placeholder="Password"
                type="password"
                v-model.trim="userState.password"
                :validate="validate.password"
            />

            <AuthButton :disabled="disabled" value="Login"/>
        </form>
        <SuccessToast
            title="Login success!"
            modalId="success-login"
        />
        <ErrorToast
            title="Login failed!"
            modalId="failed-login"
        />
    </Guest>
</template>

<script setup>
    import Guest from '@/layouts/Guest.vue';
    import { useVuelidate } from '@vuelidate/core'
    import {email, minLength, required} from '@vuelidate/validators'
    import {computed, reactive, toRefs} from "vue";
    import {pushToast} from "../../helpers/ToastHelper.js";
    import {useUserStore} from "../../stores/UserStore";
    import router from "../../router";

    const { authUser } = useUserStore();
    const userState = reactive({
        email: '',
        password: '',
    });
    const rules = {
        email: { required, email },
        password: { required,  minLength: minLength(6) },
    };
    const validate = useVuelidate(rules, toRefs(userState));
    const disabled = computed(() => validate.value.$invalid);

    const login = () => {
        validate.value.$validate();

        if(!validate.value.$error) {
            authUser(userState)
                .then(() => {
                    pushToast('success-login');
                    router.push('/');
                })
                .catch(() => {
                    pushToast('failed-login');
                })
        }
    }
</script>
