<template>
  <div class="register">
    <div class="registerdiv">
      <br />
      <h1 class="registerh1">Register</h1>
      <input
        type="text"
        id="email"
        name="email"
        v-model="email"
        placeholder="E-mail"
      />
      <h6 id="controlwarning">{{ controlEmail }}</h6>
      <input
        type="text"
        id="username"
        name="username"
        v-model="username"
        placeholder="Username"
      />
      <h6 id="controlwarning">{{ controlUser }}</h6>
      <input
        type="password"
        id="password"
        name="password"
        v-model="password"
        placeholder="Password"
      />
      <br />
      <h6 id="controlwarning" v-show="controlPass">
        The password must contain lowercase and uppercase letters
        and must consist of at least 8 characters.
      </h6>
      <input
        type="password"
        id="passwordAgain"
        name="passwordAgain"
        v-model="passwordAgain"
        placeholder="Password again"
      />
      <h6 id="controlwarning" v-html="controlPass2"></h6>
      <h6 id="controlwarning" v-html="controlPass3"></h6>
      <br />
      <button
        type="button"
        class="btn btn-success btn-lg mb-3"
        @click="register"
      >
        Register
      </button>
      <br />
      <p class="alreadyregister">
        If you have already registered
        <a class="alreadyregisterlink" href="../login"> Login</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      nickname: '',
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
      this.controlPass2 = '';
      this.controlPass3 = '';
      this.controlUser = '';
      this.controlEmail = '';
      if (this.email === '') {
        this.controlEmail = 'Required field';
      } else if (this.email.search('@') < 0) {
        this.controlEmail = 'Not valid';
      } else {
        this.controlEmail = '';
      }
      if (this.username === '') {
        this.controlUser = 'Required field';
      } else if (this.username.length < 3) {
        this.controlUser = 'Please specify the user name field to be at least 3 characters';
      } else {
        this.controlUser = '';
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
.registerdiv {
  background: white;
  border: 1px hsl(0, 5%, 73%) solid;
  margin-left: 40%;
  margin-right: 40%;
  border-radius: 10px;
}
#controlwarning {
  color: rgba(255, 46, 67, 0.8);
}
.alreadyregister {
  color: #535455;
}
.registerh1 {
  color: #212529;
}
.alreadyregisterlink {
  color: #0d5980;
}
.alreadyregisterlink:hover {
  text-decoration: none;
  color: red;
}
</style>
