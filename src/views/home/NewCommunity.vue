<template>
  <div class="container text-left py-3">
    <div class="row">
      <div class="col-md-9">
        <form @submit.prevent="submitForm">
          <h2>Create a group</h2>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="first">Group Name *</label>
                <input type="text" class="form-control" id="name"
                v-model="name" placeholder="Group Name" required>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Description *</label>
                <textarea class="form-control" id="description" rows="5"
                v-model="description" placeholder="Decription" maxlength="250" required></textarea>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Rules *</label>
                <textarea class="form-control" id="rules" rows="5"
                v-model="rules" data-placement="top" data-toggle="tooltip" placeholder="Rules"
                data-html="true" :title="tooltip()" required></textarea>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <Multiselect
                  :dataSource="dataItem"
                  aria-placeholder="Select a platform"
                  @getValue="update"
                />
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="text">Website * <small class="text-muted"> Please include http://</small></label>
                <input type="url" class="form-control" id="url" placeholder="Website"
                v-model="website" required>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="type" class="form-label">Type *</label>
                <select class="form-control" id="type"
                v-model="content_types" required>
                  <option>{{CONTENT_TYPES.GAME}}</option>
                  <option>{{CONTENT_TYPES.MOVIE}}</option>
                  <option>{{CONTENT_TYPES.BOOK}}</option>
                  <option>{{CONTENT_TYPES.SERIES}}</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="url">Image path * <small class="text-muted"> Please include http://</small></label>
                <input type="url" class="form-control" id="url" placeholder="Image path"
                 v-model="image_path" required>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-right">
              <button type="reset" class="btn btn-link mx-2 reset">Reset</button>
              <button type="submit" class="btn btn-success submit">Submit</button>
            </div>
          </div>
        </form>
    </div>
        <div class="col-md-3 info">
          <h6>About Moderating Groups</h6>
          <ul>
            <li>Only moderators can edit group settings.</li>
            <li>You can add and remove moderators on the members page.</li>
            <li>You can block users from joining this group on the block/unblock users page.</li>
            <li>For more information about being a moderator, read the moderator guidelines.</li>
          </ul>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
import $ from 'jquery';

import Multiselect from '@/components/Multiselect.vue';

import { CONTENT_TYPES } from '@/constants';

export default {
  name: 'NewCommunity',
  components: {
    Multiselect,
  },
  data() {
    return {
      organizers: [],
      members: [],
      name: '',
      image_path: '',
      content_types: '',
      description: '',
      tags: [],
      website: '',
      rules: '',
      CONTENT_TYPES,
      dataItem: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' },
      ],
      community_id: '',
    };
  },
  methods: {
    submitForm() {
      axios.post('/api/communities', {
        name: this.name,
        image_path: this.image_path,
        content_types: this.content_types,
        description: this.description,
        website: this.website,
        rules: this.rules,
        tags: this.tags.map((tag) => tag.name),
      }, {
        headers: {
          'x-access-token': window.localStorage.getItem('x-access-token'),
        },
      })
        .then((response) => {
          if (response.status === 200) {
            this.community_id = response.data.community.id;
            swal({
              title: 'Success!',
              text: 'Group created successfully',
              icon: 'success',
            })
              .then((click) => {
                if (click) {
                  this.$router.push(`/communities/${this.community_id}`);
                }
              });
          }
        })
        .catch((error) => {
          const message = error.response.data.errors
            .map((e) => e.message);
          swal({
            title: 'Error!',
            text: `${message}`,
            icon: 'error',
          });
        });
    },
    update(text) {
      this.tags = text;
    },
    tooltip() {
      return `
      <div class="text-left" id="tooltip">
      <div class="head"><h6>What are rules?</h6></div>
      <div class="text"><p>Rules are guidelines you would like members of the group to follow.
        They will show up in the group home page as well as in a tooltip (like this one)
        to people who comment for the first time in a group. </p></div>`;
    },
  },
  mounted() {
    $(document).ready(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },
};
</script>
<style lang="scss">
.info{
  font-size: 12px;
}
.tooltip {
    background-color: #BCBEC2;
    color: black;
    padding: 6px;
    border-radius: 10px;
  }
  .tooltip-inner {
    background-color: #f4f4f4;
    color: black;
    max-width: 300px;
    max-height: 200px;
  }
  .reset{
    color: #525252;
    text-decoration: underline;
  }
  .arrow{
    border-color: blue;
  }
</style>
