<template>
  <div :class="`rounded-full overflow-hidden w-12 h-12`">
    <img
      v-bind="$attrs"
      class="object-cover"
      alt="avatar"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    size: {
      type: String,
    },
  },
};
</script>