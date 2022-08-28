import {createRouter, createWebHistory} from 'vue-router/dist/vue-router';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Reset from '../views/auth/Reset.vue';
import BaseView from "../views/main/BaseView.vue";
import {useUserStore} from "../stores/UseUserStore";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "Login",
            component: Login,
            meta: {guest: true},
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
            meta: {guest: true},
        },
        {
            path: "/reset",
            name: "Reset",
            component: Reset,
            meta: {guest: true},
        },
        {
            path: "/",
            name: "BaseView",
            component: BaseView,
            meta: {requireAuth: true},
        }
    ]
});

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!userStore.token) {
            next("/login");
        }
        next();
        return;
    }

    if (to.matched.some(record => record.meta.guest)) {
        if (userStore.token && userStore.user) {
            next("/");
        }
        next();
        return;
    }

    next();
});

export default router;
