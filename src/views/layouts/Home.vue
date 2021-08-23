<template>
  <div id="app">
    <Navbar />
    <div class="main-content">
      <div id="routes">
        <router-link to="/multiselect">Multiselect</router-link> |
        <router-link to="/axios">Axios</router-link> |
        <router-link to="/forgot-password">Forgot Password</router-link> |
        <router-link to="/review/1">Review</router-link> |
        <router-link to="/contents/1">Content Detail</router-link> |
        <router-link to="/contents">List Content</router-link> |
        <router-link to="/communities/1">Community Detail</router-link> |
        <router-link to="/communities/new">New Community</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/Register">Register</router-link> |
         <router-link to="/messages">Messages</router-link>
      </div>
      <v-main>
        <slot />
      </v-main>
    </div>
    <Footer />
  </div>
</template>
<script>
import axios from 'axios';

import Navbar from '../../components/Layout/Navbar.vue';
import Footer from '../../components/Layout/Footer.vue';

export default {
  name: 'HomeLayout',
  components: {
    Navbar,
    Footer,
  },
  beforeCreate() {
    const token = localStorage.getItem('x-access-token');
    axios
      .get('/api/authentication/me', {
        headers: {
          'x-access-token': token,
        },
      })
      .catch(() => {
        this.$router.push('/login');
      });
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-content {
  padding: 10px;
  #routes {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
