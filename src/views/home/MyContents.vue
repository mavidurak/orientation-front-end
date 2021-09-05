<template>
<div class="row">
    <table class="table col-12  col-md-8" style="  margin:auto;">
    <thead>
      <tr>
        <th scope="col">Cover</th>
        <th scope="col">Title</th>
        <th scope="col">Average Rating</th>
        <th scope="col">Your Rating</th>
        <th scope="col">Shelves</th>
        <th scope="col">Review</th>
        <th scope="col">Review Date</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="review in reviews" :key="review.id">
        <td><ContentIcon :content="review.contents" class="Contenticon" /></td>
        <td >{{review.contents.name}}</td>
        <td >{{review.contents.rate}}/10</td>
        <td ><Rate :rate='review.score'/></td>
        <td >{{review.contents.name}}</td>
        <td >{{review.text}}</td>
        <td >{{review.createdAt.slice(0, 10)+" " +
           review.createdAt.slice(11, 19)}}
        </td>
      </tr>
    </tbody>
    </table>
</div>
</template>

<script>
import ContentIcon from '@/components/ContentIcon/ContentIcon.vue';
import Rate from '@/components/RateAndWantedButtons/Rate.vue';
import axios from 'axios';

export default {
  name: 'MyContents',
  components: {
    ContentIcon,
    Rate,
  },
  data() {
    return {
      readMoreActivated: false,
      status: null,
      reviews: {},
    };
  },

  mounted() {
    axios
      .get('/api/reviews', {
        headers: {
          'x-access-token': window.localStorage.getItem('x-access-token'),
        },
      })
      .then((res) => {
        this.reviews = res.data.reviews;
      });
  },

};
</script>
<style lang='scss' scoped>
td{
  vertical-align: middle;
  margin :0px;
  padding:0px;
  padding-top:5px;
}
.Contenticon{
  width: 200px;
  height: 200px;
}
</style>
