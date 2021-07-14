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
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'Login',
  data() {
    return {
      alert: '',
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.username !== '' && this.password !== '') {
        axios.post('api/authentication/login', {
          username: this.username,
          password: this.password,
        })
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem('x-access-token', res.data.token.value);
              axios.get('api/authentication/me', {
                headers: {
                  'x-access-token': res.data.token.value,
                },
              });
              this.$router.push('/home');
              window.location.reload();
            }
          })
          .catch((err) => {
            const message = err.response.data.errors
              .map((e) => e.message);
            const content = document.createElement('div');
            content.innerHTML = message;
            swal({
              title: 'Validation Failed!',
              content,
              icon: 'error',
            });
          });
      } else {
        this.alert = 'Please enter your username and password';
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
