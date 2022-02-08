<template>
  <button
    class="px-4 py-1 rounded-sm"
    :class="{
        'bg-none border border-primary' : outlined,
        'bg-none border-none' : text
    }"
    v-bind="$attrs"
  >
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
  },
};
</script>