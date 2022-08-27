import {createRouter, createWebHistory} from 'vue-router/dist/vue-router';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Reset from '../views/auth/Reset.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Guest",
            meta: {guest: true},
            children: [
                {
                    path: "login",
                    name: "Login",
                    component: Login,
                    meta: {guest: true},
                },
                {
                    path: "register",
                    name: "Register",
                    component: Register,
                    meta: {guest: true},
                },
                {
                    path: "reset",
                    name: "Reset",
                    component: Reset,
                    meta: {guest: true},
                }
            ]
        },

    ]
});



export default router;
