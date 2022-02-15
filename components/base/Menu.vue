<template>
  <div class="relative">
    <slot
      name="activator"
      :on="{click: () => show = !show}"
    ></slot>
    <transition name="fade">
      <div
        v-if="show"
        v-bind="$attrs"
        class="bg-white min-w-[200px] px-2 py-1 mt-1 border rounded-md shadow-md absolute"
        :class="[{'bottom-full' : top}, {'top-full' : bottom}, {'right-full' : left}, {'left-full' : right}]"
      >
        <slot></slot>
      </div>
    </transition>
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
  props: {
    top: {
      type: Boolean,
    },
    left: {
      type: Boolean,
    },
    bottom: {
      type: Boolean,
    },
    right: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>