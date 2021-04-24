<template>
  <div id="app">
    <Navbar />
    <div class="main-content">
      <div id="routes">
        <router-link to="/multiselect">Multiselect</router-link> |
        <router-link to="/axios">Axios</router-link> |
        <router-link to="/forgot-password">Forgot Password</router-link> |
        <router-link to="/profile">Profile</router-link>
      </div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f8f8f8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-content{
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
