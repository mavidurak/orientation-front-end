<template>
<div class="iconDiv">
     <div>
       <Tooltip
       :text="{
         header:`${content.name}` ,
         body: `${content.type} Views: ${content.views} Rate: ${content.rate}
        ${content.description}`
         }"
         position="right">
            <span>
            <img class="img-fluid icon" :src="content.image.path" :alt="content.image.name"/>
          </span>
        </Tooltip>
    </div>
</div>
</template>
<script>
import Tooltip from '@/components/Tooltip.vue';

export default {
  name: 'ContentIcon',
  props: {
    content: Object,
  },
  components: {
    Tooltip,
  },
};
</script>
<style lang="scss" scoped>
.icon{
  height: 200px;
  width: 130px;
  padding-bottom: 10px;
  padding-left: 10px;
}
span{
    padding-left: 10px;
  }
   .iconDiv{
     display: inline-block;
   }
</style>
