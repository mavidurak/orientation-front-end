<template>
  <div>
    <div class="discussion">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">
                <b>{{ discussion.header }}</b>
              </h4>
              <p class="card-text">{{ discussion.text }}</p>
              <p class="card-text">
                <small class="text-muted"
                  >Posted by {{ discussion.user.username }} on
                   {{ discussion.communities.name }}</small
                ><br />
                <small class="text-muted">{{
                  discussion.createdAt.slice(0, 10)
                }}</small>
              </p>
            </div>
          </div>
        </div>
        <div id="share">
          <vue-simplemde
            v-model="text"
            ref="markdownEditor"
            id="vue-simplemde"
          />
          <input type="checkbox" v-model="isSpoiler" />
          <label>Is spoiler</label>
          <button @click="shareComment">Share</button>
        </div>
      </div>
      <Comments :comments="comments" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import VueSimplemde from 'vue-simplemde';

import Comments from '@/components/Comment/Comments.vue';

export default {
  name: 'Discussion',
  components: {
    Comments,
    VueSimplemde,
  },
  data() {
    return {
      discussion: {},
      comments: [],
      text: null,
      isSpoiler: false,
    };
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
    shareComment() {
      axios
        .post(
          '/api/comments/',
          {
            text: this.text,
            discussion_id: this.$route.params.discussionId,
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
            this.getComments();
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
  mounted() {
    axios
      .get(
        `/api/communites/${this.$route.params.communityId}/${this.$route.params.discussionId}`,
        {
          headers: {
            'x-access-token': window.localStorage.getItem('x-access-token'),
          },
        },
      )
      .then((res) => {
        this.discussion = res.data;
      })
      .catch((err) => {
        const message = err.response.data.errors.map((e) => e.message);
        swal({
          icon: 'error',
          text: `${message}`,
        });
      });
    this.getComments();
  },
};
</script>

<style lang="scss" scoped>
@import "~simplemde/dist/simplemde.min.css";
.discussion {
  margin: auto;
  max-width: 1000px;
  overflow: hidden;
  padding: 20px;
  text-align: left;
  #vue-simplemde {
    max-width: 750px;
  }
  .card {
    h1 {
      text-align: center;
      margin: 10px;
    }
    max-width: 900px;
    padding-left: 30px;
    margin: auto;
    color: black;
    #share {
      color: black;
      font-size: 16px;
      margin-bottom: 5px;
      label {
        color: grey;
        font-size: 16px;
      }
      button {
        width: 80px;
        height: 30px;
        color: white;
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
  }
}
</style>
