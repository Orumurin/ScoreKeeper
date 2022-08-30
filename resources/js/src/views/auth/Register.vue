<template>
    <Guest>
        <div class="text-2xl">Register</div>
        <form class="flex flex-col" @submit.prevent="register">
            <AuthInput
                placeholder="Name"
                v-model="userState.name"
                :validate="validate.name"
            />
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

            <AuthButton :disabled="disabled" value="Register" />
        </form>
        <SuccessToast
            title="Register success!"
            modalId="success-register"
        />
        <ErrorToast
            title="Register failed!"
            modalId="failed-register"
        />
    </Guest>
</template>

<script setup>
    import Guest from "@/layouts/Guest.vue";
    import {computed, reactive, toRefs} from "vue";
    import {email, minLength, required} from "@vuelidate/validators";
    import {useVuelidate} from "@vuelidate/core/dist/index.esm";
    import {useUserStore} from "../../stores/UseUserStore";
    import {pushToast} from "../../helpers/ToastHelper";
    import router from "../../router";

    const { registerUser } = useUserStore();
    const userState = reactive({
        name: '',
        email: '',
        password: '',
    });
    const rules = {
        name: { required, minLength: minLength(2) },
        email: { required, email },
        password: { required,  minLength: minLength(6) },
    };
    const validate = useVuelidate(rules, toRefs(userState));
    const disabled = computed(() => validate.value.$invalid);

    const register = () => {
        validate.value.$validate();

        if(!validate.value.$error) {
            registerUser(userState)
                .then(() => {
                    pushToast('success-register');
                    router.push('/');
                })
                .catch(() => {
                    pushToast('failed-register');
                })
        }
    }
</script>
