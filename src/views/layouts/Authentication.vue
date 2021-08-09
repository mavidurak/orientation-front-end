<template>
  <v-main>
    <slot />
  </v-main>
</template>
<script>
import axios from 'axios';

export default {
  name: 'AuthenticationLayout',
  beforeCreate() {
    const token = localStorage.getItem('x-access-token');
    if (token) {
      axios
        .get('/api/authentication/me', {
          headers: {
            'x-access-token': token,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push('home');
          }
        });
    }
  },
};
</script>
