<template>
  <button
    class="px-4 py-1 rounded-md"
    :class="[
        outlined ? `bg-none border border-${color}` : '',
        text ? 'bg-none border-none' : '',
        tile ? 'rounded-none' : '',
        link ? `px-2 py-2 hover:underline hover:bg-${color}-50 hover:text-${color}` : '',
        dark ? 'text-white' : '',
        light ? 'text-black' : ''
    ]"
  >
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    tile: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
    },
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
};
</script>