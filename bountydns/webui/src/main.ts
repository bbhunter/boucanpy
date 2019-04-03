import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';

Vue.use(BootstrapVue);
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead);

import App from './App.vue';
import router from '@/router';
import { store } from './store';
import {publicWS} from '@/broadcast'

console.log(publicWS)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
