<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <div id="games" >
      <h3 class="text-left">Games</h3>
      <hr>
      <ContentIcon :content="content" v-for="content in filterGames"
      :key="content.id"/>
    </div>
         <div id="movie">
      <h3 class="text-left">Movies</h3>
      <hr>
      <ContentIcon :content="content" v-for="content in filterMovies"
      :key="content.id"/>
      <br>
    </div>
    <div id="series">
      <h3 class="text-left">Series</h3>
      <hr>
      <ContentIcon :content="content" v-for="content in filterSeries"
      :key="content.id"/>
    </div>
    <div id="books">
      <h3 class="text-left">Books</h3>
      <hr>
      <ContentIcon :content="content" v-for="content in filterBooks"
      :key="content.id"/>
    </div>
      </div>
      <div class="col-md-2">
        <div id="games" >
      <h3 class="text-left">Contents</h3>
      <hr>
      <ContentIcon :content="content" v-for="content in contents"
      :key="content.id"/>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import ContentIcon from './ContentIcon.vue';

export default {
  name: 'ContentIconList',
  components: {
    ContentIcon,
  },
  data() {
    return {
      contents: [],
    };
  },
  mounted() {
    axios.get('/api/contents', {
      headers: {
        'x-access-token': window.localStorage.getItem('x-access-token'),
      },
    }).then((res) => {
      this.contents = res.data.contents;
    });
  },
  computed: {
    filterMovies() {
      return this.contents.filter((item) => item.type === 'MOVIE');
    },
    filterBooks() {
      return this.contents.filter((item) => item.type === 'BOOK');
    },
    filterGames() {
      return this.contents.filter((item) => item.type === 'GAME');
    },
    filterSeries() {
      return this.contents.filter((item) => item.type === 'SERIES');
    },
  },
};
</script>
<style scoped>

</style>
