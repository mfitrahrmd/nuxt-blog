<template>
  <div class="flex flex-col space-y-3">
    <div
      v-if="title"
      class="title"
    >{{ title }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style>

</style>