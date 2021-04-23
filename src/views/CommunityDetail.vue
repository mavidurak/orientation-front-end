<template>
  <div class="content">
    <div class="background">
      <img class="resim" :src="community.background" alt="">
    </div>
    <div class="row">
      <div id="group" class="col-4"  style="text-align: right">
        <img :src="community.image" alt="" style="width:150px;" /><br>
        <button onclick="http://localhost:8080/contents" type="button" class="btn btn-outline-success"
        @click="join()"
        style="text-align: left" >
          Join Group
        </button>
      </div>
      <hr />
      <div  id="text" class="col-4" style="text-align: left;" >
        <h4>
          {{ community.name }}
        </h4>
        <hr>
        <span v-if="!readMoreActivated">{{
          community.explanation.slice(0, 400)
        }}</span>
        <a
          class=""
          v-if="!readMoreActivated"
          @click="activateReadMore"
          style="
            color: green;
            text-decoration: none;
            font-weight: bold;
            cursor: pointer;
          "
        >
          ...more</a
        >
        <span v-if="readMoreActivated" v-html="community.explanation"></span>
        <a
          class=""
          v-if="readMoreActivated"
          @click="notActivateReadMore"
          style="
            color: green;
            text-decoration: none;
            font-weight: bold;
            cursor: pointer;
          "
        >
          (less)</a
        >
        <hr>
        <div id="groupBox">
          <div class="category"> <b> category:</b> {{ community.category }}</div>
          <div class="members"><b> members: </b> {{ community.members}}</div>
          <div class="tags"><b> tags: </b> {{ community.tags}}</div>
          <div class="website"><strong> website: </strong>
            <a :href="community.website">{{ community.website}}
            </a></div>
          <div class="rules"><b> rules: </b> {{ community.rules}}</div>
        </div>
      </div>
      <hr>
    </div>
       <div class="discussion">
        <p>Discussion Board </p>
        <hr>
        <a href="">POSTS</a><br>
        <a href="">POSTS</a><br>
        <a href="">POSTS</a><br>
        <a href="">POSTS</a><br>
        <a href="">POSTS</a><br>
        <a href="">POSTS</a><br>
      </div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      readMoreActivated: false,
      community: {
        id: '1',
        name: 'Goodreads Librarians Group',
        image: 'https://images.gr-assets.com/groups/1269147049p8/220.jpg',
        background: 'https://images.gr-assets.com/groups/1427390256masthead/220.jpg',
        members: '555',
        category: 'Business --> Companies',
        tags: ['jenna-bush-hager', 'literature, and today'],
        rules: 'A place where all Goodreads members can work together to improve the Goodreads book catalog.',
        website: 'http://www.goodreads.com',
        explanation: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        // createdAt: date,
        // updatedAt: date,
      },
    };
  },
  methods: {
    activateReadMore() {
      this.readMoreActivated = true;
    },
    notActivateReadMore() {
      this.readMoreActivated = false;
    },
    join() {
      this.$router.replace({ name: 'Home' });
    },
  },
};
</script>

<style>
.content{
  top: 50%;
  left: 50%;
}
.background{
  width: 65%;
    height: 50%;
    overflow: hidden;
    margin-left:20%;
    display: block;
}
#group{
position: absolute;
top: 48%;
display: block;
}
#group img{
border-style: solid;
border-width: 4px;
border-color: wheat;
}
#text{
  width: 20%;
  text-align: left
}
#groupBox{
  text-align: left;
  font-size: 13px;
}
.discussion{
  width: 50%;
  margin-left: 20%;
  font-weight: bolder ;
  text-align: left;
}
</style>
