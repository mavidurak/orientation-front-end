<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-auto">
          <img :src="content.image" /><br /><br />
          <WantedButtonAndRate :content="content" @select="changeStatus" @rate="rated"/>
        </div>
        <div class="col-md-auto" style="width: 40%; text-align: left">
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
            <div class="row">
              <div class="col-md-auto">
                <button
                  type="button"
                  class="btn btn-outline-warning"
                  onclick="window.location.href='#'"
                >
                  Amazon
                </button>
              </div>
              <div class="col-md-auto">
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
              <div class="col-md-auto">
                <button type="button" class="btn btn-outline-warning">
                  Libraries
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="reviews" style="width: 70%; float: left; text-align: left">
          <h6>COMMUNITY REVIEWS</h6>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WantedButtonAndRate from '@/components/WantedButtonAndRate.vue';
import { WANTED_STATUS, CONTENT_TYPES } from '../constants';

export default {
  name: 'ContentDetail',
  components: {
    WantedButtonAndRate,
  },
  data() {
    return {
      readMoreActivated: false,
      status: null,
      content: {
        id: '1',
        name: 'Minor Feelings: An Asian American Reckoning',
        image:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580788273l/52845775._SX318_SY475_.jpg',
        rate: 6.5,
        description:
          'Poet and essayist Cathy Park Hong blends memoir, cultural criticism, and history to expose the truth of racialized consciousness in America. Binding these essays together is Hongs theory of "minor feelings".As the daughter of Korean immigrants, Cathy Park Hong grew up steeped in shame, suspicion, and melancholy. She would later understand that these "minor feelings" occur when American optimism contradicts your own reality—when you believe the lies you are told about your own racial identity.Hong uses her own story as a portal into a deeper examination of racial consciousness in America today. This book traces her relationship to the English language, to shame and depression, to poetry and artmaking, and to family and female friendship in a search to both uncover and speak the truth.',
        user: {
          name: 'Cathy Park Hong',
        },
        createdAt: 'February 25th 2020',
        updatedAt: '',
        page: '210',
        type: CONTENT_TYPES.BOOK,
        wantedStatus: WANTED_STATUS[CONTENT_TYPES.BOOK].CURRENTLY_READING,
      },
    };
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
</style>
