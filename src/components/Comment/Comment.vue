<template>
  <div class="comment mb-3" id="parent">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ comment.user.name }}</h5>
          <p class="card-text">
            {{ comment.text }}
          </p>
          <p class="card-text">
            <small class="text-muted">{{ comment.createdAt }}</small>
          </p>
        </div>
      </div>
    </div>
    <!-- <div v-show="comment.comments.length !== 0">
      <Comment :comment="nestedComment" v-for="nestedComment in comment.commments"
      :key="nestedComment.id"/>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'Comments',
  props: {
    comment: Object,
  },
  data() {
    return {
      control: 0,
      newcomment: [],
    };
  },
  methods: {
    c() {
      if (this.comment.comments.length !== 0) {
        this.comment.comments.forEach((element) => {
          this.newcomment = element.comments;
          if (this.newcomment.length === 0) {
            console.log(element.id);
          } else {
            this.newcomment = this.newcomment.filter((a) => a.comments);
            console.log(this.newcomment);
          }
        });
      }
    },
  },
  mounted() {
    this.c();
  },
};
</script>
<style lang="scss">
.comment {
  border-left: 1px solid grey;
  max-width: 800px;
}
</style>
