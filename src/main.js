import Vue from 'vue';

import App from './App.vue';
import router from './router';
import AuthenticationLayout from './views/layouts/Authentication.vue';
import HomeLayout from './views/layouts/Home.vue';
import NoneLayout from './views/layouts/None.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;
Vue.component('AuthenticationLayout', AuthenticationLayout);
Vue.component('HomeLayout', HomeLayout);
Vue.component('NoneLayout', NoneLayout);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
