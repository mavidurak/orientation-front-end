import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Home.vue';

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
  component: () => import(/* webpackChunkName: "about" */ '../views/home/About.vue'),
},
{
  path: '/axios',
  name: 'Axios',
  component: () => import('../views/others/Axios.vue'),
},
{
  path: '/login',
  name: 'Login',
  component: () => import('../views/guests/Login.vue'),
},
{
  path: '/forgot-password',
  name: 'ForgotPassword',
  component: () => import('../views/guests/ForgotPassword.vue'),
},
{
  path: '/multiselect',
  name: 'MultiselectView',
  component: () => import('../views/others/Multiselect.vue'),
},
{
  path: '/communities',
  name: 'Communities',
  component: () => import('../views/home/Communities.vue'),
},
{
  path: '/contents/:id',
  name: 'ContentDetail',
  component: () => import('../views/home/ContentDetail.vue'),
},
{
  path: '/contents',
  name: 'ListContent',
  component: () => import('../views/home/ListContent.vue'),
},

{
  path: '/review/:content',
  name: 'Review',
  component: () => import('../views/home/Review.vue'),
},
{
  path: '/login',
  name: 'Login',
  component: () => import('../views/guests/Login.vue'),
},
{
  path: '/register',
  name: 'Register',
  component: () => import('../views/guests/Register.vue'),
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
