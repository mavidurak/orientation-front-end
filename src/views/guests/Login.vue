<template>
  <div class="login">
    <div class="login-in">
      <h1 class="login-h1" style="margin-top: 5%">WELCOME</h1>
      <form>
        <input
          type="text"
          id="username"
          name="username"
          v-model="username"
          placeholder=" "
        />
        <label for="email">Username</label>
        <Password @password="password = $event" />
      </form>
      <p class="warning-login">{{ alert }}</p>
      <button type="submit" class="btn btn-info btn-lg mb-3" @click="login()">
        <i class="fas fa-sign-in-alt"> Sign In</i>
      </button>
      <br /><br />
      <p>
        If you are not registered
        <router-link to="/register">Sign Up</router-link>
      </p>
      <router-link to="/forgot-password">Forgotten your password?</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import Password from '@/components/Input/Password.vue';

export default {
  name: 'Login',
  components: {
    Password,
  },
  data() {
    return {
      alert: '',
      username: '',
      password: '',
    };
  },
  mounted() {
    axios
      .get('api/authentication/me', {
        headers: {
          'x-access-token': localStorage.getItem('x-access-token'),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          this.$router.push('/home');
        }
      });
  },
  methods: {
    login() {
      if (this.username !== '' && this.password !== '') {
        axios
          .post('api/authentication/login', {
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
            const message = err.response.data.errors.map((e) => e.message);
            const content = document.createElement('div');
            content.innerHTML = message;
            swal({
              title: 'Validation Failed!',
              content,
              icon: 'error',
            });
          });
      } else {
        this.alert = 'Please enter all fields!';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: rgb(236, 235, 233);
}
.login-in {
  padding: 40px 50px;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
  background-color: #fff;
}
input {
  height: 30px;
  width: 300px;
  align-items: center;
  padding: 10px;
  margin-bottom: 30px;
  margin-top: 10px;
  border: none;
  border-bottom: 1px solid rgb(187, 179, 212);
  font-size: 1em;
  outline: none;
}
form {
  position: relative;
  margin-top: 15%;
}
label {
  position: absolute;
  left: 0;
  color: rgb(68, 65, 65);
  transform-origin: 0 0;
  transition: transform 0.2s ease-in-out;
}
input:focus + label,
input:not(:placeholder-shown) + label {
  transform: translateY(-0.5em) scale(0.8);
  color: rgb(8, 84, 114);
}
input:focus {
  border-bottom: 2px solid rgb(8, 84, 114);
}
.login-h1 {
  color: #212529;
}
.warning-login {
  color: rgba(255, 46, 67, 0.8);
}
</style>
