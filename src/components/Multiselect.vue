<template>
  <div align="center">
    <multiselect
      v-model="value"
      tag-placeholder="Add this as new tag"
      placeholder="Search or add a tag"
      label="name"
      track-by="code"
      :options="options"
      :multiple="multiple"
      :taggable="true"
      @tag="addable ? addTag: () =>{} "
    ></multiselect>
  </div>
</template>

<script>
import multiselect from 'vue-multiselect';

export default {
  name: 'Multiselect',
  props: {
    dataSource: Array,
    multiple: Boolean, // default value: false
    addable: Boolean, // default value: false
  },
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
  updated() {
    this.$emit('getValue', this.value);
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
#typo_label{
  width: 100%;
}
</style>
