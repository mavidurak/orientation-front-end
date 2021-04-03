<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Good<b>reads</b></a>
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
              <router-link to="/" class="nav-link">Anasayfa</router-link>
            </li>

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
                <li><a class="dropdown-item" href="#">Topluluklar</a></li>
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
              <router-link to="/girisyap" class="nav-link"
                >Giriş Yap</router-link
              >
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
      <router-link to="/axios">Axios</router-link>
    <router-view />
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

.form-control {
  width: 400px;
}

.btn {
  margin-right: 40px;
  width: 100px;
  border: 1px solid grey;
  color: grey;
}
.btn:hover{
  background-color: grey;
  color: white;
}

.navbar {
  height: 80px;
  padding: 0;
}
</style>
