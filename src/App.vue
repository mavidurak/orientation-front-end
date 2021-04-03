<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <footer class="footer">
      <div class="container-fluid container-sm py-5">
        <div class="row">
          <div class="col-md-6 col-sm-8 col-xs-6">
            <div class="footer-brand">
              <h3>ABOUT US</h3>
              <a href="https://mavidurak.github.io/about" target="_blank"
                ><img
                  src="./assets/mavidurakio.png"
                  alt="MaviDurakIO Logo"
                  width="150px"
                  height="150px"
              /></a>
            </div>
          </div>
          <div class="col-md-6 col-sm-4 col-xs-6">
            <div class="footer-sections">
              <h3>COMPANY</h3>
              <ul class="linklist list-unstyled">
                <li><a href="">Lorem</a></li>
                <li><a href="">Ipsum</a></li>
                <li><a href="">Lorem</a></li>
              </ul>
            </div>
            <div class="footer-sections">
              <h3>WORK WITH US</h3>
              <ul class="linklist list-unstyled">
                <li><a href="">Lorem</a></li>
                <li><a href="">Ipsum</a></li>
                <li><a href="">Lorem</a></li>
              </ul>
            </div>
            <div class="footer-sections">
              <h3>EMPTY</h3>
              <ul class="linklist list-unstyled">
                <li><a href="">Lorem</a></li>
                <li><a href="">Ipsum</a></li>
                <li><a href="">Lorem</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="socials">
        <ul class="iconlist list-unstyled">
          <li>
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
      </div>
      <div class="copyright">
        <h6>&#169; 2021 MaviDurakIO</h6>
      </div>
    </footer>
  </div>
</template>

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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 250px;
  margin-top: 50px;
  background-color: #dadde3;
  border-top: 1px solid rgb(212, 204, 204);
  box-shadow: 3px 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.container-fluid {
  width: 1366px;
  padding: 0 30px;
  height: 250px;
}

.footer-brand {
  height: 150px;

  h3 {
    display: inline;
    position: relative;
    top: 40%;
    color: #29667e;
  }

  img {
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
    border-radius: 100px;
    float: right;
    position: relative;
    left: -15%;
    margin-bottom: 100px;
  }
}

.footer-sections {
  display: inline-block;
  margin: 20px;

  h3 {
    font-size: 1.5rem;
    color: #29667e;
  }
}

.iconlist {
  text-align: center;
  padding: 5px;
  background-color: rgb(41, 102, 126);
  box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  li {
    margin-right: 30px;
    display: inline;
  }
}

.iconlist li i {
  font-size: 30px;
  color: #fff;
}
</style>
