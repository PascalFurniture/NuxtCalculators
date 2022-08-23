<template>
  <figure
    style="max-width: 1280px"
    class="w-richtext-align-fullwidth w-richtext-figure-type-image"
  >
    <div>
      <img :src="imgSrc" :alt="alt" draggable="false" loading="lazy" />
    </div>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "VImg",
  props: {
    src: {
      required: true,
    },
    alt: {
      required: true,
    },
    caption: {
      required: false,
    },
  },
  computed: {
    imgSrc() {
      return require(`~/assets/img/${this.src}`);
    },
  },
};
</script>

<style lang="css" scoped>
figure {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
}
figure.img {
  width: 100%;
  height: 100%;
  margin: auto;
  object-fit: contain;
  padding-bottom: 1rem;
}
</style>