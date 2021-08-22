<template>
  <div class="comment mb-3">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"><b> {{ comment.user.name }} </b></h5>
          <p class="card-text" v-html="commentText">
          </p>
          <p class="card-text">
            <small class="text-muted">{{comment.createdAt.slice(0,10)}}</small>
          </p>
          <button class="comment-button" @click="control = !control">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0
                 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0
                  0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1
                   2 6.8V2a.5.5 0 0 0-.5-.5z"/>
              </svg>
              Reply
            </button>
            <button v-show="comment.comments.length !== 0 "
             class="comment-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333
                 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0
                  0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1
                   1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              </svg>
              {{comment.comments.length}}
            </button>
          <div v-show="control === true" id="share">
            <vue-simplemde v-model="text" ref="markdownEditor" id="vue-simplemde"/>
            <input type="checkbox" v-model="isSpoiler"> <label>Is spoiler</label>
            <button @click="share">Share</button>
          </div>
        </div>
      </div>
    </div>
    <div v-show="comment.comments.length !== 0" class="nested-comments"
        v-for="nestedComment in comment.comments"
        :key="nestedComment.id">
      <Comment
        :comment="nestedComment"
      />
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
import VueSimplemde from 'vue-simplemde';

export default {
  name: 'Comment',
  props: {
    comment: Object,
  },
  components: {
    VueSimplemde,
  },
  data() {
    return {
      control: false,
      text: null,
      isSpoiler: false,
      commentText: null,
    };
  },
  methods: {
    share() {
      axios.post('/api/comments/', {
        text: this.text,
        parent_comment_id: this.comment.id,
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
  computed: {
    simplemde() {
      return this.$refs.markdownEditor.simplemde;
    },
  },
  mounted() {
    this.commentText = this.simplemde.markdown(this.comment.text);
  },
};
</script>
<style lang="scss">
.comment {
  border-left: 1px solid grey;
  max-width: 800px;
  #share {
   margin-bottom: 20px;
   color: black;
   font-size: 16px;
   button {
   width: 80px;
   height: 30px;
   border: 1px solid blue;
   background-color: blue;
   border-radius: 5px;
   margin: 10px;
  }
 }
 .card-body {
   max-width: 800px;
 }
  .comment-button {
    width: 100px;
    height: 30px;
    border: none;
    background-color: white;
    position: relative;
    right: 15px;
  }
  #comments {
    border: none;
  }
  .nested-comments {
    margin-left: 20px;
  }
  .bi {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
  #textarea {
    margin-left: 20px;
  }
}
</style>
