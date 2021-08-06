<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand"
        ><b>MaviDurak-IO</b></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/benimkiler" class="nav-link"
              >Benimkiler</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/explore" class="nav-link"
              >Keşfet</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link
              to="/communities"
              class="nav-link"
              id="navbarDropdown"
              role="button"
              aria-expanded="false"
            >
              Topluluk
            </router-link>
          </li>
          <form class="d-flex">
            <input
              class="input"
              type="search"
              placeholder="İçerik Ara"
              aria-label="Search"
            />
            <button class="btn" type="submit">Ara</button>
          </form>
          <div v-if="!isLogin" style="display: flex">
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Kayıt</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Giriş Yap</router-link>
            </li>
          </div>
          <li class="nav-item" v-else>
            <p class="nav-link" style="cursor: pointer" @click="logout()">
              Çıkış Yap
            </p>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Hakkımda</router-link>
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
<style lang="scss">
nav {
  height: 60px;
  padding: 0;
  max-height: 60px;

  .navbar-brand {
    font-size: 25px;
  }

  .nav-item {
    font-size: 18px;
    margin-right: 40px;
  }

  .btn {
    margin-right: 40px;
    width: 80px;
    height: 35px;
    border: 1px solid grey;
    color: grey;
    margin-top: 5px;
  }

  .btn:hover {
    background-color: grey;
    color: white;
  }

  .input {
    width: 300px;
    border-radius: 5px;
    border: 1px solid grey;
    margin-right: 10px;
    margin-top: 5px;
    height: 35px;
    padding: 10px;
  }
}
</style>
