<template>
  <div align="center">
    <label class="typo__label">Tagging</label>
    <multiselect
      style="width: 100%"
      v-model="value"
      tag-placeholder="Add this as new tag"
      placeholder="Search or add a tag"
      label="name"
      track-by="code"
      :options="options"
      :multiple="true"
      :taggable="true"
      @tag="addTag"
      @input="$emit('getKey', value)"
    ></multiselect>
  </div>
</template>

<script>
import multiselect from 'vue-multiselect';

export default {
  name: 'Multiselect',
  props: ['dataSource', 'fields'],
  components: {
    multiselect,
  },
  data() {
    return {
      value: '',
      options: this.dataSource,
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>
