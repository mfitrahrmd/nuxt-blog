<template>
  <div>
    <div class="min-h-body-height w-full flex flex-col justify-center items-center">
      <div class="display-1">{{ error.statusCode }}</div>
      <div class="text-lg">{{ error.message }}</div>
      <nuxt-link
        to="/"
        class="underline text-blue-500"
      >
        back to homepage
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>