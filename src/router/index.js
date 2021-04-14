import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/home',
  name: 'Home',
  component: Home,
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
},
{
  path: '/axios',
  name: 'Axios',
  component: () => import('../views/Axios.vue'),
},
{
  path: '/login',
  name: 'Login',
  component: () => import('../views/Login.vue'),
},
{
  path: '/forgot-password',
  name: 'ForgotPassword',
  component: () => import('../views/ForgotPassword.vue'),
},
{
  path: '/multiselect',
  name: 'MultiselectView',
  component: () => import('../views/Multiselect.vue'),
},
{
  path: '/communities',
  name: 'Communities',
  component: () => import('../views/Communities.vue'),
},
{
  path: '/contents/:id',
  name: 'ContentDetail',
  component: () => import('../views/ContentDetail.vue'),
},
{
  path: '/contents',
  name: 'ListContent',
  component: () => import('../views/ListContent.vue'),
},

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
