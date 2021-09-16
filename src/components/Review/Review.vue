<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">rated by <b>{{review.user.username}}</b>
        <Rate :rate="review.score" id="rate"/></h6>
        <p class="card-text">
          {{review.text}}
        </p>
        <p>
          <small class="text-muted">{{
            review.createdAt.slice(0, 10)
          }}</small>
        <button v-if="reviewComment.length !== 0">
          <i class="bi bi-chat-square"></i>
          {{reviewComment.length}} comment
        </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Rate from '../RateAndWantedButtons/Rate.vue';

export default {
  name: 'Review',
  props: {
    review: Object,
  },
  components: {
    Rate,
  },
  data() {
    return {
      reviewComment: null,
    };
  },
  mounted() {
    axios.get(`/api/reviews/${this.review.id}/comments`, {
      headers: {
        'x-access-token': window.localStorage.getItem('x-access-token'),
      },
    })
      .then((res) => {
        this.reviewComment = res.data.comments;
      });
  },
};
</script>
<style lang="scss" scoped>
.card{
  margin-bottom: 10px;
  text-align: left;
  overflow: hidden;
  .card-body{
    padding: 15px 0 0 15px;
  }
  p{
    cursor: pointer;
    margin-bottom: 10px;
  }
  #rate{
    width: 100px;
    float: left;
    margin-left: 5px;
  }
  button{
    border: none;
    margin-left: 20px;
    background-color: white;
  }
}
</style>
