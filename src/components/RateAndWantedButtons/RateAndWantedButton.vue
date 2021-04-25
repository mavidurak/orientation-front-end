<template>
  <div class="wanted-list-and-rate">
    <WantedButton
      :contentType="content.type"
      :selectedStatus="content.wantedStatus"
      @select="changeStatus"
    />
    <p id="rate-label">Rate this {{ content.type.toLowerCase() }}</p>
    <Rate :rate="content.rate" @rate="changeRate" />
  </div>
</template>
<script>
import WantedButton from './WantedButton.vue';
import Rate from './Rate.vue';

export default {
  name: 'RateAndWantedButton',
  props: {
    content: Object,
  },
  components: {
    WantedButton,
    Rate,
  },
  methods: {
    changeStatus(status) {
      this.$emit('select', status);
    },
    changeRate(rate) {
      this.$emit('rate', rate);
    },
  },
};
</script>
<style lang="scss" scoped>
.wanted-list-and-rate{
  text-align: center;

  #rate-label {
    margin: 0;
    margin-top: 15px;
    font-size: 12px;
    color: darken(rgb(209, 209, 209), 16);
    line-height: 0.5;
  }
}
</style>
