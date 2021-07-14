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
          <li class="nav-item dropdown">
            <a
              to="/kesfet"
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Keşfet
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Öneriler</a></li>
              <li><a class="dropdown-item" href="#">Seçim Ödülleri</a></li>
              <li><a class="dropdown-item" href="#">Eşantiyonlar</a></li>
              <li><a class="dropdown-item" href="#">Yeni Sürümler</a></li>
              <li><a class="dropdown-item" href="#">Listeler</a></li>
              <li><a class="dropdown-item" href="#">Keşfet</a></li>
              <li>
                <a class="dropdown-item" href="#">Haberler ve Röportajlar</a>
              </li>
              <hr />
              <font style="padding: 18px"><b>Favori Türler</b></font>
              <li><a class="dropdown-item" href="#">Klasikler</a></li>
              <li><a class="dropdown-item" href="#">Tarih</a></li>
              <li><a class="dropdown-item" href="#">Felsefe</a></li>
              <li><a class="dropdown-item" href="#">Psikoloji</a></li>
              <li><a class="dropdown-item" href="#">Gerilim</a></li>
              <li><a class="dropdown-item" href="#">Tüm Türler</a></li>
            </ul>
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
          <li class="nav-item" v-if="!isLogin">
            <router-link to="/register" class="nav-link">Kayıt</router-link>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <router-link to="/login" class="nav-link">Giriş Yap</router-link>
          </li>
          <li class="nav-item" v-else>
            <a class="nav-link" href="" @click="logout()">Çıkış Yap</a>
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
    this.isLogin = localStorage.getItem('x-access-token');
    axios.get('api/authentication/me', {
      headers: {
        'x-access-token': this.isLogin,
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
      this.$router.push('/login');
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
