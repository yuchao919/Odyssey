import './assets/base.css';

import { createApp } from 'vue';
import App from './App.vue';

import VxeUIAll from 'vxe-pc-ui';
import 'vxe-pc-ui/lib/style.css';
import VxeUITable from 'vxe-table';
import 'vxe-table/lib/style.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(VxeUIAll).use(VxeUITable);
app.use(ElementPlus);
app.mount('#app');
