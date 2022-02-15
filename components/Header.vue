<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <transition name="fade">
      <div
        v-if="drawer"
        @click.self="drawer = false"
        class="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.3)] lg:hidden"
      >

        <div class="w-[300px] h-full bg-white p-4">
          <div class="flex justify-between items-center">
            <span class="font-bold">Blog</span>
            <span
              @click="drawer = false"
              class="material-icons p-2 rounded-md hover:bg-primary-100 hover:text-primary cursor-pointer"
            >close</span>
          </div>
          <Nav />
        </div>
      </div>
    </transition>
    <div class="flex items-center max-w-site-width m-auto p-2">
      <div class="inline-flex items-center space-x-5">
        <div
          @click="drawer = true"
          class="hover:text-primary hover:bg-primary-100 p-2 rounded-md flex justify-center items-center cursor-pointer md:hidden"
        >
          <span class="material-icons">menu</span>
        </div>
        <nuxt-link to="/">
          <div class="rounded-sm bg-black text-white font-bold p-2">BLOG</div>
        </nuxt-link>
        <form
          @submit.prevent
          class="flex space-x-1"
        >
          <BaseInput
            v-model="search"
            placeholder="Search..."
          />
          <nuxt-link
            :to="'/search/'+search"
            class="material-icons p-2 rounded-md cursor-pointer hover:text-primary hover:bg-primary-100"
          >search</nuxt-link>
        </form>
      </div>
      <div class="flex-grow mx-auto"></div>
      <div
        v-if="isLoggedIn"
        class="inline-flex items-center space-x-3"
      >
        <span class="material-icons p-2 rounded-md bg-gray-100 hover:bg-primary-50 hover:text-primary md:hidden">search</span>
        <BaseButton
          outlined
          link
          color="primary"
          class=""
        >Create Post</BaseButton>
        <span class="material-icons p-2 rounded-md bg-gray-100 hover:bg-primary-50 hover:text-primary">notifications</span>
        <BaseMenu
          bottom
          left
          class="whitespace-nowrap"
        >
          <template v-slot:activator="{ on }">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaQRG0MY8nwKij74scyQQ_SInrAS71HyUNQ&usqp=CAU"
              alt=""
              class="w-10 h-10 rounded-full object-cover border-4 border-opacity-0 border-primary-50 hover:border-opacity-100"
              v-on="on"
            >
          </template>
          <template>
            <div class="flex flex-col">
              <BaseButton
                text
                link
                color="primary"
                class="w-full text-left"
              >
                <p>John Doe</p>
                <p>@johndoe</p>
              </BaseButton>
              <div class="border bg-gray-100 px-1"></div>
              <BaseButton
                text
                link
                color="primary"
                class="w-full text-left"
              >Dashboard</BaseButton>
              <BaseButton
                text
                link
                color="primary"
                class="w-full text-left"
              >Create Post</BaseButton>
              <BaseButton
                text
                link
                color="primary"
                class="w-full text-left"
              >Reading List</BaseButton>
              <BaseButton
                text
                link
                color="primary"
                class="w-full text-left"
              >Settings</BaseButton>
              <div class="border bg-gray-100 px-1"></div>
              <BaseButton
                text
                link
                color="primary"
                class="w-full text-left"
              >Sign Out</BaseButton>
            </div>
          </template>
        </BaseMenu>
      </div>
      <div v-else>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      drawer: false,
      search: "",
    };
  },
};
</script>