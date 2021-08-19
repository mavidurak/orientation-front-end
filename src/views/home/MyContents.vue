<template>
<div class="row">
    <table class="table my-contents-table  col-12  col-md-8">
    <thead>
      <tr>
        <th scope="col">Cover</th>
        <th scope="col">Title</th>
        <th scope="col">Average Rating</th>
        <th scope="col">Your rating</th>
        <th scope="col">Shelves</th>
        <th scope="col">Rewiev</th>
        <th scope="col">Date review</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="reviews in review" :key="reviews.id">
        <td><ContentIcon :content="reviews.contents" /></td>
        <td style="vertical-align: middle;">{{reviews.contents.name}}</td>
        <td style="vertical-align: middle;">{{reviews.contents.rate}}/10</td>
        <td style="vertical-align: middle;"><Rate :rate='reviews.score'/></td>
        <td style="vertical-align: middle;">{{reviews.contents.name}}</td>
        <td style="vertical-align: middle;">{{reviews.text}}</td>
        <td style="vertical-align: middle;">{{reviews.createdAt.slice(0, 10)+" " +
           reviews.createdAt.slice(11, 19)}}
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
      review: {},
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
        this.review = res.data.reviews;
        console.log(this.review);
      });
  },

};
</script>
<style scoped lang="scss" >
.my-contents-table{
  margin:auto;
}
</style>
