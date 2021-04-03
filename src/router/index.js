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
  path: '/benimkiler',
  name: 'Benimkiler',
  component: () => import('../views/Benimkiler.vue'),
},
{
  path: '/girisyap',
  name: 'GirisYap',
  component: () => import('../views/GirisYap.vue'),
},
{
  path: '/kayit',
  name: 'Kayit',
  component: () => import('../views/Kayit.vue'),
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
