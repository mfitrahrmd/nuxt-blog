<template>
  <div>
    <PostCard :posts="posts.data" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "home",

  async asyncData({ $axios }) {
    const posts = await $axios({
      url: "https://api.buttercms.com/v2/posts",
      method: "GET",
      params: {
        auth_token: process.env["buttercms-token"],
        page: 1,
        exclude_body: true,
      },
    })
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return { posts };
  },
};
</script>
