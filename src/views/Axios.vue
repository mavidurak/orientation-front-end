<template>
<div>
  <div class="axios-get">
    <div class="container-py">
      <div class="row">
        <div class="col-md-6 ofsett-md-3">
          <div class="card">
            <div class="card-header">
              Kullanıcılar
            </div>
            <div class="card-body" style="owerflow:auto;height:450px">
              <ul class="list-group">
                <li v-for="(user,index) in users" :key="index" class="list-group-item">
                   {{user.id}}  {{user.name}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br><br>
  </div>
  <div id="axios-post">
    <form @submit.prevent="sendNewPost">
      <label for="title">İsim:</label>
      <input name="title" type="text" v-model="newPost.name" />
      <button type="submit">Kaydet</button>
    </form>
    <div v-if="sendNewPostResult">
      Kullanıcı Bilgileri
      <pre>İsim:{{ sendNewPostResult.name }}</pre>
    </div>
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">
        {{ index + 1 }} - {{ error.message }}
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Axios',
  data() {
    return {
      users: [],
      post: [],
      inProgress: false,
      errors: [],
      newPost: {
        name: '',
      },
      sendNewPostResult: null,
    };
  },
  methods: {
    getUsers() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          this.users = response.data;
        });
    },
    sendNewPost() {
      this.inProgress = true;
      axios
        .post('https://jsonplaceholder.typicode.com/users', this.newPost)
        .then((response) => {
          this.sendNewPostResult = response.data;
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
  created() {
    this.getUsers();
    this.sendNewPost();
  },
};
</script>
