<template>
  <div>
    <div
      v-if="show"
      class="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-8 rounded-md border border-gray-300 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <slot></slot>
      <button
        @click="show = false"
        class="absolute top-0 right-0"
      ><span class="material-icons">close</span></button>
    </div>
    <slot
      name="activator"
      v-on="listeners"
    ></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      show: false,
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: () => {
          this.show = !this.show;
        },
      };
    },
  },
};
</script>