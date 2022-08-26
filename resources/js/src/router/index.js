import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import Login from "../views/auth/Login";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "Login",
            component: Login,
            meta: {guest: true},
        }
    ]
});
