<template>
  <div class="space-y-3">
    <BaseList>
      <template>
        <div class="flex flex-col">
          <nuxt-link
            v-for="(item, i) in navLinks"
            :key="i"
            :to="item.to"
          >
            <BaseButton
              link
              class="w-full text-left"
            >{{ item.title }}</BaseButton>
          </nuxt-link>
        </div>
      </template>
    </BaseList>
    <BaseList title="Others">
      <template>
        <div>
          <nuxt-link
            v-for="(item, i) in otherNavLinks"
            to="#"
            :key="i"
          >
            <BaseButton
              link
              class="w-full text-left"
            >{{ item.title }}</BaseButton>
          </nuxt-link>
        </div>
      </template>
    </BaseList>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { title: "Home", to: "/" },
        { title: "About", to: "/about" },
      ],
      otherNavLinks: [
        { title: "Code of Conduct" },
        { title: "Privacy Policy" },
        { title: "Terms of use" },
      ],
    };
  },
};
</script>