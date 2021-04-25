<template>
  <div :class="rate">
    <ul id="rate-stars">
      <li v-for="n in [1,2,3,4,5]" :key="n">
        <i
          @mouseenter="changeColor(n)"
          @mouseleave="clear"
          @click="submit(n)"
          class="bi bi-star-fill star"
        ></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Rate',
  props: {
    rate: Number,
  },
  data() {
    return {
      myRate: 0,
    };
  },
  methods: {
    submit(r) {
      this.myRate = r;
      this.$emit('rate', r);
    },
    changeColor(n) {
      /* eslint-disable no-plusplus */
      const stars = this.$el.children[0].children;
      if (this.myRate) {
        for (let i = 0; i < this.myRate; i++) {
          stars[i].children[0].style.color = '#805919';
        }
      }
      for (let i = 0; i < n; i++) {
        stars[i].children[0].style.color = '#F5A623';
      }
    },
    clear() {
      /* eslint-disable no-param-reassign */
      const stars = this.$el.children[0].children;
      stars.forEach((s) => {
        s.children[0].style.color = 'rgb(209, 209, 209)';
      });
      this.setRate();
    },
    setRate() {
      if (this.myRate) {
        this.changeColor(this.myRate);
      }
    },
  },
  mounted() {
    /* 6/10 => 3/5 */
    this.myRate = this.rate ? Math.floor(this.rate > 5 ? (this.rate / 2) : this.rate) : 0;
    this.setRate();
  },
  updated() {
    this.setRate();
  },
};
</script>

<style lang="scss" scoped>
$grey: rgb(209, 209, 209);

.rate{
  display: flex;
}

ul {
  width: 85px;
  list-style-type: none;
  margin: auto;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
  margin: 1px;
}

.star{
  font-size: 15px;
  color: $grey;
  transition: color .18s;
}
</style>
