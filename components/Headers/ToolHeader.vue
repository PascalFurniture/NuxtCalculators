<template>
  <div class="max-width-large text-align-center is-flex-col">
    <div class="margin-bottom margin-small">
      <h2>{{ `${cluster.name} Calculator` }}</h2>
    </div>
    <p v-if="cluster.description" class="text-size-medium">
      {{ cluster.description }}
    </p>
  </div>
</template>
<script>
export default {
  name: "ToolHeader",
  props: ["cluster"],
  data() {
    return {};
  },
};
</script>