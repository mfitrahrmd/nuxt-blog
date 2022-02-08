<template>
  <div class="grid grid-cols-1 md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,3fr,1.5fr] gap-3 mx-4 my-2 lg:mx-12 lg:my-6">
    <aside class="hidden md:flex flex-col space-y-3">
      <Navbar />
    </aside>
    <Nuxt />
    <aside class="hidden lg:flex flex-col space-y-5">
      <BaseCard>
        <BaseCardHeader class="py-2 flex justify-between">
          <h3 class="font-bold">Listings</h3>
          <BaseButton
            class="text-primary text-sm"
            text
          >
            See all
          </BaseButton>
        </BaseCardHeader>
        <BaseCardContent
          v-for="item in 5"
          :key="item"
          class="border-t p-4 group cursor-pointer"
        >
          <h4 class="group-hover:text-primary">TestDevTools - Crurated collection of best tools for Software Testing</h4>
          <p class="text-sm">products</p>
        </BaseCardContent>
      </BaseCard>
      <BaseCard>
        <BaseCardHeader class="p-4">
          <h3 class="font-bold">#help</h3>
        </BaseCardHeader>
        <BaseCardContent class="border-t p-4 group cursor-pointer">
          <h4 class=" group-hover:text-primary">LCSW Therapist California Answering Some Common Faqs About Mental Health Therapy</h4>
        </BaseCardContent>
      </BaseCard>
    </aside>
  </div>
</template>

<style>
    body{
        background: #f5f5f5;
    }
</style>