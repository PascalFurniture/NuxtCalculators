<template>
  <!--Culculator-->
  <div>
    <div class="page-wrapper">
      <div class="global-styles w-embed"></div>
      <main class="main-wrapper">
        <CalculatorWrapper :cluster="cluster" />
      </main>
    </div>
  </div>
</template>
<script>
import clusters from "../../static/clusters";
export default {
  layout: "cluster",
  components: {
    CalculatorWrapper: () =>
      import("../../components/Wrappers/CalculatorWrapper.vue"),
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Cluster Description",
        },
      ],
    };
  },
  computed: {
    cluster() {
      /*
      If the user lands directly on the page without following a link
      we need to pull the "Cluster" data from the JS file
      */
      return this.$route.params.data
        ? this.$route.params.data
        : clusters.find((x) => `/${x.path}` === this.$route.path);
    },
  },
};
</script>