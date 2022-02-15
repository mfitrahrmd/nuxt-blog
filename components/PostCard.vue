<template>
  <div class="space-y-3">
    <BaseCard
      v-for="(post, i) in posts"
      :key="i"
      class="bg-white"
    >
      <div
        v-if="post.featured_image"
        class="aspect-w-16 aspect-h-9"
      >
        <img
          :src="post.featured_image"
          :alt="post.featured_image_alt"
          class="object-cover"
        >
      </div>
      <BaseCardContent>
        <div class="flex gap-2 mb-3">
          <img
            :src="post.author.profile_image"
            class="w-8 h-8 object-cover rounded-full"
          >
          <div class="text-xs">
            <p class="font-semibold">{{ `${post.author.first_name} ${post.author.last_name}` }}</p>
            <p>{{ new Date(post.published).toDateString() }}</p>
          </div>
        </div>
        <div class="pl-10 space-y-1">
          <nuxt-link :to="'/posts/'+post.slug">
            <h1 class="font-semibold cursor-pointer hover:text-primary">{{ post.title }}</h1>
          </nuxt-link>
          <div class="-ml-2">
            <nuxt-link
              v-for="(tag, i) in post.tags"
              :key="i"
              :to="'/posts/t/'+tag.slug"
            >
              <BaseChip>{{ '#'+tag.name }}</BaseChip>
            </nuxt-link>
          </div>
        </div>
      </BaseCardContent>
    </BaseCard>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>