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
  methods: {
    submit(r) {
      this.rate = r;
      this.$emit('rate', r);
    },
    changeColor(n) {
      /* eslint-disable no-plusplus */
      const stars = document.getElementById('rate-stars').children;
      if (this.rate) {
        for (let i = 0; i < this.rate; i++) {
          stars[i].children[0].style.color = '#805919';
        }
      }
      for (let i = 0; i < n; i++) {
        stars[i].children[0].style.color = '#F5A623';
      }
    },
    clear() {
      /* eslint-disable no-param-reassign */
      const stars = document.getElementById('rate-stars').children;
      stars.forEach((s) => {
        s.children[0].style.color = 'rgb(209, 209, 209)';
      });
      this.setRate();
    },
    setRate() {
      if (this.rate) {
        this.changeColor(this.rate);
      }
    },
  },
  mounted() {
    console.log(this);
    /* 6/10 => 3/5 */
    this.rate = Math.floor(this.rate > 5 ? (this.rate / 2) : this.rate);
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
