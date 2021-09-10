<template>
  <div class="container text-left py-3">
    <div class="row">
      <div class="col-md-9">
        <h2>Post a New Discussion Topic</h2>
        <img
          :src="community.image.path"
          :alt="community.name"
        />
        <lable id="communityName">{{ community.name }}</lable
        ><br />
        <div class="form-group">
          <label>Header <b>*</b></label>
          <input
            type="text"
            class="form-control"
            id="header"
            v-model="header"
            placeholder="Discussion Header"
            required
          /><br />
          <Tooltip
            :text="{
              header: 'Group Rules',
              body: community.rules,
            }"
            position="top"
          >
            <label> Text <b>*</b></label>
            <vue-simplemde
              v-model="text"
              ref="markdownEditor"
              id="vue-simplemde"
            />
          </Tooltip>
          <input type="checkbox" v-model="isPrivate" />
          <label>Is private</label><br /><br />
          <button @click="shareDiscussion" class="btn btn-outline-success">
            Share
          </button>
        </div>
      </div>
      <div class="col-md-3 info">
        <h6>RULES FOR {{ community.name }}</h6>
        <ul>
          <li>{{ community.rules }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import VueSimplemde from 'vue-simplemde';

import Tooltip from '@/components/Tooltip.vue';

export default {
  name: 'NewDiscussion',
  components: {
    Tooltip,
    VueSimplemde,
  },
  data() {
    return {
      header: '',
      text: '',
      isPrivate: false,
      discussion_id: '',
      community: {},
    };
  },
  methods: {
    shareDiscussion() {
      axios
        .post(
          '/api/discussions',
          {
            header: this.header,
            text: this.text,
            isPrivate: this.is_private,
            community_id: this.community.id,
          },
          {
            headers: {
              'x-access-token': window.localStorage.getItem('x-access-token'),
            },
          },
        )
        .then((response) => {
          if (response.status === 201) {
            this.discussion_id = response.data.discussion.id;
            swal({
              title: 'Success!',
              text: 'Discussion created successfully',
              icon: 'success',
            }).then((click) => {
              if (click) {
                this.$router.push(`/communities/${this.community.slug}/${this.discussion_id}`);
              }
            });
          }
        })
        .catch((error) => {
          const message = error.response.data.errors.map((e) => e.message);
          swal({
            title: 'Error!',
            text: `${message}`,
            icon: 'error',
          });
        });
    },
  },
  mounted() {
    axios
      .get(`/api/communities/${this.$route.params.communitySlug}`, {
        headers: {
          'x-access-token': window.localStorage.getItem('x-access-token'),
        },
      })
      .then((res) => {
        this.community = res.data;
      });
  },
};
</script>
<style lang='scss' scoped>
b {
  color: rgb(201, 13, 13);
}
h2 {
  margin-bottom: 30px;
}
button {
  margin-bottom: 20px;
}
.form-group {
  margin-top: 20px;
}
#communityName {
  margin-left: 15px;
  font-size: 16px;
}
img {
width: 100px;
 height: 80px;
}
</style>
