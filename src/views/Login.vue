<template>
  <div class="login">
    <h1>Üye Girişi</h1>
      <input
        type="text"
        id="username"
        name="username"
        v-model="username"
        placeholder="Kullanıcı Adı"
      />
      <br>
      <input
        type="password"
        id="password"
        name="password"
        v-model="password"
        placeholder="Şifre"
      />
    <br /><br />
    <button type="button" class="btn btn-secondary btn-lg" @click="login()">
      Giriş
    </button>
    <br /><br />
    <p style="color: red; font-weight: bold">{{ alert }}</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      alert: '',
      username: '',
      password: '',
      users: [
        {
          username: 'deneme1',
          password: '147258369',
        },
        {
          username: 'deneme2',
          password: '369258147',
        },
      ],
    };
  },
  methods: {
    login() {
      if (this.username !== '' && this.password !== '') {
        for (let i = 0; i < this.users.length; i += 1) {
          if (
            this.username === this.users[i].username
            && this.password === this.users[i].password
          ) {
            this.$router.replace({ name: 'Home' });
          } else {
            this.alert = 'Kullanıcı adınızı veya şifrenizi hatalı girdiniz!';
          }
        }
      } else {
        this.alert = 'Lütfen kullanıcı adınızı ve şifrenizi giriniz!';
      }
    },
  },
};
</script>

<style>
input,
select {
  width: 14%;
  padding: 10px 18px;
  margin: 6px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
