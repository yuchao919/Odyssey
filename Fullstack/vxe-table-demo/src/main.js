import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import VxeUI from 'vxe-pc-ui';
import VxeUITable from 'vxe-table';

import 'vxe-table/lib/style.css';
import 'vxe-pc-ui/lib/style.css';

createApp(App).use(VxeUI).use(VxeUITable).mount('#app');
