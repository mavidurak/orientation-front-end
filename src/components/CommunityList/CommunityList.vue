CommunityList
<template>
  <div>
    <h3 id="title">Popüler Gruplar</h3>
    <CommunityDetailSmall
      :detail="grup"
      v-for="grup in community"
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
};
</script>
<style>
#title {
  position: relative;
  right: 200px;
  margin-top: 40px;
}
</style>
