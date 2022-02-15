<template>
  <div class="grid md:grid-cols-[3fr,9fr] lg:mx-40">
    <div></div>
    <div>
      <PostCard
        v-if="result.data.length"
        :posts="result.data"
      />
      <div v-else>
        <div class="display-1">Could not find your search</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 1,
    };
  },
  async asyncData({ params, $axios, error }) {
    const result = await $axios({
      url: "https://api.buttercms.com/v2/posts/search",
      method: "GET",
      params: {
        auth_token: process.env["buttercms-token"],
        query: params.q,
        exclude_body: true,
        page: 1,
        page_size: 10,
      },
    })
      .then((res) => res.data)
      .catch((err) =>
        error({
          statusCode: err.response.status,
          message: err.response.data.detail,
        })
      );

    return { result };
  },
};
</script>