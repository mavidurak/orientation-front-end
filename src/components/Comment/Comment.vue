<template>
  <div>
    <div
      class="comment mb-3"
      v-show="comment.is_spoiler === false || isSpoilerClick"
    >
    <span v-if="isSpoilerClick" @click="isSpoilerClick = !isSpoilerClick"
    id="hide">Hide comment</span>
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <i class="bi bi-person-circle" id="person"></i>
            <h5 class="card-title">
              <b> {{ comment.user.name }} </b>
            </h5>
            <p class="card-text" v-html="commentText"></p>
            <p class="card-text">
              <small class="text-muted">{{
                comment.createdAt.slice(0, 10)
              }}</small>
            </p>
            <button
              class="comment-button"
              @click="replyIsClick = !replyIsClick"
            >
              <i class="bi bi-arrow-return-right"></i>
              <b> Reply</b>
            </button>
            <button
              v-show="level>=2 && comment.comments.length !== 0"
              class="comment-button"
              @click="levelControl = !levelControl"
            >
              <i class="bi bi-chat-square"></i>
              {{ comment.comments.length }} Comment
            </button>
            <div v-show="replyIsClick === true" id="share">
              <vue-simplemde
                v-model="text"
                ref="markdownEditor"
                id="vue-simplemde"
              />
              <input type="checkbox" v-model="isSpoiler" />
              <label>Is spoiler</label>
              <button @click="share">Share</button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-show="comment.comments.length !== 0 && (level<2 || levelControl)"
        class="nested-comments"
        v-for="nestedComment in comment.comments"
        :key="nestedComment.id"
      >
        <Comment :level = "level+1" :comment="nestedComment" @share="emitNestedComment" />
      </div>
    </div>
      <div class="spoiler"
      v-show="comment.is_spoiler === true && isSpoilerClick === false">
        <button @click="isSpoilerClick = true">View spoiler</button>
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
    level: Number,
  },
  components: {
    VueSimplemde,
  },
  data() {
    return {
      levelControl: false,
      replyIsClick: false,
      text: null,
      isSpoiler: false,
      commentText: null,
      isSpoilerClick: false,
    };
  },
  methods: {
    emitNestedComment() {
      this.$emit('shareComment');
    },
    share() {
      axios
        .post(
          '/api/comments/',
          {
            text: this.text,
            parent_comment_id: this.comment.id,
            is_spoiler: this.isSpoiler,
          },
          {
            headers: {
              'x-access-token': window.localStorage.getItem('x-access-token'),
            },
          },
        )
        .then((res) => {
          if (res.status === 200) {
            this.replyIsClick = false;
            this.$emit('share');
            swal({
              icon: 'success',
              text: 'comment created successfully',
            });
          }
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
  padding: 10px;
  margin: auto;
  margin-bottom: 15px;
  max-width: 900px;
  background-color: white;
  color: black;
  #hide{
    color: #114A52;
    font-size: 16px;
    margin-left: 20px;
    cursor: no-drop;
  }
  .card-body {
    max-width: 800px;
    #person {
      font-size: 35px;
      color: #345461;
    }
    h5 {
      position: relative;
      left: 50px;
      bottom: 40px;
      color: #345461;
    }
    #share {
      color: black;
      font-size: 16px;
      label {
        color: grey;
        font-size: 16px;
      }
      button {
        width: 80px;
        height: 30px;
        border: 1px solid #345461;
        background-color: #345461;
        border-radius: 5px;
        margin-left: 10px;
      }
      button:hover {
        border: 1px solid rgb(39, 63, 73);
        background-color: rgb(39, 63, 73);
      }
    }
    .comment-button {
      height: 30px;
      border: none;
      background-color: white;
      margin-right: 10px;
    }
  }
  .nested-comments {
    margin-left: 10px;
    border-left: 1px solid rgb(189, 189, 189);
  }
}
.spoiler {
  margin: auto;
  margin-bottom: 15px;
  max-width: 900px;
  background-color: #B9C3C2;
  color: black;
  button{
    padding: 5px;
    border: 1px solid rgb(225, 225, 225);
    background-color: white;
    border-radius: 10px;
    margin: 5px;
    position: relative;
    left: 380px;
  }
}
</style>
