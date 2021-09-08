<template>
  <button class="f-button" :class="type">
    <div class="icon-container" :class="iconPosition">
      <svg class="icon" v-if="icon">
        <use :xlink:href="`#icon-${icon}`"></use>
      </svg>
      <div class="icon-font">
        <slot></slot>
      </div>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    "icon-position": {
      type: String,
      default:"left",
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
};
</script>
<style lang="scss" scoped>
.f-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  cursor: pointer;
  &.warning {
    background: #e6a23c;
    color: white;
    border: 0px solid;
  }
  &.danger {
    background: #f56c6c;
    color: white;
    border: 0px solid;
  }
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    // background: var(--button-bg-active);
  }
  // .icon {
  //   font-size: var(--font-size);
  // }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    &.left {
      .icon {
        order: 0;
        margin-right: 0.3em;
      }
    }
    &.right {
      .icon {
        order: 1;
        margin-left: 0.3em;
      }
    }
    .icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
    .icon-font {
    }
  }
}
</style>
