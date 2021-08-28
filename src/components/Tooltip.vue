<template>
  <div :class="`tooltip-component tooltip ${position}`">
    <slot></slot>
  <span class="tooltip-text">
    <div class="text-left" id="tooltip">
      <div class="head"><b><h5>{{text.header}}</h5> </b></div>
      <div class="body"><p>{{text.body}} </p></div>
    </div>
  </span>
</div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    text: {
      type: Object,
    },
    position: String,

  },
};
</script>

<style lang="scss" scoped>
.tooltip-component {
  position: relative;
  opacity: 5;
  .tooltip-text {
    visibility: hidden;
    width: 300px;
    background-color: #f4f4f4;
    color: #000;
    text-align: left;
    border-radius: 6px;
    padding: 5px 5px;
    position: absolute;
    transition: opacity 0s;
    border: 5px solid #BCBEC2;

    &::after {
      content: "";
      position: absolute;
      border-style: solid;
      border-color: #BCBEC2 transparent transparent transparent;
      content: "";
      position: absolute;
      border-width: 10px;
      border-style: solid;
  }
}
    &:hover {
      .tooltip-text {
        visibility: visible;
        opacity: 0.9;
      }
    }
}
.top {
    .tooltip-text {
      bottom: 100%;
      left: 0%;
      &::after {
        margin-left: -5px;
        left: 50%;
        top: 100%;
        border-color: #BCBEC2 transparent transparent transparent;
      }
    }
}
.right {
  .tooltip-text {
    top: -5px;
    left: 90%;
      &::after {
      top: 50%;
      right: 100%;
      border-color: transparent #BCBEC2 transparent transparent;
    }
  }
}
.bottom {
  .tooltip-text {
    top: 100%;
    left: 50%;
      &::after {
      margin-left: -5px;
      bottom: 100%;
      left: 50%;
      border-color: transparent transparent #BCBEC2 transparent;
    }
  }
}
.left {
  .tooltip-text {
    top: -5px;
    right: 90%;
      &::after {
        top: 50%;
        left: 100%;
        border-color: transparent transparent transparent #BCBEC2;
      }
  }
}
</style>
