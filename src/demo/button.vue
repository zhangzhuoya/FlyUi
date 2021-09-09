<template>
  <button class="f-button" :class="type" @click="$emit('click')">
    <div class="icon-container" :class="iconPosition">
      <Icon name="loading" class="loading" v-if="icon === 'loading'"></Icon>
      <Icon :name="icon" v-if="icon && icon !== 'loading'"></Icon>
      <div class="icon-font">
        <slot></slot>
      </div>
    </div>
  </button>
</template>
<script>
import Icon from "./icon.vue";
export default {
  components: {
    Icon,
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: function (value) {
        if (value === "left" || value === "right") {
          return true;
        } else {
          console.warn("iconPosition mast be left or right");
        }
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
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
      svg {
        order: 0;
        margin-right: 0.3em;
      }
    }
    &.right {
      svg {
        order: 1;
        margin-left: 0.3em;
      }
    }
    .loading {
      animation: spin 2s infinite linear;
    }
    .icon-font {
    }
  }
}
</style>
