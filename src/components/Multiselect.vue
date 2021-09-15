<template>
  <div align="center">
    <multiselect
      v-model="values"
      tag-placeholder="Add this as new tag"
      :placeholder="placeholder"
      label="name"
      track-by="code"
      :options="options"
      :multiple="multiple"
      :taggable="addable"
      @tag="addTag"
    ></multiselect>
  </div>
</template>

<script>
import multiselect from 'vue-multiselect';

export default {
  name: 'Multiselect',
  props: {
    dataSource: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    addable: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    multiselect,
  },
  data() {
    return {
      values: [],
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
      this.values.push(tag);
    },
  },
  updated() {
    this.$emit('getValue', this.values);
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
#typo_label{
  width: 100%;
}
</style>
