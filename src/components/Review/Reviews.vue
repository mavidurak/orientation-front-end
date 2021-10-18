<template>
<div class="reviews">
  <Review :review="review" v-for="review in reviews" :key="review.id"/>
</div>
</template>

<script>
import Review from './Review.vue';

export default {
  name: 'Reviews',
  props: {
    reviews: Array,
  },
  components: {
    Review,
  },
};
</script>
<style lang="scss" scoped>
</style>
