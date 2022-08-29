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

            <AuthButton :disabled="false" value="Login"/>
        </form>
    </Guest>
</template>

<script setup>
    import Guest from '@/layouts/Guest.vue';
    import { useVuelidate } from '@vuelidate/core'
    import {email, minLength, required} from '@vuelidate/validators'
    import {computed, reactive, toRefs} from "vue";

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

        validate.value.password.$errors.forEach(err => {
            console.log(err)
        })

        if(!validate.value.$error) {
            console.log('Success')
        }else {
            console.log('Error')
        }
    }
</script>
