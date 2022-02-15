<template>
  <div
    class="rounded-full overflow-hidden"
    :class="[`w-${size} h-${size}`]"
  >
    <img
      v-bind="$attrs"
      class="object-cover"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    size: {
      type: [Number, String],
      default: "8",
    },
  },
};
</script>