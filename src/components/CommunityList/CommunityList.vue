CommunityList
<template>
  <div>
    <h3>Popüler Gruplar</h3>
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
h3 {
  position: relative;
  right: 200px;
  margin-top: 40px;
}
</style>
