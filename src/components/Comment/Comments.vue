<template>
  <div class="all-comment">
    <Comment :level="0" :comment="comment" v-for="comment in comments"
    :key="comment.id" @share="getComments"/>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

import Comment from '@/components/Comment/Comment.vue';

export default {
  name: 'Comments',
  props: {
    comments: Array,
  },
  components: {
    Comment,
  },
  methods: {
    getComments() {
      axios
        .get(`/api/discussions/${this.$route.params.discussionId}/comments`, {
          headers: {
            'x-access-token': window.localStorage.getItem('x-access-token'),
          },
        })
        .then((res) => {
          this.comments = res.data.comments;
        })
        .catch((err) => {
          const message = err.response.data.errors.map((e) => e.message);
          swal({
            icon: 'error',
            text: `${message}`,
          });
        });
    },
  },
};
</script>
<style lang="scss">
.all-comment{
  border: 1px solid rgb(226, 226, 226);
  max-width: 900px;
  margin: auto;
  padding: 10px;
  img {
    max-width: 100%;
  }
  table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  }
  code {
    background-color: rgb(220, 220, 220);
    border-radius: 3px;
    padding: 5px;
    color: black;
  }
  blockquote{
    font-style: italic;
    padding: 5px;
    border-left: 2px solid grey;
    background-color: rgb(240, 240, 240);
  }
}
</style>
