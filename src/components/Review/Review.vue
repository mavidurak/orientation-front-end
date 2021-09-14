<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title"><b>{{review.user.username}}</b></h6>
        <p class="card-text">
          {{review.text}}
        </p>
        <p>
          <small class="text-muted">{{
            review.createdAt.slice(0, 10)
          }}</small>
        </p>
        <!-- <p v-if="!commentClick && review.comments.length != 0"
        @click="commentClick = !commentClick">
          {{review.comments.length}} comments</p>
        <div v-else v-for="nestedReview in review.comments" :key="nestedReview.id"
          class="nested-reviews">
          <Review :review="nestedReview"/>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Review',
  props: {
    review: Object,
  },
  data() {
    return {
      commentClick: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.card{
  margin-bottom: 5px;
  text-align: left;
  overflow: hidden;
  p{
    cursor: pointer;
  }
  .nested-reviews{
    div{
      border: none;
    }
    .card-body{
      border-left: 1px solid grey;
    }
  }
}
</style>
