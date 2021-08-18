<template>
  <div>
    <textarea cols="60" rows="5" v-model="comment_text" placeholder="What are you thinking?">
    </textarea><br>
    <input type="checkbox" v-model="is_spoiler"> <label>İs spoiler</label>
    <button @click="shareComment">Share</button>
    <Comment :comment="comment" v-for="comment in comments" :key="comment.id"/>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import Comment from '@/components/Comment/Comment.vue';

export default {
  props: {
    comments: Array,
  },
  components: {
    Comment,
  },
  data() {
    return {
      comment_text: null,
      is_spoiler: false,
    };
  },
  methods: {
    shareComment() {
      axios.post('/api/comments/', {
        text: this.comment_text,
        discussion_id: this.$route.params.discussionId,
        is_spoiler: this.is_spoiler,
      },
      {
        headers: {
          'x-access-token': window.localStorage.getItem('x-access-token'),
        },
      })
        .then((res) => {
          if (res.status === 200) {
            swal({
              icon: 'success',
              text: 'comment created successfully',
            });
          }
        })
        .catch((err) => {
          const message = err.response.data.errors
            .map((e) => e.message);
          swal({
            icon: 'error',
            text: `${message}`,
          });
        });
    },
  },
};
</script>
<style>
</style>
