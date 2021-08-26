<template>
  <div class="list-group">
      <ContentDetailSmall :content="content" v-for="content in contents" :key="content.id"/>
  </div>
</template>
<script>
import axios from 'axios';
import ContentDetailSmall from './ContentDetailSmall.vue';

export default {
  name: 'ContentList',
  components: {
    ContentDetailSmall,
  },
  data() {
    return {
      contents: [],
    };
  },
  mounted() {
    axios.get('/api/contents', {
      headers: {
        'x-access-token': window.localStorage.getItem('x-access-token'),
      },
    }).then((res) => {
      this.contents = res.data.contents;
    });
  },
};
</script>
