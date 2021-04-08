<template>
  <div id="app">
    <Navbar />
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
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
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
