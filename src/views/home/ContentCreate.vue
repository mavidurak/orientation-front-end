<template>
  <div id="ContentCreate">
    <div class="container">
      <div class="labels">
        <div class="name">
          <label for="content-name">Name</label><br>
          <input
            type="text"
            v-model="name"
            class="text-box"
            maxlength="150"
            placeholder="Content name"
          />
        </div>
        <br />
        <div class="type">
          <label for="content-type">Type</label>
          <Multiselect
            class="text-box"
            :dataSource="types"
            aria-placeholder="Select a type"
            @getValue="update"
          />
        </div>
        <br />
        <div class="description">
          <label for="content-description">Description</label><br />
          <textarea
            v-model="description"
            class="text-box"
            maxlength="15000"
            placeholder="Content description"
            rows="5"
            cols="35"
          ></textarea>
        </div>
        <br /><br />
        <div class="image">
          <label for="content-img">Image</label><br />
          <input
            type="text"
            v-model="img"
            class="text-box"
            maxlength="150"
            placeholder="Image path"
          />
        </div><br>
        <div class="form-item">
          <input
            class="gr-button"
            type="submit"
            value="Create"
            @click="submit"
          /></div>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from '@/components/Multiselect.vue';
import { CONTENT_TYPES } from '@/constants';
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'ContentCreate',
  components: {
    Multiselect,
  },
  data() {
    return {
      name: null,
      description: null,
      img: null,
      type: null,
      types: [
        {
          name: CONTENT_TYPES.BOOK,
          code: CONTENT_TYPES.BOOK,
        },
        {
          name: CONTENT_TYPES.MOVIE,
          code: CONTENT_TYPES.MOVIE,
        },
        {
          name: CONTENT_TYPES.SERIES,
          code: CONTENT_TYPES.SERIES,
        },
        {
          name: CONTENT_TYPES.GAME,
          code: CONTENT_TYPES.GAME,
        },
      ],
    };
  },
  methods: {
    update(text) {
      this.type = text;
    },
    submit() {
      axios
        .post('/api/contents/',
          {
            name: this.name,
            type: this.type.code,
            description: this.description,
            image_path: this.img,
          },
          {
            headers: {
              'x-access-token': window.localStorage.getItem('x-access-token'),
            },
          })
        .then((res) => {
          if (res.status === 200) {
            swal({
              icon: 'success',
              text: `${this.content.name} review created successfully`,
            });
          }
        })
        .catch((err) => {
          const message = err.response.data.errors
            .map((e) => e.message);
          swal({
            icon: 'error',
            text: `${message}`,
          });
        });
    },
  },
};
</script>
<style lang="scss" scoped>
#ContentCreate .container {
  text-align: left;
}
.labels {
  padding-left: 325px;
}
.text-box {
  width: 380px;
}
</style>
