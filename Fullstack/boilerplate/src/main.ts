import './assets/base.css';

import { createApp } from 'vue';
import App from './App.vue';

import VxeUIAll from 'vxe-pc-ui';
import 'vxe-pc-ui/lib/style.css';
import VxeUITable from 'vxe-table';
import 'vxe-table/lib/style.css';

createApp(App).use(VxeUIAll).use(VxeUITable).mount('#app');
