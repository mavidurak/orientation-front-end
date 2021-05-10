<template>
  <div class="login">
    <div class="login-in">
      <br />
      <h1 class="login-h1">Login</h1>
      <input
        type="text"
        id="username"
        name="username"
        v-model="username"
        placeholder="Username"
        require
      />
      <br />
      <input
        type="password"
        id="password"
        name="password"
        v-model="password"
        placeholder="Password"
        require
      />
      <br />
      <p class="warning-login">{{ alert }}</p>
      <button
        type="submit"
        class="btn btn-success btn-lg mb-3"
        @click="login()"
      >
        Login
      </button>
      <br />
      <router-link to="/forgot-password">Are you forgot password?</router-link>
    </div>
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
            this.alert = 'Incorrect username or password.';
          }
        }
      } else {
        this.alert = 'Please enter your username and password.';
      }
    },
  },
};
</script>

<style>
input {
  width: 80%;
  align-items: center;
  padding: 10px 17px;
  margin: 10px 0px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.login-in {
  background: white;
  border: 1px hsl(0, 5%, 73%) solid;
  margin-left: 40%;
  margin-right: 40%;
  border-radius: 10px;
}
.login-h1 {
  color: #212529;
}
.login {
  background-color: #f9f8f4;
}
.warning-login {
  color: rgba(255, 46, 67, 0.8);
}
</style>
