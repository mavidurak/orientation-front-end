<template>
  <div>
  <div class="community-list" v-if="communities.length !== 0">
    <CommunityDetailSmall
      :community="grup"
      v-for="grup in communities"
      :key="grup.id"
    />
  </div>
  <div v-else>
    <h4> Topluluk bulunamadı </h4>
  </div>
  </div>
</template>
<script>
import CommunityDetailSmall from './CommunityDetailSmall.vue';

export default {
  name: 'Communitylist',
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
}
</style>
