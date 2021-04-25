<template>
  <div class="wanted-button">
    <div class="btn-group">
      <button type="button" class="btn" id="selected">{{ selected }}</button>
      <button
        type="button"
        id="toggle"
        class="btn dropdown-toggle dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a
          class="dropdown-item"
          @click="select(option)"
          :value="option" v-for="option in options"
          :key="option"
        >
          {{ option }}
        </a>
        <div class="dropdown-divider"></div>
        <a
          :class="{
            'dropdown-item': true,
            'add': !selectedStatus,
            'remove': selectedStatus
          }"
          @click="selectedStatus ? removeWantedList() : addWantedList()"
        >
          {{ selectedStatus ? 'Remove Shelf' : 'Add Shelf' }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { CONTENT_TYPES, WANTED_STATUS } from '@/constants';

export default {
  name: 'WantedButton',
  props: {
    contentType: String,
    selectedStatus: String,
  },
  data() {
    return {
      options: [],
      selected: '',
    };
  },
  methods: {
    /* eslint-disable prefer-destructuring */
    select(value) {
      this.selected = value;
      this.$emit('wantedStatus', value);
    },
    addWantedList() {
      this.selected = 'Added to Shelf';
    },
    removeWantedList() {
      this.selected = 'Removed';

      setTimeout(() => {
        this.selected = this.options[0];
        this.selectedStatus = null;
      }, 1300);
    },
  },
  mounted() {
    if (Object.values(CONTENT_TYPES).indexOf(this.contentType) !== -1) {
      this.options = Object.values(WANTED_STATUS[this.contentType]);
      if (this.selectedStatus) {
        this.selected = this.selectedStatus;
      } else {
        this.selected = this.options[0];
      }
    }
  },
};
</script>
<style lang="scss" scoped>
$red: #D73A49;
$green: #409D69;
$text-color: #181818;
$status-background: #F2F2F2;
$selected-border: #e5e5e5;

#toggle{
  background: $green;
  color: white;
}

.btn-group{
  height: 32px;
}

#selected{
  width: 140px;
  padding: 0 .7em;
  background: $status-background;
  color: $text-color;
  font-size: 13px;
  font-weight: bold;
  border: 1px solid $selected-border;
}

.add{
  color: $green;
  transition: background .3s;
  font-weight: bold;

  &:hover{
    color: white;
    background: $green;
  }
}

.remove{
  color: $red;
  transition: background .3s;
  font-weight: bold;

  &:hover{
    color: white;
    background:$red;
  }
}

.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}
.dropdown-menu{
  padding: 0;
  font-size: 13px;
}
.dropdown-divider{
  margin: 0;
}
</style>
