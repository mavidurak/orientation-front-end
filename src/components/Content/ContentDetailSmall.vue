<template>
  <div class="list-group-item">
    <div class="content">
      <strong class="id">{{ content.id }} </strong>
      <div class="image"><img :src="content.image" alt="content.name" /></div>
      <strong>{{ content.name }}</strong> <br />
      by {{ content.user.name }} <br />
      {{ content.rate }}/10
      <div class="wantedbutton">
        <WantedButtonAndRate :content="content" @select="changeStatus" @rate="rated"/>
      </div>
    </div>
  </div>
</template>
<script>
import WantedButtonAndRate from '@/components/WantedButtonAndRate.vue';

export default {
  props: {
    content: Object,
  },
  components: {
    WantedButtonAndRate,
  },
  methods: {
    changeStatus(status) {
      // eslint-disable-next-line
      console.log("wanted status", status);
    },
    rated(r) {
      // eslint-disable-next-line
      console.log("rate", r);
    },
  },
};
</script>
<style lang="scss">
.list-group-item {
  img {
    width: 105px;
    height: 140px;
    padding-right: 5px;
  }
  .image {
    float: left;
  }
  .content {
    float: left;
    text-align: justify;
    width: 500px;
    height: 150px;
    padding-top: 5px;
  }
  .id {
    float: left;
    padding-right: 10px;
  }
  .wantedbutton {
    float: right;
    padding-right: 10px;
  }

  #rate-label{
    margin: 0;
    margin-top: 15px;
    font-size: 12px;
    color: darken(rgb(209, 209, 209), 16);
    line-height: .5;
  }
}
</style>
