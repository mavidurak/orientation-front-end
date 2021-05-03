<template>
  <div class="register">
    <div class="registerdiv">
    <br>
    <h1 class="registerh1"> Kayıt ol</h1>
    <input
      type="text"
      id="email"
      name="email"
      v-model="email"
      placeholder="E-mail Adresi"
    />
    <h6 id="controlwarning" > {{controlEmail}} </h6>
    <input
      type="text"
      id="username"
      name="username"
      v-model="username"
      placeholder="Kullanıcı Adı"
    />
    <h6 id="controlwarning"> {{ controlUser }} </h6>
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
      id="passwordAgain"
      name="passwordAgain"
      v-model="passwordAgain"
      placeholder="Onayla"
    />
    <h6 id="controlwarning" v-html="controlPass1"></h6>
    <h6 id="controlwarning" v-html="controlPass2"></h6>
    <h6 id="controlwarning" v-html="controlPass3"></h6>
    <h6 id="controlwarning" v-html="controlPass4"></h6>
    <h6 id="controlwarning" v-html="controlPass5"></h6>
    <h6 id="controlwarning" v-html="controlPass6"></h6>
    <br /><br />
    <button type="button" class="btn btn-secondary btn-lg" @click="register">
      Kayıt ol
    </button>
    <p class="alreadyregister">Zaten kayıt olduysanız <a href="../login">Giriş Yap</a> </p>
    <br /><br />
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
      controlPass1: '',
      controlPass2: '',
      controlPass3: '',
      controlPass4: '',
      controlPass5: '',
      controlPass6: '',
    };
  },
  methods: {
    register() {
      this.controlPass1 = '';
      this.controlPass2 = '';
      this.controlPass3 = '';
      this.controlPass4 = '';
      this.controlPass5 = '';
      this.controlPass6 = '';
      this.controlUser = '';
      this.controlEmail = '';
      if (this.email === '') {
        this.controlEmail = 'Lütfen E-mail alanını doldurun.';
      } else if (this.email.search('@') < 0) {
        this.controlEmail = 'Bu geçerli bir E-mail değil!';
      } else {
        this.controlEmail = '';
      }
      if (this.username === '') {
        this.controlUser = 'Lütfen Kullanıcı Adı alanını boş geçmeyiniz.';
      } else if (this.username.length < 3) {
        this.controlUser = 'Lütfen kullanıcı adı alanını en az 3 karakter olacak şekilde belirleyin.';
      } else {
        this.controlUser = '';
      } if (this.password === '') {
        this.controlPass1 += 'Şifre alanını boş bırakmayınız.';
      } else {
        if (this.password !== this.passwordAgain) {
          this.controlPass2 += 'Şifreler aynı olmalıdır.';
        } if (this.password.length < 8) {
          this.controlPass3 += 'Şifre 8 karakter veya daha büyük olmalıdır.';
        } if (this.password.search(/[a-z]/) < 0) {
          this.controlPass4 += 'Şifre en az bir Küçük harf içermelidir. ';
        } if (this.password.search(/[A-Z]/) < 0) {
          this.controlPass5 += 'Şifre en az bir Büyük harf içermelidir. ';
        } if (this.password.search(/[0-9]/) < 0) {
          this.controlPass6 += 'Şifre en az bir rakam içermelidir.';
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
.register{
  background: #f9f8f4;
}
.registerdiv{
  background: #3E5A5B;
  margin-left:40%;
  margin-right:40%;
}
#controlwarning{
  color:rgba(255,46,67,0.8);
}
.alreadyregister{
  color: #f9f8f4;
}
.registerh1{
  color:#f9f8f4;
}
</style>
