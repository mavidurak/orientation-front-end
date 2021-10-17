<template>
  <div>
    <div class="profile container">
      <div class="row">
        <div class="col-sm-8">
          <div class="card">
            <div class="card-body row">
              <div class="col-4">
                <div class="avatar">
                  <Gravatar :email="user.email" id="gravatar-user" :size=120 />
                </div>
              </div>
              <div class="col-md-8">
                <div class="row">
                  <div class="col">
                    <div class="name">
                      <span>
                        {{ user.name }}
                      </span>
                      <hr />
                    </div>
                  </div>
                </div>
                <div class="row" id="about">
                  <div class="col">
                    <div>
                      <h6>Joined in {{ user.createdAt.slice(0, 10) }}</h6>
                    </div>
                    <div>
                      <i class="fas fa-fw fa-envelope"></i>{{ user.email }}
                    </div>
                    <div style="margin-top: 10px">
                      <a href="#">0 ratings (0.0 avg)</a>
                      <a href="#"> · 0 reviews</a>
                      <a href="#"> · more photos (0)</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="info">
              <div class="row">
                <div class="col">
                  <span>{{ user.name.split(" ")[0] }}'s Reviews</span>
                  <hr />
                  <div>TODO</div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <span>{{ user.name.split(" ")[0] }}'s Groups</span>
                  <hr />
                  <div>TODO</div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <span>{{ user.name.split(" ")[0] }}'s Friends</span>
                  <hr />
                  <p v-if="friends.length === 0">no friends yet</p>
                  <div
                    v-else
                    v-for="friend in friends"
                    :key="friend.id"
                    id="friend"
                  >
                    <div class="friend" @click="$router.push(`/user/${friend.username}`);"
                    v-on:click="refresh">
                      <Gravatar :email="friend.email" id="gravatar-friend" :size=20 />
                      {{ friend.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Gravatar from 'vue-gravatar';

export default {
  name: 'Profile',
  data() {
    return {
      user: null,
      friends: null,
    };
  },
  components: {
    Gravatar,
  },
  mounted() {
    axios
      .get(`/api/user/${this.$route.params.username}`, {
        headers: {
          'x-access-token': window.localStorage.getItem('x-access-token'),
        },
      })
      .then((res) => {
        this.user = res.data.user;
        this.friends = res.data.friends;
      });
  },
  methods: {
    refresh() {
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  span {
    font-weight: bold;
  }
  hr {
    margin: 0;
  }
  .card {
    padding: 15px;
    text-align: left;
    .avatar {
      text-align: center;
      #gravatar-user {
      border-radius: 50%;
      border: 1px solid #dfdfdf;
      }
    }
    .name {
      margin-top: 10px;
      font-size: 20px;
    }
    .info {
      float: left;
      margin: 10px;
      font-size: 16px;
      .row {
        p {
          margin-left: 10px;
        }
      }
    }
    #about {
      margin-top: 10px;
      font-size: 14px;
    }
  }
  .friend {
    margin-left: 10px;
    #gravatar-friend {
      border-radius: 50%;
      border: 1px solid #dfdfdf;
    }
  }
}
</style>
