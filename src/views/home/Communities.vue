<template>
  <div class="communities">
    <div class="input">
      <h1 id="grup">Gruplar</h1>
      <input
        type="text"
        v-model="grup"
        id="grup-ismi"
        placeholder="Grup ismi"
        @input="filtred"
      />
    </div>
    <div v-for="search in filtred" :key="search.id"></div>
    <CommunityList :communities="communitiesFilter" />
  </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
import CommunityList from '@/components/Community/CommunityList.vue';

export default {
  name: 'Communities',
  components: {
    CommunityList,
  },

  data() {
    return {
      grup: '',
      value: null,
      community: {
        id: Number,
        name: String,
        image: String,
        members: Number,
        createdAt: Date,
        updatedAt: Date,
        detail: String,
      },
      communitiesFilter: [],
      communities: [],
    };
  },
  methods: {
    filtred() {
      this.communitiesFilter = this.communities
        .filter((search) => search.name.toLowerCase().includes(this.grup.toLowerCase()));
    },
  },
  mounted() {
    axios.get('/api/communities/', {
      headers: {
        'x-access-token': window.localStorage.getItem('x-access-token'),
      },
    }).then((response) => {
      this.communities = response.data.communities;
      this.communitiesFilter = this.communities;
    })
      .catch((err) => {
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
      });
  },
};
</script>

<style lang="scss">
.communities {
  #grup {
    margin-bottom: 20px;
    position: relative;
    right: 240px;
  }
  .input {
    margin: 10px;
    #grup-ismi {
      width: 500px;
      height: 35px;
      border-radius: 5px;
      border: 1px solid grey;
      padding: 10px;
      margin-right: 10px;
    }
  }
}
</style>
