<template>

  <div class="community-detail">
    <div class="content">
    <div class="row">
      <div class="col">
        <div class="background">
          <img class="resim" :src="community.background" alt="" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div id="padding-content" class="row">
          <div class="col-md-3">
            <div id="group">
              <div class="afis">
                <img :src="community.image" alt="" style="width:150px;" /><br />
              </div>
              <button
                onclick="http://localhost:8080/contents"
                type="button"
                class="btn btn-outline-success"
                @click="join()"
                style="text-align: left"
              >
                Join Group
              </button>
            </div>
          </div>
          <hr />
          <div id="text" class="col-md-9">
            <div class="detail">
              <h4>
                {{ community.name }}
              </h4>
              <hr />
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
              <span
                v-if="readMoreActivated"
                v-html="community.explanation"
              ></span>
              <a
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
              <hr />
              <div id="groupBox">
                <div class="category">
                  <b> category:</b> {{ community.category }}
                </div>
                <div class="members">
                  <b> members: </b> {{ community.members }}
                </div>
                <div class="tags"><b> tags: </b> {{ community.tags }}</div>
                <div class="website">
                  <strong> website: </strong>
                  <a :href="community.website">{{ community.website }} </a>
                </div>
                <div class="rules"><b> rules: </b> {{ community.rules }}</div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="discussion">
        <p>Discussion Board</p>
        <hr/>
      </div>
    </div>
    <div class="row">
      <table class="table col-12  col-md-12" style="  margin:auto;">
        <thead>
          <tr>
            <th scope="col">Header</th>
            <th scope="col">Text</th>
            <th scope="col">Create Date</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="discussion in discussions" :key="discussion.id">
            <td ><a :href="'http://localhost:8080/communities/'+discussion.communities.slug+'/'+discussion.slug">
            {{discussion.header}}</a></td>
            <td> {{ discussion.text }} </td>
            <td >{{discussion.createdAt.slice(0, 10)+" " +
              discussion.createdAt.slice(11, 19)}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CommunityDetail',
  components: {},
  data() {
    return {
      readMoreActivated: false,
      community: {
        id: 1,
        name: 'Goodreads Librarians Group',
        image: 'https://images.gr-assets.com/groups/1269147049p8/220.jpg',
        background:
          'https://images.gr-assets.com/groups/1427390256masthead/220.jpg',
        members: '555',
        category: 'Business --> Companies',
        tags: ['jenna-bush-hager', 'literature, and today'],
        rules:
          'A place where all Goodreads members can work together to improve the Goodreads book catalog.',
        website: 'http://www.goodreads.com',
        explanation:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        // createdAt: date,
        // updatedAt: date,
      },
      discussions: [],
    };
  },
  mounted() {
    axios
      .get(`/api/communities/${this.$route.params.slug}/discussions`, {
        headers: {
          'x-access-token': window.localStorage.getItem('x-access-token'),
        },
      })
      .then((res) => {
        this.discussions = res.data.discussions;
        console.log(this.discussions);
      });
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

<style lang="scss" scoped>
.community-detail {
  display: flex;
  .content {
    top: 50%;
    left: 50%;
    max-width: 920px;
    margin: auto;
  }
  #padding-content {
    padding: 8px;
  }
  .background {
    width: 100%;
    overflow: hidden;
  }
  #group {
    position: absolute;
    display: block;
    text-align: center;
    top: -50px;
    left: 28px;
    .afis {
      background:wheat;
      padding: 4px;
      border: .5px solid #ccc;
      border-radius: 4px;
      margin-bottom: 8px;
    }
  }
  #text {
    width: 20%;
    text-align: left;
  }
  #groupBox {
    text-align: left;
    font-size: 10px;
  }
  .detail {
    max-width: 100%;
  }
  .discussion {
    width: 50%;
    margin-left: 20%;
    font-weight: bolder;
    text-align: left;
  }
}
</style>
