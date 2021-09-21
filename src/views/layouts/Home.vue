<template>
  <div id="app">
    <Navbar />
    <div class="main-content">
      <div>
        <slot />
      </div>
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
}
</style>
