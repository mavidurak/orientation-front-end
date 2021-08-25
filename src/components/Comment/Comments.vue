<template>
  <div>
    <Comment :level="0" :comment="comment" v-for="comment in comments" :key="comment.id"/>
  </div>
</template>

<script>
import Comment from '@/components/Comment/Comment.vue';

export default {
  name: 'Comments',
  props: {
    comments: Array,
  },
  components: {
    Comment,
  },
};
</script>
<style lang="scss">
 #share {
   margin-bottom: 20px;
   color: black;
   font-size: 16px;
   button {
   width: 80px;
   height: 30px;
   border: 1px solid blue;
   color: white;
   background-color: blue;
   border-radius: 5px;
   margin: 10px;
  }
 }

</style>
