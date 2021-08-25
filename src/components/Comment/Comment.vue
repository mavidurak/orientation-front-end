<template>
  <div>
    <div
      class="comment mb-3"
      v-show="comment.is_spoiler === false || isSpoilerClick"
    >
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
        <Comment :level = "level+1" :comment="nestedComment" />
      </div>
    </div>
    <div
      v-show="comment.is_spoiler === true && isSpoilerClick === false"
    >
      <div class="comment mb-3">
        <button id="spoiler" @click="isSpoilerClick = true">View spoiler</button>
      </div>
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
  padding-bottom: 10px;
  margin: auto;
  max-width: 900px;
  background-color: white;
  .card-body {
    #person {
      font-size: 35px;
      color: rgb(0, 0, 128);
    }
    h5 {
      position: relative;
      left: 50px;
      bottom: 40px;
      color: rgb(0, 0, 128);
    }
    max-width: 800px;
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
        border: 1px solid rgb(0, 0, 128);
        background-color: rgb(0, 0, 128);
        border-radius: 5px;
        margin-left: 10px;
      }
      button:hover {
        border: 1px solid blue;
        background-color: blue;
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
    margin-left: 30px;
    border-left: 1px solid grey;
  }
}
#spoiler {
  margin: 20px;
  border: none;
  background-color: white;
  color: blue;
}
#spoiler:hover {
  color: rgb(0, 16, 67);
}
</style>
