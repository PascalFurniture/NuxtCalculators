<template>
  <div>
    <section class="section-calc">
      <div class="page-padding">
        <div class="container-small">
          <div class="padding-vertical padding-huge is-header">
            <div class="margin-bottom margin-xxlarge">
              <div class="max-width-large text-align-center is-flex-col">
                <MainMenu v-if="cluster" :cluster="cluster" />
                <ToolHeader v-if="cluster" :cluster="cluster" />
              </div>
            </div>
            <component :is="currentComponent" />
          </div>
        </div>
      </div>
    </section>
    <ExplanationBox id="how-it-works" />
    <ArticleList id="articles" :cluster="cluster" :articles="articles" />
  </div>
</template>
<script>
export default {
  name: "CalculatorWrapper",
  props: ["cluster", "articles"],
  components: {
    MainMenu: () => import("../Menus/MainMenu.vue"),
    ToolHeader: () => import("../Headers/ToolHeader.vue"),
    ExplanationBox: () => import("../Content/ExplanationBox.vue"),
    ArticleList: () => import("../Content/ArticleList.vue"),
  },
  computed: {
    currentComponent() {
      if (!this.cluster) return null;
      return () => import(`../Calculators/${this.cluster.name}Calculator.vue`);
    },
  },
};
</script>