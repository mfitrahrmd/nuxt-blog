<template>
  <div class="flex flex-col w-full">
    <label
      v-if="label"
      :for="getIdString"
      class="mb-2 font-medium"
    >{{ label }}</label>
    <input
      :id="getIdString"
      @input="(e) => $emit('input', e.target.value)"
      v-bind="$attrs"
      class="px-2 py-2 box-content rounded-md border outline-none border-gray-300 hover:border-gray-400 focus:border-primary"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      id: "",
    };
  },
  props: {
    label: {
      type: String,
    },
  },
  computed: {
    getIdString() {
      return this.id.toString();
    },
  },
  mounted() {
    this.id = Math.random();
  },
};
</script>