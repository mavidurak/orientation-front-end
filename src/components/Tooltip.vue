<template>
  <div :class="`tooltip-component ${position}`">
    <slot></slot>
    <span class="tooltip-text">
      <div class="text-left">
        <div class="head">
          <h6>
            <b>{{ text.header }}</b>
          </h6>
        </div>
        <div class="subtitle">{{ text.subtitle }}</div>
        <div class="body">
          <p>{{ text.body }}</p>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    text: Object,
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
    border: 5px solid #bcbec2;
    z-index: 1;
    p {
      font-size: 0.875rem;
    }

    &::after {
      content: "";
      position: absolute;
      border-style: solid;
      border-color: #bcbec2 transparent transparent transparent;
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
    bottom: 105%;
    left: 0%;
    &::after {
      margin-left: -5px;
      left: 50%;
      top: 100%;
      border-color: #bcbec2 transparent transparent transparent;
    }
  }
}
.right {
  .tooltip-text {
    top: -5px;
    left: 105%;
    &::after {
      top: 50%;
      right: 100%;
      border-color: transparent #bcbec2 transparent transparent;
    }
  }
}
.bottom {
  .tooltip-text {
    top: 100%;
    left: 0%;
    &::after {
      bottom: 102%;
      left: 40%;
      border-color: transparent transparent #bcbec2 transparent;
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
      border-color: transparent transparent transparent #bcbec2;
    }
  }
}
</style>
