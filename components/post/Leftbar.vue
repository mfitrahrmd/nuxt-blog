<template>
  <aside class="z-50">
    <div class="flex fixed bottom-0 w-full bg-white md:bg-transparent border md:border-0 py-2 md:py-0 justify-between px-8 md:flex-col items-center md:space-y-4 md:sticky md:top-header-2">
      <div class="flex items-center group text-center cursor-pointer">
        <span class="material-icons p-2 rounded-full group-hover:bg-pink-100 group-hover:text-pink-500">favorite_border</span>
        <span>x</span>
      </div>
      <div class="flex items-center group text-center cursor-pointer">
        <span class="material-icons p-2 rounded-full group-hover:bg-emerald-100 group-hover:text-emerald-500">podcasts</span>
        <span>x</span>
      </div>
      <div class="flex items-center group text-center cursor-pointer">
        <span class="material-icons p-2 rounded-full group-hover:bg-indigo-100 group-hover:text-indigo-500">bookmark_border</span>
        <span>x</span>
      </div>
      <div>
      </div>
      <BaseMenu
        top
        right
        class="whitespace-nowrap"
      >
        <template v-slot:activator="{ on }">
          <div
            v-on="on"
            class="group text-center cursor-pointer"
          >
            <span class="material-icons p-2 rounded-full group-hover:bg-gray-100 group-hover:text-gray-500">more_horiz</span>
          </div>
        </template>
        <template>
          <div class="flex flex-col">
            <BaseButton
              text
              link
              color="primary"
              class="text-left"
            >
              Share to ...
            </BaseButton>
            <BaseButton
              text
              link
              color="primary"
              class="text-left"
            >
              Share to ...
            </BaseButton>
            <BaseButton
              text
              link
              color="primary"
              class="text-left"
            >
              ...
            </BaseButton>
          </div>
        </template>
      </BaseMenu>

    </div>
  </aside>
</template>