<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/home" class="navbar-brand"
          >Good<b>reads</b></router-link
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
              <a
                to="/topluluk"
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Topluluk
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link to="/communities" class="dropdown-item"
                    >Topluluklar</router-link
                  >
                </li>
                <li><a class="dropdown-item" href="#">Tartışmalar</a></li>
                <li><a class="dropdown-item" href="#">Alıntılar</a></li>
                <li><a class="dropdown-item" href="#">Yazara Sor </a></li>
                <li><a class="dropdown-item" href="#">Önemsiz Şeyler</a></li>
                <li><a class="dropdown-item" href="#">Sınavlar</a></li>
                <li><a class="dropdown-item" href="#">Yaratıcı Yazarlık</a></li>
                <li><a class="dropdown-item" href="#">İnsanlar</a></li>
                <li><a class="dropdown-item" href="#">Etkinlikler</a></li>
              </ul>
            </li>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Kitap Ara"
                aria-label="Search"
              />
              <button class="btn" type="submit">Ara</button>
            </form>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Giriş Yap</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/kayit" class="nav-link">Kayıt</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Hakkımda</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-4 col-sm-4 col-12 mt-3 mb-4 mb-md-0 x">
            <div class="footer-brand">
              <h5>ABOUT US</h5>
              <a href="https://mavidurak.github.io/about" target="_blank">
                <img
                  src="https://pbs.twimg.com/profile_images/581806417012658176/jpcs3K-H_400x400.png"
                  alt="MaviDurakIO Logo"
                  width="80px"
                  height="80px"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-4 col-6 mt-3 mb-4 mb-md-0 x">
            <h6 class="text-uppercase">work with us</h6>
            <ul class="list-unstyled mb-0">
              <li><a href="#!" class="text-dark">Link 1</a></li>
              <li><a href="#!" class="text-dark">Link 2</a></li>
              <li><a href="#!" class="text-dark">Link 3</a></li>
              <li><a href="#!" class="text-dark">Link 4</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-4 col-6 mt-3 mb-4 mb-md-0 x">
            <h6 class="text-uppercase">company</h6>
            <ul class="list-unstyled">
              <li><a href="#!" class="text-dark">Link 1</a></li>
              <li><a href="#!" class="text-dark">Link 2</a></li>
              <li><a href="#!" class="text-dark">Link 3</a></li>
              <li><a href="#!" class="text-dark">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="socials row">
        <div class="col-lg-4 col-md-4 col-sm-0 emptyone"></div>
        <ul class="iconlist list-unstyled col-lg-4 col-md-4 col-sm-6">
          <li class="chosenone">
            <a href="https://www.instagram.com/mavidurak.io" target="_blank"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com/mavidurakio" target="_blank"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://github.com/mavidurak" target="_blank"
              ><i class="fab fa-github"></i
            ></a>
          </li>
          <li>
            <a href="https://discord.gg/7zaXka9" target="_blank"
              ><i class="fab fa-discord"></i
            ></a>
          </li>
          <li>
            <a href="https://t.me/mavidurakio" target="_blank"
              ><i class="fab fa-telegram"></i
            ></a>
          </li>
        </ul>
        <span class="col-lg-4 col-md-4 col-sm-6 flex">
          &#169; MaviDurak-IO 2021</span
        >
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-brand {
  font-size: 25px;
}
.nav-item {
  font-size: 20px;
  margin-right: 40px;
}

html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#nav {
  padding: 30px;

.btn {
  margin-right: 40px;
  width: 100px;
  border: 1px solid grey;
  color: grey;
}
.btn:hover {
  background-color: grey;
  color: white;
}
}

.navbar {
  height: 80px;
  padding: 0;
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
  margin: 0;

  span {
    background-color: #1167b8;
    text-align: right;
    padding-right: 30px;
    color: white;
  }

  .emptyone {
    background-color: #1167b8;
  }
}

.iconlist {
  background-color: #1167b8;
  padding: 2px;
  text-align: center;
  margin: 0;

  li {
    margin-left: 30px;
    display: inline;
  }
  .chosenone {
    margin-left: 0;
  }
}

.iconlist li i {
  font-size: 18px;
  color: #fff;
}

.copyright {
  background-color: rgb(41, 102, 126);
  color: white;
  font-size: 14px;
}

@media (max-width: 576px) {
  .footer {
    height: 350px;
  }
  .container {
    height: 350px;
  }

  .socials {
    .iconlist {
      text-align: center;
    }
    span {
      text-align: center;
      padding-right: 0;
    }
  }
}

</style>
