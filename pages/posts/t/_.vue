<template>
  <div class="grid md:grid-cols-[3fr,9fr] lg:mx-40">
    <div></div>
    <div>
      <PostCard
        v-if="posts.data.length"
        :posts="posts.data"
      />
      <div v-else>
        <div class="display-1">Could not find tag</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const posts = await $axios({
      url: "https://api.buttercms.com/v2/posts",
      method: "GET",
      params: {
        auth_token: process.env["buttercms-token"],
        tag_slug: params.pathMatch,
        exclude_body: true,
        page: 1,
        page_size: 10,
      },
    })
      .then((res) => res.data)
      .catch((err) => console.log(err));

    console.log(posts);
    return { posts };
  },
};
</script>