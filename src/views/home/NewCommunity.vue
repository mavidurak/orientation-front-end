<template>
  <div class="container text-left py-3">
    <div class="row">
      <div class="col-md-9">
        <form @submit.prevent="submitForm">
          <h2>Create a group</h2>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="first"
                  >Group Name <small class="required">*</small></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                  placeholder="Group Name"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Description <small class="required">*</small>
                </label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="5"
                  v-model="description"
                  placeholder="Decription"
                  maxlength="250"
                  required
                ></textarea>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Rules <small class="required">*</small>
                </label>
                <Tooltip
                  :text="{
                    header: 'What are rules?',
                    body: `Rules are guidelines
                  you would like members of the group to follow.
                  They will show up in the group home page as well as in a tooltip (like this one)
                  to people who comment for the first time in a group.`,
                  }"
                  position="top"
                >
                  <textarea
                    class="form-control"
                    id="rules"
                    rows="5"
                    v-model="rules"
                    placeholder="Rules"
                    required
                  ></textarea>
                </Tooltip>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="text">Tags</label>
              <Multiselect
                placeholder="Select or add tags about yours"
                :dataSource="allTags"
                :multiple="true"
                :addable="true"
                @getValue="updateTags"
              />
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="text"
                  >Website <small class="required">*</small>
                  <small class="text-muted">
                    Please include http://</small
                  ></label
                >
                <input
                  type="url"
                  class="form-control"
                  id="url"
                  placeholder="Website"
                  v-model="website"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="type" class="form-label"
                  >Type <small class="required">*</small></label
                >
                <Multiselect
                  placeholder="Select a content type"
                  :dataSource="allTypes"
                  @getValue="updateType"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="url"
                  >Image path <small class="required">*</small>
                  <small class="text-muted">
                    Please include http://</small
                  ></label
                >
                <input
                  type="url"
                  class="form-control"
                  id="url"
                  placeholder="Image path"
                  v-model="image_path"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-right">
              <button type="reset" class="btn btn-link mx-2 reset">
                Reset
              </button>
              <button type="submit" class="btn btn-success submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-3 info">
        <h6>About Moderating Groups</h6>
        <ul>
          <li>Only moderators can edit group settings.</li>
          <li>You can add and remove moderators on the members page.</li>
          <li>
            You can block users from joining this group on the block/unblock
            users page.
          </li>
          <li>
            For more information about being a moderator, read the moderator
            guidelines.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';

import Multiselect from '@/components/Multiselect.vue';
import Tooltip from '@/components/Tooltip.vue';

import { CONTENT_TYPES } from '@/constants';

export default {
  name: 'NewCommunity',
  components: {
    Multiselect,
    Tooltip,
  },
  data() {
    return {
      name: '',
      image_path: '',
      content_types: '',
      description: '',
      tags: [],
      website: '',
      rules: '',
      allTypes: [
        { name: CONTENT_TYPES.BOOK, code: CONTENT_TYPES.BOOK },
        { name: CONTENT_TYPES.GAME, code: CONTENT_TYPES.GAME },
        { name: CONTENT_TYPES.MOVIE, code: CONTENT_TYPES.MOVIE },
        { name: CONTENT_TYPES.SERIES, code: CONTENT_TYPES.SERIES },
      ],
      allTags: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' },
      ],
    };
  },
  methods: {
    updateTags(tags) {
      this.tags = tags.map((t) => t.name);
    },
    updateType(type) {
      this.content_types = type.name;
    },
    submitForm() {
      axios
        .post(
          '/api/communities',
          {
            name: this.name,
            image_path: this.image_path,
            content_types: this.content_types,
            description: this.description,
            website: this.website,
            rules: this.rules,
            tags: this.tags,
          },
          {
            headers: {
              'x-access-token': window.localStorage.getItem('x-access-token'),
            },
          },
        )
        .then((response) => {
          if (response.status === 200) {
            swal({
              title: 'Success!',
              text: 'Group created successfully',
              icon: 'success',
            }).then((click) => {
              if (click) {
                this.$router.push(`/communities/${response.data.community.slug}`);
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
};
</script>
<style lang="scss" scoped>
.info {
  font-size: 12px;
}
.required {
  color: red;
}
</style>
