<template>
  <div>
    <main>
      <section class="grid lg:grid-cols-[8fr,5fr] min-h-[550px]">
        <div class="flex flex-col">
          <div class="display-1 leading-none lg:display-2 font-medium lg:leading-[1.25] mb-3">Lorem, ipsum dolor sit amet <span class="text-primary">conse adipisicing elit voluptate, quae.</span></div>
          <h3 class="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit repellat numquam vero dolore harum, pariatur maiores odio quo unde, voluptatem eveniet et soluta tenetur? Dignissimos tempore delectus earum suscipit!
          </h3>
          <div class="flex justify-center my-8 lg:mt-auto space-x-8">
            <img
              src="~/assets/icons/settings.svg"
              alt=""
            >
            <img
              src="~/assets/icons/settings.svg"
              alt=""
            >
            <img
              src="~/assets/icons/settings.svg"
              alt=""
            >
            <img
              src="~/assets/icons/settings.svg"
              alt=""
            >
          </div>
        </div>
        <div class="order-first lg:order-none flex flex-col justify-center items-center">
          <img
            src="~/assets/svgs/about.svg"
            alt=""
            class="w-1/2 lg:w-3/4"
          >
        </div>
      </section>
      <section class="grid lg:grid-cols-2 gap-8 lg:w-3/4 mx-auto pt-8">
        <div>
          <img
            ref="content"
            src="~/assets/svgs/content1.svg"
            alt=""
            class="lg:sticky top-[150px] h-[300px] mx-auto"
          >
        </div>
        <div class="flex flex-col text-xl text-gray-700 lg:space-y-40">
          <div
            v-for="item in 5"
            :key="item"
            class="h-[300px] flex items-center"
          >
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni excepturi nobis rem numquam veritatis nulla vitae praesentium doloribus sequi, ratione dolorem, vero fugit aliquid molestiae dicta animi iusto sapiente recusandae.</h4>
          </div>
        </div>
      </section>
      <section>
        <div class="relative top-16 bg-[#ffd02d] flex flex-col rounded-md p-4 lg:p-12">
          <img
            src="~/assets/svgs/subscribe.svg"
            alt=""
            class="lg:absolute top-0 right-0 h-full z-[1]"
          >
          <div class="lg:w-3/4 relative z-[2]">
            <div class="text-3xl lg:text-6xl font-medium text-center lg:text-left leading-none mb-12 text-blue-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, dignissimos?
            </div>
            <div class="text-white font-medium mb-3">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div class="flex flex-col lg:flex-row space-y-3 lg:space-x-5">
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full p-4 focus:outline-none"
              >
              <button class="p-4 rounded-sm hover:text-white hover:bg-blue-500">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>


<script>
export default {};
</script>