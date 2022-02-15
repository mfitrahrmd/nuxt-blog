<template>
  <div
    class="flex flex-col rounded-md drop-shadow-sm overflow-hidden"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>