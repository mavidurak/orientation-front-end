<template>
  <div>
    <div class="dropdown"  @change="onChange($event)">
        <select
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
         <option :value="option.text" v-for="option in options" :key="option">
           {{option.text}}</option>
        </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WantedButton',
  data() {
    return {
      options: [
        { text: 'Want To Read', value: 1 },
        { text: 'Currently Reading', value: 2 },
        { text: 'Read', value: 3 },
        { text: 'Add Shelf', value: 4 },
      ],
    };
  },
  methods: {
    onChange(event) {
      this.$emit('wantedStatus', event.target.value);
    },
  },
};
</script>
