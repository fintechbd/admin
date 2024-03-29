import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// bootstrap
import * as bootstrap from 'bootstrap';
// modals
import '@/sass/components/custom-modal.scss';

// perfect scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

//vue-meta
import {createHead} from '@vueuse/head';
//Sweetalert
import Swal from 'sweetalert2';
// nouislider - later remove and add to page due to not working in page
import VueNouislider from 'vue3-nouislider';
import 'vue3-nouislider/dist/vue3-nouislider.css';

// vue input mask
import Maska from 'maska';

// smooth scroll
import {registerScrollSpy} from 'vue3-scroll-spy';
//vue-i18n
import i18n from './i18n';

// datatables
import {ClientTable} from 'v-tables-3';

// json to excel
import vue3JsonExcel from 'vue3-json-excel';

//vue-wizard
import VueFormWizard from 'vue3-form-wizard';
import 'vue3-form-wizard/dist/style.css';

// set default settings
import appSetting from './app-setting';

const app = createApp(App);

window.bootstrap = bootstrap;

const head = createHead();

window.Swal = Swal;

registerScrollSpy(app, { offset: 118 });

window.$appSetting = appSetting;
window.$appSetting.init();

app.use(store).use(router).use(i18n).use(PerfectScrollbar).use(VueNouislider).use(Maska).use(ClientTable).use(vue3JsonExcel).use(VueFormWizard).use(head).mount('#app');
