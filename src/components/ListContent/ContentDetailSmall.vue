<template>
  <div class="list-group-item">
    <div class="content">
      <strong class="id">{{ content.id }} </strong>
      <div class="image"><img :src="content.image" alt="content.name" /></div>
      <strong>{{ content.name }}</strong> <br />
      by {{ content.user.name }} <br />
      {{ content.rate }}/10
      <div class="wantedbutton">
        <WantedButton @wantedStatus="changeStatus" /> <br />
        </div>
    </div>
  </div>
</template>
<script>
import WantedButton from '@/components/WantedButton.vue';

export default {
  props: ['content'],
  components: {
    WantedButton,
  },
  methods: {
    changeStatus(status) {
      alert(status);
      console.log('contentDetail', status);
    },
  },
};
</script>
<style lang="scss" >
.list-group-item{
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
}
</style>
