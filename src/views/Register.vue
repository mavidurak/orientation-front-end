<template>
  <div class="register">
    <h1>Kayıt ol</h1>
    <input
      type="text"
      id="email"
      name="email"
      v-model="email"
      placeholder="E-mail Adresi"
    />
    <h6> {{controlemail}} </h6>
    <input
      type="text"
      id="username"
      name="username"
      v-model="username"
      placeholder="Kullanıcı Adı"
    />
    <h6> {{ controluser }} </h6>
    <input
      type="password"
      id="password"
      name="password"
      v-model="password"
      placeholder="Şifre"
    />
    <br/>
    <input
      type="password"
      id="passwordagain"
      name="passwordagain"
      v-model="passwordagain"
      placeholder="Onayla"
    />
    <h6> {{ controlpass }} </h6>
    <br /><br />
    <button type="button" class="btn btn-secondary btn-lg" @click="register()">
      Kayıt ol
    </button>
    <br /><br />
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
      passwordagain: '',
      controlemail: '',
      controluser: '',
      controlpass: '',
    };
  },
  methods: {
    register() {
      if (this.email === '') {
        this.controlemail = 'Lütfen E-mail alanını doldurun.';
      } else if (this.email.search('@') < 0) {
        this.controlemail = 'Bu geçerli bir E-mail değil!';
      } else {
        this.controlemail = '';
      }
      if (this.username === '') {
        this.controluser = 'Lütfen Kullanıcı Adı alanını boş geçmeyiniz';
      } else if (this.username.length < 5) {
        this.controluser = 'Lütfen kullanıcı adı alanını en az 5 karakter olacak şekilde belirleyin';
      } else {
        this.controluser = '';
      }
      if (this.password === '') {
        this.controlpass = 'Şifre alanını boş geçmeyiniz';
      } else if (this.password !== '') {
        if (this.password !== this.passwordagain) {
          this.controlpass = 'Şifreler aynı olmalıdır.';
        } else if (this.password.length < 8) {
          this.controlpass = 'Şifre 8 karakter veya daha büyük olmalıdır.';
        } else if (this.password.search(/[a-z]/) < 0) {
          this.controlpass = 'Şifre en az bir Küçük harf içermelidir.';
        } else if (this.password.search(/[A-Z]/) < 0) {
          this.controlpass = 'Şifre en az bir Büyük harf içermelidir.';
        } else if (this.password.search(/[0-9]/) < 0) {
          this.controlpass = 'Şifre en az bir rakam içermelidir.';
        } else {
          this.controlpass = '';
        }
      }
    },
  },
};
</script>
<style >
input,
select {
  width: 15%;
  padding: 10px 18px;
  margin: 6px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
