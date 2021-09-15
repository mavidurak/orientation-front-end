<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light static-top">
    <div class="container">
      <router-link to="/home" class="navbar-brand">
        <img
          src="../../assets/MaviDurak-IO.svg"
          width="30"
          height="30"
          class="d-inline-block align-top logo"
          alt=""
        />
        <b> MaviDurak-IO</b></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto text-center">
          <li class="nav-item">
            <router-link to="/benimkiler" class="nav-link">Mine</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/explore" class="nav-link">Explore</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/communities"
              class="nav-link"
              id="navbarDropdown"
              role="button"
              aria-expanded="false"
            >
              Communities
            </router-link>
          </li>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /><i class="fas fa-search"></i>
          </form>
          <div v-if="!isLogin" style="display: flex">
            <li class="nav-item">
              <router-link to="/register" class="nav-link"
                >Register</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link"
                ><i class="fas fa-lock"></i> Log In</router-link
              >
            </li>
          </div>
          <div v-else>
            <li class="nav-item">
              <a class="nav-link" style="cursor: pointer" @click="logout()">
                <i class="fas fa-sign-out-alt"></i>
                Log Out
              </a>
            </li>
          </div>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Navbar',
  data() {
    return {
      isLogin: '',
    };
  },
  mounted() {
    axios
      .get('api/authentication/me', {
        headers: {
          'x-access-token': localStorage.getItem('x-access-token'),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          this.isLogin = true;
        }
      });
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang='scss'>
.navbar {
  li {
    padding-left: 20px;
  }
  form {
    padding-left: 20px;
  }
}
</style>
