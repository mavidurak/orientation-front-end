<template>
  <div class="Multiselect">
    <h1>This is an multiselect page</h1>
    <div class="multiselect">
      <Multiselect
      :dataSource='dataItem'
      :fields='dataFields'
      aria-placeholder="Select a platform"
       />
    </div>
     <pre class="language-json"><code>{{ dataItem  }}</code></pre>
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
      dataItem: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' },
      ],
      dataFields: { text: 'name', value: 'code' },
    };
  },
};
</script>
