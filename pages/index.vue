<template>
  <div>
    <div v-for="el in clusters" :key="el.clusterId">
      <nuxt-link
        :to="{
          name: 'clusters-cluster',
          params: { clusters: el.path, data: el },
        }"
        >{{ el.name }}</nuxt-link
      >
    </div>
  </div>
</template>
<script>
import clusters from "~/static/clusters";
export default {
  data() {
    return {
      clusters: clusters.sort((a, b) => (a.name > b.name ? 1 : -1)),
    };
  },
  methods: {
    formatName(name) {
      // remove spaces
      return name
        .replace(/ /g, "-")
        .replace(/@/g, "")
        .replace(/\$/g, "")
        .replace(/!/g, "")
        .replace(/#/g, "")
        .toLowerCase();
    },
  },
};
</script>