<template>
  <div class="register">
    <div class="register-div">
      <br />
      <h1 class="register-h1">Register</h1>
      <input
        type="text"
        id="email"
        name="email"
        v-model="email"
        placeholder="E-mail"
        require
      />
      <h6 class="control-warning">{{ controlEmail }}</h6>
      <input
        type="text"
        id="username"
        name="username"
        v-model="username"
        placeholder="Username"
        require
      />
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="name"
        require
      />
      <h6 class="control-warning">{{ controlUser }}</h6>
      <input
        type="password"
        id="password"
        name="password"
        v-model="password"
        placeholder="Password"
        require
      />
      <br />
      <h6 class="control-warning" v-show="controlPass1">Required field</h6>
      <h6 class="control-warning" v-show="controlPass">
        The password must contain lowercase and uppercase letters and must
        consist of at least 8 characters.
      </h6>
      <input
        type="password"
        id="passwordAgain"
        name="passwordAgain"
        v-model="passwordAgain"
        placeholder="Password again"
        require
      />
      <h6 class="control-warning" v-show="controlPass2">
        Passwords must be same.
      </h6>
      <br />
      <button
        type="submit"
        class="btn btn-success btn-lg mb-3"
        @click="register"
      >
        Register
      </button>
      <br />
      <p class="already-register">
        If you have already registered
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      username: '',
      name: '',
      password: '',
      passwordAgain: '',
      controlEmail: '',
      controlUser: '',
      controlPass: '',
      controlPass1: '',
      controlPass2: '',
    };
  },
  methods: {
    register() {
      this.controlPass = false;
      this.controlPass1 = '';
      this.controlPass2 = '';
      this.controlUser = '';
      this.controlEmail = '';
      if (this.email === '') {
        this.controlEmail = 'Required field';
      } else if (this.email.search('@') < 0) {
        this.controlEmail = 'Not valid';
      } if (this.username === '') {
        this.controlUser = 'Required field';
      } else if (this.username.length < 3) {
        this.controlUser = 'Please specify the user name field to be at least 3 characters';
      } if (this.password === '') {
        this.controlPass1 += 'Required field';
      } else {
        if (this.password !== this.passwordAgain) {
          this.controlPass2 += 'Passwords must be same.';
        }
        if (
          this.password.length < 8
          || this.password.search(/[a-z]/) < 0
          || this.password.search(/[A-Z]/) < 0
          || this.password.search(/[0-9]/) < 0
        ) {
          this.controlPass = true;
        }
      }
      if (this.controlPass1 === ''
      && this.controlPass2 === ''
      && this.controlUser === ''
      && this.controlEmail === ''
      && this.controlPass === false) {
        Axios.post('api/authentication/register/', {
          username: this.username,
          password: this.password,
          email: this.email,
          name: this.name,
        })
          .then((response) => {
            if (response.status === 201) {
              this.$router.push('/login');
            }
          })
          .catch((error) => {
            console.log(error.response.data.errors);
          });
        swal('Good job!', 'You clicked the button!', 'success');
      }
    },
  },
};
</script>
<style lang="scss">
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
.register {
  background: #f9f8f4;
}
.register-div {
  background: white;
  border: 1px hsl(0, 5%, 73%) solid;
  margin-left: 40%;
  margin-right: 40%;
  border-radius: 10px;
}
.control-warning {
  color: rgba(255, 46, 67, 0.8);
}
.already-register {
  color: #535455;
}
.register-h1 {
  color: #212529;
}
</style>
