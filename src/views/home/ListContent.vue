<template>
  <div>
    <div class="new">
      <router-link class="link" to="/create-content">Create a Content</router-link>
    </div>
    <ContentList />
  </div>
</template>

<script>
import ContentList from '@/components/Content/ContentList.vue';

export default {
  name: 'ListContent',
  components: {
    ContentList,
  },
};
</script>

<style lang='scss' scoped>
.new {
  padding-left: 80%;
  .link {
    color: rgb(12, 116, 12);
  }
}
</style>
