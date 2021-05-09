<template>
  <div class="community-list">
    <h3 id="title">Popüler Gruplar</h3>
    <CommunityDetailSmall
      :community="grup"
      v-for="grup in communities"
      :key="grup.id"
    />
  </div>
</template>
<script>
import CommunityDetailSmall from './CommunityDetailSmall.vue';

export default {
  props: {
    communities: Array,
  },
  components: {
    CommunityDetailSmall,
  },
};
</script>
<style lang="scss">
.community-list {
  #title {
    position: relative;
    right: 200px;
    margin-top: 40px;
  }
}
</style>
