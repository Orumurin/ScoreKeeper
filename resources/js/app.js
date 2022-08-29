import './bootstrap';
import {createApp} from 'vue';
import App from './src/App.vue';
import router from './src/router';
import { createPinia } from 'pinia';
import UIComponents from './src/components/UI'
import VueToastify from "vue-toastify";

const app = createApp(App)
    .use(router)
    .use(createPinia());

app.use(VueToastify);

UIComponents.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app');
