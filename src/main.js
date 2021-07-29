import Vue from 'vue';

import App from './App.vue';
import router from './router';
import Home from './views/layouts/Home.vue';
import None from './views/layouts/None.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;
Vue.component('home-layout', Home);
Vue.component('none-layout', None);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
