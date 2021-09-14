<template>
  <footer class="text-center text-lg-start bg-light text-muted">
    <section class="container py-3">
      <div class="text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="fw-bold mb-4 yazı">
              <img
                src="../../assets/MaviDurak-IO.svg"
                width="100"
                height="100"
                class="d-inline-block align-top logo"
                alt=""
              />
            </h6>
            <p>
              Find friends with similar interests, discussion and promotional
              site for games, movies, TV shows and books.
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#" class="text-reset">Node</a>
            </p>
            <p>
              <a href="#" class="text-reset">Sequelize</a>
            </p>
            <p>
              <a href="#" class="text-reset">Vue</a>
            </p>
            <p>
              <a href="#" class="text-reset">PostgreSQL</a>
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#" class="text-reset">Pricing</a>
            </p>
            <p>
              <a href="#" class="text-reset">Settings</a>
            </p>
            <p>
              <a href="#" class="text-reset">Orders</a>
            </p>
            <p>
              <a href="#" class="text-reset">Help</a>
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> Sakarya, Türkiye</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              mavidurak.io@gmail.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </div>
    </section>
    <div class="container text-center p-4">
      <hr />
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">
            Copyright &copy; 2021 All Rights Reserved by
            <a href="https://mavidurak.github.io/" target="_blank"
              >MaviDurak-IO</a
            >.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li>
              <a href="https://www.facebook.com/mavidurakio/" target="_blank"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="https://twitter.com/mavidurakio" target="_blank"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/mavidurak.io/" target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
            <li>
              <a href="https://t.me/mavidurakio" target="_blank"
                ><i class="fab fa-telegram"></i
              ></a>
            </li>
            <li>
              <a href="https://discord.gg/7zaXka9" target="_blank"
                ><i class="fab fa-discord"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
<style lang="scss">
footer {
  .social-icons {
    text-align: center;
  }
  border: 1px solid #e7ebf0;
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  li {
    display: inline-block;
    margin-bottom: 4px;
  }
  li.title {
    margin-right: 15px;
    text-transform: uppercase;
    color: #144585;
    font-weight: 700;
    font-size: 13px;
  }
  a {
    background-color: #eceeef;
    color: #818a91;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
    &:active {
      color: #fff;
      background-color: rgb(208, 215, 221);
    }
    &:focus {
      color: #fff;
      background-color: rgb(208, 215, 221);
    }
    &:hover {
      color: #fff;
      background-color: rgb(208, 215, 221);
    }
  }
}
.social-icons.size-sm {
  a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px;
  }
}
@media (max-width: 767px) {
  .social-icons {
    li.title {
      display: block;
      margin-right: 0;
      font-weight: 600;
    }
  }
}
</style>
