<template>
  <div>
    <h3 id="title" v-show="community.grup == ''">Popüler Gruplar</h3>
    <CommunityDetailSmall
      :community="grup"
      v-for="grup in filtred"
      :key="grup.id"
    />
  </div>
</template>
<script>
import CommunityDetailSmall from './CommunityDetailSmall.vue';

export default {
  props: ['community'],
  components: {
    CommunityDetailSmall,
  },
  computed: {
    filtred() {
      return this.community.communityes.filter((grup) => grup.name.includes(this.community.grup));
    },
  },
};
</script>
<style>
#title {
  position: relative;
  right: 200px;
  margin-top: 40px;
}
</style>
