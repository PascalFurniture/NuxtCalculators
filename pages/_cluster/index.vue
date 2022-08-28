<template>
  <!--Culculator-->
  <div>
    <div class="page-wrapper">
      <div class="global-styles w-embed"></div>
      <main class="main-wrapper">
        <CalculatorWrapper :cluster="cluster" :articles="articles" />
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
  async asyncData({ $content, route }) {
    const cluster = clusters.find((x) => `/${x.path}` === route.path);
    const articles = await $content("articles")
      .where({ clusterPath: { $eq: cluster.path } })
      .without(["body"])
      .limit(4)
      .fetch();
    return { cluster, articles };
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
};
</script>