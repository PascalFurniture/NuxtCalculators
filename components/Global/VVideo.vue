<template>
  <div class="video-wrapper">
    <iframe
      :src="src"
      width="560"
      height="315"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VImg",
  props: {
    src: {
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
video-wrapper {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
}
video-wrapper.iframe {
  margin: auto;
  object-fit: contain;
  padding-bottom: 1rem;
  width: 560px;
  height: 360px;
}
</style>