<template>
  <div>
    <div class="discussion">
      <h2>{{ discussion.communities.name }}</h2>
      <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{discussion.header}}</h5>
              <p class="card-text">{{discussion.text}}</p>
              <p class="card-text">
                <small class="text-muted">Posted by {{discussion.user.name}}</small><br>
                <small class="text-muted">{{ discussion.createdAt.slice(0,10)}}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Comments :discussion="discussion" :comments="comments" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Comments from '@/components/Comment/Comments.vue';

export default {
  name: 'Discussions',
  components: {
    Comments,
  },
  data() {
    return {
      discussion: {},
      comments: [],
    };
  },
  mounted() {
    axios
      .get(
        `/api/discussions/${this.$route.params.communityId}/${this.$route.params.discussionId}`,
        {
          headers: {
            'x-access-token': window.localStorage.getItem('x-access-token'),
          },
        },
      )
      .then((res) => {
        this.discussion = res.data;
      });
    axios
      .get(`/api/discussions/${this.$route.params.discussionId}/comments`, {
        headers: {
          'x-access-token': window.localStorage.getItem('x-access-token'),
        },
      })
      .then((res) => {
        this.comments = res.data.comments;
      });
  },
};
</script>

<style lang="scss">
.discussion {
  margin: auto;
  max-width: 1000px;
  overflow: hidden;
  padding: 20px;
  text-align: left;
  border: 1px solid grey;
  .card{
    max-width: 800px;
    border: none;
    position: relative;
    right: 20px;
    color: black;
  }
}
</style>
