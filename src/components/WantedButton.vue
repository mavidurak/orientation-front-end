<template>
  <div class="wanted-button">
    <div class="dropdown"  @change="onChange($event)">
        <select
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
          <option :value="option" v-for="option in options" :key="option">
           {{ option }}
          </option>
        </select>
    </div>
  </div>
</template>
<script>
import { CONTENT_TYPES, WANTED_STATUS } from '@/constants';

export default {
  name: 'WantedButton',
  props: {
    contentType: String,
  },
  data() {
    return {
      options: [],
    };
  },
  methods: {
    onChange(event) {
      this.$emit('wantedStatus', event.target.value);
    },
  },
  mounted() {
    if (Object.values(CONTENT_TYPES).indexOf(this.contentType) !== -1) {
      this.options = Object.values(WANTED_STATUS[this.contentType]);
    }
  },
};
</script>
<style lang="scss">
</style>
