<template>
  <div class="Multiselect">
    <h1>This is an multiselect page</h1>
    <div class="multiselect">
      <Multiselect
        :dataSource="dataItem"
        :fields="dataFields"
        aria-placeholder="Select a platform"
        @getValue="update"
      />
    </div>
    <ul v-for="value in values" :key="value.name">
      <li>
        isim:{{ value.name }},
        code: {{ value.code }},
      </li>
    </ul>
  </div>
</template>

<script>
import Multiselect from '../components/Multiselect.vue';

export default {
  name: 'MultiselectView',
  components: {
    Multiselect,
  },
  data() {
    return {
      values: null,
      dataItem: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' },
      ],
      dataFields: { text: 'name', value: 'code' },
    };
  },
  methods: {
    update(text) {
      this.values = text;
    },
  },
};
</script>
