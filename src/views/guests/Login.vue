<template>
  <div class="login">
    <div class="loginin">
    <br>
    <h1 class="loginh1">Login</h1>
      <input
        type="text"
        id="username"
        name="username"
        v-model="username"
        placeholder="Username"
      />
      <br>
      <input
        type="password"
        id="password"
        name="password"
        v-model="password"
        placeholder="Password"
      />
    <br /><br />
    <button type="button" class="btn btn-success btn-lg mb-3 " @click="login()">
      Login
    </button>
    <br />
    <p class="areuforgotpassword"> <a class="areuforgotpaswordlink" href="../forgot-password">
    Are you forgot password?
    </a> </p>
    <p style="color: red; font-weight: bold">{{ alert }}</p>
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
            this.alert = 'Incorrect username or password';
          }
        }
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
.loginin{
  background: white;
  border: 1px hsl(0, 5%, 73%) solid;
  margin-left: 40%;
  margin-right: 40%;
  border-radius: 10px;
}
select {
  width: 15%;
  padding: 10px 18px;
  margin: 6px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.areuforgotpassword{
  color: #535455;
}
.loginh1{
  color: #212529;
}
.login{
  background-color: #f9f8f4;
}
.areuforgotpaswordlink:hover{
  text-decoration: none;
  color:red;
}
.areuforgotpaswordlink{
  color: #535455;
}
</style>
