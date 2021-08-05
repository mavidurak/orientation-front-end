import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/guests/NotFound.vue'),
    meta: { layout: 'none' },
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/guests/Login.vue'),
    meta: { layout: 'none' },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/guests/Register.vue'),
    meta: { layout: 'none' },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/guests/ForgotPassword.vue'),
    meta: { layout: 'none' },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { layout: 'home' },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/home/About.vue'),
    meta: { layout: 'home' },
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('../views/others/Axios.vue'),
    meta: { layout: 'home' },
  },
  {
    path: '/multiselect',
    name: 'MultiselectView',
    component: () => import('../views/others/Multiselect.vue'),
    meta: { layout: 'home' },
  },
  {
    path: '/communities',
    name: 'Communities',
    component: () => import('../views/home/Communities.vue'),
    meta: { layout: 'home' },
  },
  {
    path: '/contents/:id',
    name: 'ContentDetail',
    component: () => import('../views/home/ContentDetail.vue'),
    meta: { layout: 'home' },
  },
  {
    path: '/contents',
    name: 'ListContent',
    component: () => import('../views/home/ListContent.vue'),
    meta: { layout: 'home' },
  },

  {
    path: '/review/:content',
    name: 'Review',
    component: () => import('../views/home/Review.vue'),
    meta: { layout: 'home' },
  },
  {
    path: '/communities/:id',
    name: 'CommunityDetail',
    component: () => import('../views/home/CommunityDetail.vue'),
    meta: { layout: 'home' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
