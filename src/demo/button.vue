<template>
  <button class="f-button">gulu</button>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.f-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-bg-active);
  }
}
</style>
