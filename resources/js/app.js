import './bootstrap';
import {createApp} from 'vue';
import App from './src/App.vue';
import router from './src/router';
import { createPinia } from 'pinia';
import UIComponents from './src/components/UI'

const app = createApp(App)
    .use(router)
    .use(createPinia());

UIComponents.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app');
