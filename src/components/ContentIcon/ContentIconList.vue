<template>
  <div>
      <ContentIcon :content="content" v-for="content in contents"
      :key="content.id"/>
  </div>
</template>
<script>
import axios from 'axios';
import ContentIcon from './ContentIcon.vue';

export default {
  components: {
    ContentIcon,
  },
  data() {
    return {
      contents: [],
    };
  },
  name: 'ContentIconList',
  mounted() {
    axios.get('/api/contents', {
      headers: {
        'x-access-token': window.localStorage.getItem('x-access-token'),
      },
    }).then((res) => {
      this.contents = res.data.content;
    });
  },
};
</script>
<style scoped>

</style>
