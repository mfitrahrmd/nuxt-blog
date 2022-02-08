<template>
  <div class="space-y-3">
    <BaseCard>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
        alt=""
      >
      <BaseCardContent>
        <BaseCardTop>
          <img
            class="w-8 h-8 object-cover rounded-full"
            src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
            alt=""
          >
          <div class="text-xs ml-3">
            <p>therockreal</p>
            <p>Feb 7 (1 day ago)</p>
          </div>
        </BaseCardTop>
        <BaseCardMid class="">
          <h2 class="text-3xl font-semibold cursor-pointer hover:text-primary">How to go from 0 to 100k as a freelancer</h2>
          <BaseChip>#Freelancer</BaseChip>
          <BaseChip>#career</BaseChip>
        </BaseCardMid>
        <BaseCardBot class="w-full flex justify-between my-1">
          <div>
            <BaseButton class="rounded-md hover:bg-gray-100">72 Reactions</BaseButton>
            <BaseButton class="rounded-md hover:bg-gray-100">56 Comments</BaseButton>
          </div>
          <div class="space-x-1">
            <span class="text-xs">3 min read</span>
            <BaseButton class="rounded-md bg-gray-300 hover:bg-gray-400">Save</BaseButton>
          </div>
        </BaseCardBot>
      </BaseCardContent>
    </BaseCard>
    <BaseCard>
      <BaseCardContent>
        <BaseCardTop>
          <img
            class="w-8 h-8 object-cover rounded-full"
            src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960"
            alt=""
          >
          <div class="text-xs ml-3">
            <p>john doe</p>
            <p>Feb 5 (3 days ago)</p>
          </div>
        </BaseCardTop>
        <BaseCardMid class="">
          <h2 class="text-3xl font-semibold cursor-pointer hover:text-primary">asyncData in Nuxt</h2>
          <BaseChip>#nuxt</BaseChip>
          <BaseChip>#javascript</BaseChip>
        </BaseCardMid>
        <BaseCardBot class="w-full flex justify-between my-1">
          <div>
            <BaseButton class="rounded-md hover:bg-gray-100">32 Reactions</BaseButton>
            <BaseButton class="rounded-md hover:bg-gray-100">16 Comments</BaseButton>
          </div>
          <div class="space-x-1">
            <span class="text-xs">3 min read</span>
            <BaseButton class="rounded-md bg-gray-300 hover:bg-gray-400">Save</BaseButton>
          </div>
        </BaseCardBot>
      </BaseCardContent>
    </BaseCard>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
