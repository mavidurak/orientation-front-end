import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/guests/NotFound.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/guests/Login.vue'),
    meta: { layout: 'AuthenticationLayout' },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/guests/Register.vue'),
    meta: { layout: 'AuthenticationLayout' },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/guests/ForgotPassword.vue'),
    meta: { layout: 'AuthenticationLayout' },
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('../views/guests/ResetPassword.vue'),
    meta: { layout: 'AuthenticationLayout' },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/home/About.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('../views/others/Axios.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/multiselect',
    name: 'MultiselectView',
    component: () => import('../views/others/Multiselect.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/communities',
    name: 'Communities',
    component: () => import('../views/home/Communities.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/contents/:id',
    name: 'ContentDetail',
    component: () => import('../views/home/ContentDetail.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/contents',
    name: 'ListContent',
    component: () => import('../views/home/ListContent.vue'),
    meta: { layout: 'HomeLayout' },
  },

  {
    path: '/review/:content',
    name: 'Review',
    component: () => import('../views/home/Review.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import('../views/home/Explore.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/communities/:id',
    name: 'CommunityDetail',
    component: () => import('../views/home/CommunityDetail.vue'),
    meta: { layout: 'HomeLayout' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
