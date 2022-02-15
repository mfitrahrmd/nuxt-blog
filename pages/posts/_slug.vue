<template>
  <div class="grid md:grid-cols-[1fr,11fr] gap-4">
    <nav class="bg-white border fixed bottom-0 left-0 w-full z-50 md:bg-transparent md:border-0 md:static md:z-0">
      <div class="sticky top-[74px] flex justify-evenly items-center p-4 md:p-0 md:flex-col md:space-y-8">
        <div>X</div>
        <div>X</div>
        <div>X</div>
      </div>
    </nav>
    <main class="grid lg:grid-cols-[17fr,7fr] gap-4">
      <BaseCard class="bg-white">
        <div
          v-if="post.data.featured_image"
          class="aspect-w-16 aspect-h-6"
        >
          <img
            :src="post.data.featured_image"
            alt="featured-image"
            class="object-cover"
          >
        </div>
        <BaseCardHeader class="flex flex-col items-start lg:px-12 space-y-5">
          <div class="inline-flex items-center space-x-3">
            <img
              :src="post.data.author.profile_image"
              alt="avatar-image"
              class="w-8 h-8 object-cover rounded-full"
            />
            <div class="text-sm">
              <p>{{ `${post.data.author.first_name} ${post.data.author.last_name}` }}</p>
              <p>{{ new Date(post.data.published).toDateString() }}</p>
            </div>
          </div>
          <h1 class="text-5xl font-bold">{{ post.data.title }}</h1>
          <div>
            <nuxt-link
              v-for="(tag, i) in post.data.tags"
              :key="i"
              :to="'/posts/t/'+tag.slug"
            >
              <BaseChip>{{ '#'+tag.name }}</BaseChip>
            </nuxt-link>
          </div>
        </BaseCardHeader>
        <BaseCardContent class=" text-xl lg:px-12 whitespace-pre-line">
          <div v-html="post.data.body"></div>
        </BaseCardContent>
      </BaseCard>
      <aside>
        <div class="sticky top-[74px]">
          <BaseCard class="bg-white">
            <BaseCardHeader class="bg-primary">
            </BaseCardHeader>
            <BaseCardContent class="py-0">
              <div class="relative -top-4 space-y-3">
                <div class="flex items-end space-x-1">
                  <Avatar
                    :src="post.data.author.profile_image"
                    size="12"
                  />
                  <h2 class="font-medium">{{ post.data.author.first_name}} {{ post.data.author.last_name }}</h2>
                </div>
                <div class="flex justify-around">
                  <a
                    v-if="post.data.author.twitter_handle"
                    :href="'https://twitter.com/'+post.data.author.twitter_handle"
                    target="_blank"
                    class="p-2 rounded-md hover:bg-primary-50"
                  >
                    <img
                      src="~/assets/svgs/twitter.svg"
                      alt=""
                    >
                  </a>
                  <a
                    v-if="post.data.author.twitter_handle"
                    :href="post.data.author.instagram_url"
                    target="_blank"
                    class="p-2 rounded-md hover:bg-primary-50"
                  >
                    <img
                      src="~/assets/svgs/instagram.svg"
                      alt=""
                    >
                  </a>
                  <a
                    v-if="post.data.author.facebook_url"
                    :href="post.data.author.facebook_url"
                    target="_blank"
                    class="p-2 rounded-md hover:bg-primary-50"
                  >
                    <img
                      src="~/assets/svgs/facebook.svg"
                      alt=""
                    >
                  </a>
                  <a
                    v-if="post.data.author.linkedin_url"
                    :href="post.data.author.linkedin_url"
                    target="_blank"
                    class="p-2 rounded-md hover:bg-primary-50"
                  >
                    <img
                      src="~/assets/svgs/linkedin.svg"
                      alt=""
                    >
                  </a>
                </div>
                <div class="text-gray-700 space-y-3">
                  <div>{{ post.data.author.title}}</div>
                  <div>
                    <div class="font-medium">Email</div>
                    <div>{{ post.data.author.email }}</div>
                  </div>
                  <div>{{ post.data.author.bio }}</div>
                </div>
              </div>
            </BaseCardContent>
          </BaseCard>
        </div>
      </aside>
    </main>
  </div>
</template>

<script>
import Avatar from "~/components/Avatar.vue";
export default {
  async asyncData({ $axios, params, error }) {
    const post = await $axios({
      url: `https://api.buttercms.com/v2/posts/${params.slug}`,
      method: "GET",
      params: {
        auth_token: process.env["buttercms-token"],
      },
    })
      .then((res) => res.data)
      .catch((err) =>
        error({
          statusCode: err.response.status,
          message: err.response.data.detail,
        })
      );
    return { post };
  },
  components: { Avatar },
};
</script>

<style>
</style>