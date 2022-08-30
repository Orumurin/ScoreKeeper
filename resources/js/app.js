import './bootstrap';
import {createApp} from 'vue';
import App from './src/App.vue';
import router from './src/router';
import { createPinia } from 'pinia';
import UIComponents from './src/components/UI'
import globalComponents from './src/global-components';
import './src/assets/sass/app.scss';

const app = createApp(App)
    .use(router)
    .use(createPinia());

globalComponents(app);

UIComponents.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app');
