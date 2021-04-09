<template>
  <div id="app">
    <Navbar />
    <div class="main-content">
      <div id="routes">
        <router-link to="/multiselect">Multiselect</router-link> |
        <router-link to="/axios">Axios</router-link> |
        <router-link to="/forgot-password">Forgot Password</router-link> |
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
<<<<<<< HEAD

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  margin-top: 50px;
  background-color: #f9f8f4;
  border-top: 1px solid rgb(212, 204, 204);
}

.container {
  height: 150px;

  .row {
    height: 150px;
  }
}

.row .x {
  height: 130px;
}
.footer-brand {
  height: 150px;

  img {
    border-radius: 100px;
  }
}

.socials {
=======
html, body {
>>>>>>> be7bba0c00ae372b6ad236ed8beb2da4602a9adc
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
