<template>
  <div class="iconDiv">
    <Tooltip
      :text="{
        header: `${content.name}`,
        subtitle: `${content.type} Views: ${content.views} Rate: ${content.rate}`,
        body: `${content.description}`
      }"
      position="right"
    >
      <span>
        <img
          class="img-fluid icon"
          :src="content.image.path"
          :alt="content.image.name"
          @click="$router.push(`/contents/${content.slug}`)"
        />
      </span>
    </Tooltip>
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
.iconDiv {
  display: inline-block;
  .icon {
    height: 200px;
    width: 130px;
    padding-bottom: 10px;
    padding-left: 10px;
  }
  span {
    padding-left: 10px;
  }
}
</style>
