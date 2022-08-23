<template>
  <section id="how-it-works" class="section-how">
    <div class="page-padding">
      <div class="container-small">
        <div class="padding-vertical padding-xhuge">
          <div class="text-align-center">
            <div class="margin-bottom margin-small">
              <h3>How it Works</h3>
            </div>
            <p class="text-size-medium">
              {{ explanationDescription }}
            </p>
          </div>
          <div class="margin-top margin-xxlarge">
            <div class="how_timeline-wrapper">
              <!--Step-->
              <div
                v-for="(step, i) in steps"
                :key="i"
                class="w-layout-grid how_timeline-step"
              >
                <div class="how_timeline-left">
                  <div class="timeline-circle"></div>
                  <div
                    v-if="i < steps.length - 1"
                    class="how_line-wrapper"
                  ></div>
                </div>
                <div class="how_timeline-right">
                  <div class="how_text-wrapper">
                    <div class="margin-bottom margin-xsmall">
                      <h6>{{ step.title }}</h6>
                    </div>
                    <p>
                      {{ step.description }}
                    </p>
                  </div>
                </div>
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
  name: "ExplanationBox",
  data() {
    return {
      explanationDescription:
        "Our VAT calculator allows you to add VAT to a number of extract VAT from a number in seconds. No need work it out manually, the calculator does the work for you.",
      steps: [
        {
          title: "Select whether you want to add or remove VAT",
          description: `Select &quot;Add VAT&quot; to calculate a final amount
                      including VAT. Select &quot;Remove VAT&quot; to extract
                      the VAT portion of a number that already includes VAT.`,
        },
        {
          title: "Search for your country VAT rate",
          description: `Our calculator includes rates for all countries that
                      charge VAT. Use the dropdown to search for and select your
                      country if it has not been applied automatically.`,
        },
        {
          title: "Enter the amount for which you want to add/remove VAT",
          description: `Enter the amount you want to based your calculation off
                      and your VAT will be calculated automatically.`,
        },
      ],
    };
  },
};
</script>