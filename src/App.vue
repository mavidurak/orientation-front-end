<template>
  <div id="app">
    <component :is="layout">
      <notifications group="foo" position="bottom right" />
      <router-view />
    </component>
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
    layout() {
      if (this.$route.meta.layout) {
        return `${this.$route.meta.layout}-layout`;
      } return null;
    },
  },
};
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-content{
  padding: 10px;
  #routes {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
