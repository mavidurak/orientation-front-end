<template>
  <div class="reset-password">
    <div class="reset-password-in">
      <form>
        <h1>Reset Password</h1><br>
        <Password @password="emitPassword($event)" />
         <h6 class="control-warning" v-show="controlPass1">Required field</h6>
        <h6 class="control-warning" v-show="controlPass">
          The password must contain lowercase and uppercase letters and must
          consist of at least 8 characters.
        </h6>
        <PasswordAgain @passwordAgain="emitPasswordAgain($event)" />
         <h6 class="control-warning" v-show="controlPass2">
          Passwords must be same.
        </h6>
        <br />
      </form>
        <button
          type="submit"
          class="btn btn-info btn-lg mb-3"
          @click="resetPassword"
        >
          <i class="fas fa-lock"> Change Password</i>
        </button>
    </div>
  </div>
</template>
<script>
import Password from '@/components/Input/Password.vue';
import PasswordAgain from '@/components/Input/PasswordAgain.vue';

import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'ResetPassword',
  components: {
    Password,
    PasswordAgain,
  },
  data() {
    return {
      password: '',
      passwordAgain: '',
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
    resetPassword() {
      this.controlPass = false;
      this.controlPass1 = '';
      this.controlPass2 = '';

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
      if (this.controlPass1 === ''
      && this.controlPass2 === ''
      && this.controlPass === false) {
        axios.post(`api/authentication/reset-password?token=${this.$route.query.token}`, {
          password: this.password,
        })
          .then((res) => {
            if (res.status === 200) {
              swal({
                title: 'Your password changed successfully',
                icon: 'success',
              }).then(() => {
                this.$router.push('login');
              });
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              const message = err.response.data.errors
                .map((e) => e.message)
                .join('<br/>');
              const content = document.createElement('div');
              content.innerHTML = message;
              swal({
                title: 'Error!',
                content,
                icon: 'error',
              });
            }
          });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.reset-password {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: rgb(236, 235, 233);
}
.reset-password-in {
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
.h1 {
  color: #212529;
  margin-bottom: 40px;
}
.control-warning {
  color: rgba(255, 46, 67, 0.8);
}
</style>
