<template>
  <section id="articles" class="section-articles">
    <div class="page-padding">
      <div class="container-medium">
        <div class="padding-vertical padding-xhuge">
          <div class="margin-bottom margin-xxlarge">
            <div class="text-align-center">
              <div class="max-width-large align-center">
                <div class="margin-bottom margin-small">
                  <h2>Articles</h2>
                </div>
                <div>
                  <!--Subheader-->
                  <p class="text-size-medium">
                    We document latest insights on everything VAT related.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Article List Wrapper-->
          <div class="articles_component">
            <div class="articles_list-wrapper">
              <div class="w-layout-grid articles_list">
                <!--Article Item -->
                <nuxt-link
                  v-for="(el, i) in articles"
                  :key="i"
                  class="articles_item"
                  :to="{
                    name: 'clusters-articles-article',
                    params: { clusters: cluster.path, article: el.slug },
                  }"
                >
                  <div class="articles_item-content">
                    <div class="articles_meta-wrapper">
                      <div
                        class="
                          text-size-small text-weight-semibold
                          is-read-time
                        "
                      >
                        5 min read
                      </div>
                    </div>
                    <span class="articles_title-link w-inline-block">
                      <h3 class="heading-small">
                        {{ el.title }}
                      </h3>
                    </span>
                    <div class="text-size-regular">
                      {{ el.description }}
                    </div>
                    <div class="articles_button-wrapper">
                      <span class="button-link with-icon w-inline-block">
                        <div>Read more</div>
                        <div class="icon-embed-xxsmall w-embed">
                          <svg
                            width="16"
                            height="16"
                            viewbox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 3L11 8L6 13"
                              stroke="CurrentColor"
                              stroke-width="1.5"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </div>
                  </div>
                </nuxt-link>
                <!--End of item-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ArticleList",
  props: ["cluster"],
  data() {
    return {
      articles: [
        {
          title: "10 Basic VAT Tips You Should Know",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...`,
          slug: "10-basic-vat-tips",
        },
        {
          title: "10 Basic VAT Tips You Should Know",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...`,
          slug: "blog-template",
        },
        {
          title: "10 Basic VAT Tips You Should Know",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...`,
          slug: "blog-template",
        },
        {
          title: "10 Basic VAT Tips You Should Know",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...`,
          slug: "blog-template",
        },
      ],
    };
  },
};
</script>
