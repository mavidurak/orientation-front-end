<template>
  <div class="password">
    <input
      type="password"
      id="passwordAgain"
      @keyup="keyupEvent"
      v-model="passwordAgain"
      placeholder=" "
    />
    <label for="passwordAgain">Password Again</label>
    <span class="eye" @click="toggle()">
      <i id="hidePasswordAgain" class="fa fa-eye-slash"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'PasswordAgain',
  data() {
    return {
      passwordAgain: '',
    };
  },
  methods: {
    keyupEvent() {
      this.$emit('passwordAgain', this.passwordAgain);
    },
    toggle() {
      const passwordAgain = document.getElementById('passwordAgain');
      const hidePasswordAgain = document.getElementById('hidePasswordAgain');

      if (passwordAgain.type === 'password') {
        passwordAgain.type = 'text';
        hidePasswordAgain.setAttribute('class', 'fa fa-eye');
      } else {
        passwordAgain.type = 'password';
        hidePasswordAgain.setAttribute('class', 'fa fa-eye-slash');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
  margin-top: 15%;
}
label {
  left: 0;
  position: absolute;
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
.eye {
  position: absolute;
  right: 10px;
  transform: translateY(0.5em) scale(0.8);
}
#hidePasswordAgain {
  position: relative;
}
</style>
