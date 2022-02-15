<template>
  <div
    ref="wrapper"
    class="bg-gray-500 flex items-start relative"
  >
    <div
      ref="content"
      class="bg-rose-500 sticky top-1/2"
    >
      <h1 :class="changeBg">{{ changeBg }} {{ content.offsetTop }}</h1>
    </div>
    <div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sunt nulla quos explicabo delectus? Dignissimos voluptatem vitae asperiores nesciunt. Quod, assumenda ea? Voluptate laudantium voluptas reprehenderit vitae sunt iure, corporis magnam optio! Dolore voluptas doloribus tempora totam sit quibusdam id eum rem temporibus est eveniet cumque ad incidunt assumenda, pariatur doloremque commodi eius consectetur atque sunt iusto! Reprehenderit cum, doloribus nesciunt odio sequi perspiciatis magni eius blanditiis ea officia harum, non veniam consequuntur aspernatur molestiae debitis at adipisci facere reiciendis explicabo mollitia maiores, sit natus? Amet aliquam dolorum asperiores dolor repellat voluptas exercitationem repellendus quo corrupti porro, ea, et eos quos nulla saepe alias dignissimos quas nostrum libero sint cumque illo officiis. Magnam optio, pariatur, deleniti distinctio fugiat velit, natus ipsa quos inventore sequi minus. In velit illo mollitia nobis, architecto, consectetur autem deserunt nam necessitatibus obcaecati ipsum deleniti id perferendis itaque qui facere, quasi dolorem fuga sunt perspiciatis commodi recusandae ipsa debitis minima. Maiores laudantium delectus inventore illo laboriosam ducimus totam unde omnis earum impedit veniam accusantium natus, sit, nesciunt aperiam, ipsa culpa consequatur. Possimus numquam in quo, soluta modi quasi odit, itaque architecto consectetur quos ipsa amet. Tempore consequatur, asperiores autem, id unde voluptas velit facilis deserunt ipsum molestiae excepturi modi veritatis tenetur exercitationem, numquam suscipit qui. Tempore nesciunt, veritatis consequuntur blanditiis soluta, illum harum animi repellendus tenetur ab deserunt, iste doloremque deleniti dicta natus quas? Nisi suscipit, voluptatem blanditiis pariatur molestiae explicabo quaerat? Qui consequuntur hic voluptatibus accusamus quos, dignissimos similique id. Nostrum quis alias pariatur doloremque minima culpa amet nobis. Inventore tempora enim dolorum quisquam, maiores accusamus placeat, nemo ea impedit voluptatum quod? Molestiae quod temporibus est magnam nam necessitatibus at tenetur error sunt corrupti ad dolorem dignissimos incidunt modi perspiciatis nihil maiores in laudantium, vitae vel fugit? Et cupiditate sed temporibus quae iusto repudiandae, esse labore! Cum cumque neque, atque veniam laudantium dolor quas veritatis. Maiores cumque, exercitationem officiis hic eius voluptatem molestiae animi ratione repellat illo reprehenderit eum beatae similique iusto! Earum eveniet aliquam maxime deserunt aut quam labore accusamus similique at. Atque quibusdam id optio voluptatibus, officiis sequi recusandae et. Animi magnam fugit non quisquam delectus illum. Ducimus eius modi nisi provident fugit ipsum laudantium enim nihil ad numquam assumenda quos nemo, blanditiis nulla nostrum, necessitatibus illum ex. Sunt, labore aspernatur. Repudiandae sapiente reiciendis accusantium minus mollitia non illo magnam, praesentium eligendi, eum tenetur? Fugit quod harum sapiente aspernatur quae ipsam sequi voluptas nemo, illum natus provident sunt similique. Architecto quos temporibus a neque, omnis sapiente repellat nesciunt magni aperiam ex quam laboriosam eaque, earum unde molestiae possimus asperiores iure beatae veniam. Saepe quae minus nemo fugit, eaque vitae omnis reprehenderit natus. Quia, consectetur! Ea enim illum unde corrupti! Ab illum in repudiandae quia! Quae, nulla nisi commodi ut incidunt ducimus, architecto, iste aut dicta voluptas quod inventore eius unde accusamus distinctio beatae eos rem accusantium reiciendis magni tempore ab voluptate! Provident hic in, quia id porro vitae a ut qui dignissimos? Assumenda possimus nisi minima accusamus quos doloremque hic dolor voluptates cum!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {
        offsetTop: 0,
        parentHeight: 0,
      },
    };
  },
  props: {
    imagesSrc: {
      type: Array,
      required: true,
    },
  },
  computed: {
    changeBg() {
      return this.content.parentHeight / this.imagesSrc.length;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.content.offsetTop = this.$refs.content.offsetTop;
    });
    this.content.parentHeight = this.$refs.content.parentElement.offsetHeight;
  },
};
</script>