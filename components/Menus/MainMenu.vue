<template>
  <div class="margin-bottom margin-large is-nav">
    <div class="calc_nav">
      <nuxt-link
        v-for="el in menuItems"
        :key="el.name"
        aria-current="page"
        class="nav-link"
        active-class="w--current"
        :to="el.to"
        >{{ el.name }}</nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "MainMenu",
  props: ["cluster"],
  data() {
    return {
      menuItems: [
        {
          name: `${this.cluster.name} Calculator`,
          to: {
            name: "clusters-cluster",
            params: { clusters: this.cluster.path, data: this.cluster },
          },
        },
        {
          name: "How It Works",
          to: `/${this.cluster.path}#how-it-works`,
          preventActive: true,
        },
        { name: "Articles", to: `/${this.cluster.path}#articles` },
      ],
    };
  },
};
</script>