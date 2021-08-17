<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-12 mb-3" >
          <img :src="content.image.path" class="imagediv" /><br /><br />
          <RateAndWantedButton :content="content" @select="changeStatus" @rate="rated"/>
        </div>
        <div class="col-md-6 col-sm-12 col-12 mb-3" style=" width: 40%; text-align: left">
          <h3>
            <b>{{ content.name }}</b>
          </h3>
          <h5>by {{ content.user.name }}</h5>
          <p>{{ content.rate }}</p>
          <span v-if="!readMoreActivated">{{
            content.description.slice(0, 400)
          }}</span>
          <a
            class=""
            v-if="!readMoreActivated"
            @click="activateReadMore"
            style="
              color: green;
              text-decoration: none;
              font-weight: bold;
              cursor: pointer;
            "
          >
            ...more</a
          >
          <span v-if="readMoreActivated" v-html="content.description"></span>
          <a
            class=""
            v-if="readMoreActivated"
            @click="notActivateReadMore"
            style="
              color: green;
              text-decoration: none;
              font-weight: bold;
              cursor: pointer;
            "
          >
            (less)</a
          >
          <hr />
          <p>{{ content.page }} pages</p>
          <p>Published on {{ content.createdAt }}</p>
          <hr />
          <p>GET A COPY</p>
          <div class="container">
            <div class="row" >
              <div class="col-md-auto col-sm-4">
                <button
                align=center
                  type="button"
                  class="btn btn-outline-warning "
                  onclick="window.location.href='#'"
                >
                  Amazon
                </button>
              </div>
              <div class="col-md-auto col-sm-4">
                <div class="dropdown">
                  <button
                    class="btn btn-outline-warning dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Online Stories
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">Apple Books</a>
                    <a class="dropdown-item" href="#">Google Play</a>
                    <a class="dropdown-item" href="#">Indigo</a>
                    <a class="dropdown-item" href="#">Book Depository</a>
                  </div>
                </div>
              </div>
              <div class="col-md-auto col-sm-4" >
                <button type="button" class="btn btn-outline-warning ">
                  Libraries
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
              <div class="reviews" style="width: 100%; float: left; text-align: center">
          <h6 >COMMUNITY REVIEWS</h6>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RateAndWantedButton from '@/components/RateAndWantedButtons/RateAndWantedButton.vue';
import axios from 'axios';

export default {
  name: 'ContentDetail',
  components: {
    RateAndWantedButton,
  },
  data() {
    return {
      readMoreActivated: false,
      status: null,
      content: {},
    };
  },
  mounted() {
    axios
      .get(`/api/contents/${this.$route.params.id}`, {
        headers: {
          'x-access-token': window.localStorage.getItem('x-access-token'),
        },
      })
      .then((res) => {
        this.content = res.data;
      });
  },
  methods: {
    activateReadMore() {
      this.readMoreActivated = true;
    },
    notActivateReadMore() {
      this.readMoreActivated = false;
    },
    changeStatus(status) {
      /* eslint-disable no-alert */
      this.status = status;
      alert(this.status);
    },
    rated(rate) {
      this.content.rate = rate;
      alert(rate);
    },
  },
};
</script>
<style lang="scss" scoped>
.imagediv{
    @media only screen and (max-width: 600px) {
    width:150px;
  }
  @media only screen and (min-width: 600px) {
    width:200px;
  }
    @media only screen and (min-width: 768px) {
    width:250px;
  }
    @media only screen and (min-width: 992px) {
    width:350px;
  }
      @media only screen and (min-width: 1200px) {
    width:400px;
  }
}

</style>
