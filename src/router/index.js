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
    path: '/communities',
    name: 'Communities',
    component: () => import('../views/home/Communities.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/contents/:slug',
    name: 'ContentDetail',
    component: () => import('../views/home/ContentDetail.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/create-content',
    name: 'ContentCreate',
    component: () => import('../views/home/ContentCreate.vue'),
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
    path: '/communities/new',
    name: 'NewCommunity',
    component: () => import('../views/home/NewCommunity.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/communities/:communitySlug',
    name: 'CommunityDetail',
    component: () => import('../views/home/CommunityDetail.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/communities/:communityId/:discussionId',
    name: 'Discussion',
    component: () => import('../views/home/Discussion.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/communities/:communitySlug/discussion/new',
    name: 'NewDiscussion',
    component: () => import('../views/home/NewDiscussion.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/my-contents',
    name: 'MyContents',
    component: () => import('../views/home/MyContents.vue'),
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('../views/home/Messages.vue'),
    meta: { layout: 'HomeLayout' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
