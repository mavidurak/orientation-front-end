<template>
  <div class="register">
    <div class="register-in">
      <form>
        <h1 class="register-h1">Let's Start!</h1>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder=" "
          require
        />
        <label for="name">Name Surname</label><br />
        <h6 class="control-warning">{{ controlName }}</h6>
        <input
          type="text"
          id="email"
          v-model="email"
          placeholder=" "
          require
        />
        <label for="email">Email</label><br />
        <h6 class="control-warning">{{ controlEmail }}</h6>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder=" "
          require
        />
        <label for="username">Username</label><br />
        <h6 class="control-warning">{{ controlUser }}</h6>
        <Password @password="emitPassword($event)" />
        <br />
        <h6 class="control-warning" v-show="controlPass1">Required field</h6>
        <h6 class="control-warning" v-show="controlPass">
          The password must contain lowercase and uppercase letters and must
          consist of at least 8 characters.
        </h6>
        <PasswordAgain @passwordAgain="emitPasswordAgain($event)" />
      </form>
        <h6 class="control-warning" v-show="controlPass2">
          Passwords must be same.
        </h6>
        <br />
        <button
          type="submit"
          class="btn btn-info btn-lg mb-3"
          @click="register"
        >
          <i class="fas fa-user-plus"> Sign Up</i>
        </button>
        <br /><br />
        <p class="already-register">
          If you have already registered
          <router-link to="/login">Sign In</router-link>
        </p>
    </div>
  </div>
</template>
<script>
import Password from '@/components/Input/Password.vue';
import PasswordAgain from '@/components/Input/PasswordAgain.vue';

export default {
  name: 'Register',
  components: {
    Password,
    PasswordAgain,
  },
  data() {
    return {
      name: '',
      email: '',
      username: '',
      password: '',
      passwordAgain: '',
      controlName: '',
      controlEmail: '',
      controlUser: '',
      controlPass: '',
      controlPass1: '',
      controlPass2: '',
    };
  },
  methods: {
    emitPassword(password) {
      this.password = password;
    },
    emitPasswordAgain(passwordAgain) {
      this.passwordAgain = passwordAgain;
    },
    register() {
      this.controlPass = false;
      this.controlPass1 = '';
      this.controlPass2 = '';
      this.controlUser = '';
      this.controlEmail = '';
      if (this.name === '') {
        this.controlName = 'Required field';
      }
      if (this.email === '') {
        this.controlEmail = 'Required field';
      } else if (this.email.search('@') < 0) {
        this.controlEmail = 'Not valid';
      }
      if (this.username === '') {
        this.controlUser = 'Required field';
      } else if (this.username.length < 3) {
        this.controlUser = 'Please specify the user name field to be at least 3 characters';
      }
      if (this.password === '') {
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
    },
  },
};
</script>
<style lang="scss" scoped>
.register {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: rgb(236, 235, 233);
}
.register-in {
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
input:focus {
  border-bottom: 2px solid rgb(8, 84, 114);
}
form {
  position: relative;
}
label {
  position: absolute;
  left: 0;
  color: rgb(68, 65, 65);
  transform-origin: 0 0;
  transition: transform 0.2s ease-in-out;
  font-size: 16px;
}
input:focus + label,
input:not(:placeholder-shown) + label {
  transform: translateY(-0.5em) scale(0.8);
  color: rgb(8, 84, 114);
}
.register-h1 {
  color: #212529;
  margin-bottom: 40px;
}
.control-warning {
  color: rgba(255, 46, 67, 0.8);
}
.already-register {
  color: #535455;
  font-size: 16px;
}
</style>
