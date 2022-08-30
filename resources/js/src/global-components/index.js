import * as featherIcons from '@zhuowenli/vue-feather-icons';
import SuccessToast from './toasts/SuccessToast.vue';
import ErrorToast from './toasts/ErrorToast.vue';

export default app => {
    app.component(SuccessToast.name, SuccessToast);
    app.component(ErrorToast.name, ErrorToast);

    for (const [key, icon] of Object.entries(featherIcons)) {
        icon.props.size.default = '24';
        app.component(key, icon);
    }
}
