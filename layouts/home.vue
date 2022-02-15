<template>
  <div>
    <Header />
    <Layout>
      <aside class="hidden md:flex flex-col space-y-3">
        <Nav />
        <BaseList title="Tags">
          <template>
            <nuxt-link
              v-for="(item, i) in tags"
              :key="i"
              :to="'posts/t/'+item.slug"
            >
              <BaseButton link>{{ item.name }}</BaseButton>
            </nuxt-link>
          </template>
        </BaseList>
      </aside>
      <Nuxt />
      <aside class="hidden lg:flex flex-col space-y-5">
        <BaseCard class="bg-white">
          <BaseCardHeader class="flex justify-between">
            <h3 class="font-bold">Listings</h3>
          </BaseCardHeader>
          <BaseCardContent
            v-for="item in 5"
            :key="item"
            class="border-t p-4 group cursor-pointer"
          >
            <h4 class="group-hover:text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, pariatur.</h4>
            <p class="text-sm">lorem</p>
          </BaseCardContent>
        </BaseCard>
        <BaseCard class="bg-white">
          <BaseCardHeader class="p-4">
            <h3 class="font-bold">#help</h3>
          </BaseCardHeader>
          <BaseCardContent class="border-t p-4 group cursor-pointer">
            <h4 class=" group-hover:text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto cumque obcaecati illum magnam odit reiciendis at quisquam. Eos incidunt commodi.</h4>
          </BaseCardContent>
        </BaseCard>
      </aside>
    </Layout>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
    };
  },
  async mounted() {
    this.tags = await fetch(
      `https://api.buttercms.com/v2/tags/?auth_token=${process.env["buttercms-token"]}`
    )
      .then((res) => res.json())
      .then((res) => res.data);
  },
};
</script>

<style>
    body{
        background: #f5f5f5;
    }
</style>