<template>
<div>

     <div class="container">
      <img class="img-fluid icon" :src="content.image.path" :alt="content.image.name"
      data-placement="right" data-toggle="tooltip" data-html="true" :title="tooltip(content)"/>
    </div>
</div>
</template>
<script>
import $ from 'jquery';

export default {
  name: 'ContentIcon',
  props: {
    content: Object,
  },
  methods: {
    tooltip(content) {
      return `
      <div id="tooltip" class="text-left">
        <div>
        <h4> <b>${content.name}</b></h4>
        <span class="badge badge-info"> ${content.type}</span> 
        <span>Views: ${content.views}</span>
        <span>Rate: ${content.rate}</span>
            <p>${content.description}</p> 
        </div>
      </div>`;
    },
  },
  mounted() {
    $(document).ready(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },
};
</script>
<style lang="scss" >
.icon{
  height: 180px;
  width: 130px;
  padding-bottom: 10px;
}
span{
    padding-left: 10px;
  }
   div{
     display: inline-block;
   }
  .tooltip {
    background-color: #DADDE4;
    color: black;
    padding: 10px;
    border-radius: 10px;
  }
  .tooltip-inner {
    background-color: #f4f4f4;
    color: black;
    max-width: 350px;
    max-height: 300px;
  }
</style>
