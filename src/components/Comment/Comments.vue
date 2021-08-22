<template>
  <div>
    <div id="share">
      <vue-simplemde v-model="text" ref="markdownEditor" id="vue-simplemde"/>
      <input type="checkbox" v-model="isSpoiler"> <label>Is spoiler</label>
      <button @click="shareComment">Share</button>
    </div>
    <Comment :comment="comment" v-for="comment in comments" :key="comment.id"/>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import VueSimplemde from 'vue-simplemde';
import Comment from '@/components/Comment/Comment.vue';

export default {
  props: {
    comments: Array,
  },
  components: {
    Comment,
    VueSimplemde,
  },
  data() {
    return {
      text: null,
      isSpoiler: false,
    };
  },
  methods: {
    shareComment() {
      axios.post('/api/comments/', {
        text: this.text,
        discussion_id: this.$route.params.discussionId,
        is_spoiler: this.isSpoiler,
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
<style lang="scss">
 @import '~simplemde/dist/simplemde.min.css';
 #vue-simplemde {
   max-width: 800px;
 }
 #share {
   margin-bottom: 20px;
   color: black;
   font-size: 16px;
   button {
   width: 80px;
   height: 30px;
   border: 1px solid blue;
   color: white;
   background-color: blue;
   border-radius: 5px;
   margin: 10px;
  }
 }

</style>
