<template>
  <div class="calc_component w-tabs">
    <div
      id="w-node-_9c5972ea-9df5-6c62-67bf-a3eca71abd3b-5d1089a8"
      class="calc_tabs-menu w-tab-menu"
    >
      <!--TAB Button-->
      <a
        v-for="(tab, i) in tabs"
        :key="i"
        class="calc_tabs-link w-inline-block w-tab-link"
        :class="currentTab === i + 1 ? 'w--current' : ''"
        @click="currentTab = i + 1"
      >
        <div class="margin-bottom margin-xsmall">
          <div class="text-size-large text-weight-bold">{{ tab.name }}</div>
        </div>
        <div class="hide-mobile-portrait">{{ tab.description }}</div>
        <div class="calc_arrow w-embed" v-if="currentTab === i + 1">
          <svg
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewbox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </a>
    </div>
    <!--TAB CONTENT 1-->
    <div class="calc_tabs-content w-tab-content">
      <div class="calc_tab-pane w-tab-pane w--tab-active">
        <div class="calc_form-block w-form">
          <form
            id="wf-form-VAT-Amount"
            name="wf-form-VAT-Amount"
            data-name="VAT Amount"
            method="get"
            class="calc_form"
            autocomplete="off"
          >
            <div class="form-field-wrapper">
              <label for="Contact-6-Select-2" class="field-label"
                >Country VAT Rate</label
              >
              <div
                data-delay="0"
                data-hover="false"
                class="form-input is-select-input w-dropdown"
              >
                <!--Dropdown-->
                <div class="form-dropdown-toggle w-dropdown-toggle">
                  <div class="w-icon-dropdown-toggle"></div>
                  <!--Selected Country-->
                  <a
                    v-if="selectedCountry"
                    @click="toggleDropdown = true"
                    class="form-dropdown-link is-default w-inline-block"
                    ><span class="form-flag">{{ selectedCountry.flag }}</span>
                    <div>{{ selectedCountry.name }}</div>
                    <div class="text-weight-semibold">
                      {{ selectedCountry.rate }} %
                    </div>
                  </a>
                  <!--Empty State-->
                  <a
                    @click="toggleDropdown = true"
                    v-else
                    class="form-dropdown-link is-default w-inline-block"
                  >
                    <div>Select a country below...</div>
                  </a>
                </div>
                <nav :class="dropdownClasses">
                  <!--Search Bar-->
                  <div class="form-flag-search">
                    <input
                      type="text"
                      class="form-input country-search w-input"
                      maxlength="256"
                      name="field"
                      data-name="Field"
                      placeholder="Search country VAT rates..."
                      id="field"
                      required=""
                      v-model="search"
                    />
                  </div>
                  <!--Countries list-->
                  <div class="country-list-wrapper">
                    <a
                      class="form-dropdown-link w-inline-block"
                      v-for="(country, i) in filteredCountries"
                      :key="i"
                      @click="selectedCountry = country"
                      ><span class="form-flag">{{ country.flag }}</span>
                      <div>{{ country.name }}</div>
                      <div class="text-weight-semibold">
                        {{ country.rate }}%
                      </div>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div class="form-field-wrapper">
              <div class="form-field-wrapper">
                <label for="VAT-Amount" class="field-label"
                  >Enter Amount
                  <span class="vat-time-span">{{
                    currentTab === 1 ? "Excluding VAT" : "Including VAT"
                  }}</span></label
                ><input
                  v-model.number="inputAmount"
                  type="number"
                  step=".01"
                  inputmode="decimal"
                  class="form-input w-input"
                  maxlength="256"
                  :placeholder="`${this.currency ? this.currency : ''} 00.00`"
                  id="VAT-Amount"
                  required=""
                  @input="
                    outputAmount = calculateVAT(
                      inputAmount,
                      vatRate,
                      currentTab === 1 ? true : false
                    ).toFixed(2)
                  "
                />
              </div>
            </div>
          </form>
        </div>
        <div class="calc_output-wrapper">
          <div class="calc_vat-outout">
            <div
              id="w-node-_69a871d0-8936-083e-d11b-aa45ef14ad00-5d1089a8"
              class="calc_output-cell"
            >
              <div class="text-style-muted">
                VAT {{ currentTab === 1 ? "Added" : "Removed" }}:
              </div>
              <div class="margin-top margin-tiny">
                <div class="text-size-xlarge text-weight-semibold">
                  {{
                    `${this.currency ? this.currency : ""} ${Math.abs(
                      outputAmount - inputAmount
                    ).toFixed(2)}`
                  }}
                </div>
              </div>
            </div>
            <div
              id="w-node-_36020f71-3281-776a-4807-eb0595dd3acd-5d1089a8"
              class="calc_output-cell"
            >
              <div class="text-style-muted">
                Total {{ currentTab === 1 ? "including" : "excluding" }} VAT:
              </div>
              <div class="margin-top margin-tiny">
                <div class="text-size-xlarge text-weight-semibold">
                  {{ `${this.currency ? this.currency : ""} ${outputAmount}` }}
                </div>
              </div>
            </div>
          </div>
          <div class="margin-top margin-small">
            <a
              @click="copy()"
              style="cursor: pointer"
              class="
                button
                is-button-small
                with-icon
                is-secondary
                w-inline-block
              "
            >
              <div class="button-icon w-embed">
                <svg
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewbox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  ></path>
                  <path
                    d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
                  ></path>
                </svg>
              </div>
              <div>Copy to Clipboard</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { calculateVAT } from "../../utils/calculations";
import countries from "../../utils/countryVatRates";
export default {
  name: "VatCalculator",
  data() {
    return {
      vatRate: 1,
      inputAmount: null,
      toggleDropdown: false,
      countries: countries,
      search: "",
      selectedCountry: null,
      currentTab: 1,
      outputAmount: 0,
      geoData: null,
      currency: null,
      tabs: [
        {
          name: "Add VAT",
          description: "Add VAT to get total price",
          data: "Tab 1",
        },
        {
          name: "Remove VAT",
          description: "Remove VAT from a number",
          data: "Tab 2",
        },
      ],
    };
  },
  computed: {
    filteredCountries() {
      return this.search === "" || this.search === null
        ? this.countries
        : this.countries.filter(
            (x) =>
              x.name.toLowerCase().includes(this.search.toLowerCase()) ||
              String(x.rate).includes(this.search)
          );
    },
    dropdownClasses() {
      return !this.toggleDropdown
        ? "form-dropdown-list w-dropdown-list w--close"
        : "form-dropdown-list w-dropdown-list w--open";
    },
  },
  watch: {
    currentTab(value) {
      if (!this.inputAmount) return;
      this.outputAmount = this.calculateVAT(
        this.inputAmount,
        this.vatRate,
        value === 1 ? true : false
      ).toFixed(2);
    },
    selectedCountry: {
      handler(value) {
        this.vatRate = value.rate;
        this.toggleDropdown = false;
        // recaclulate VAT
        if (!this.inputAmount) return;
        this.outputAmount = this.calculateVAT(
          this.inputAmount,
          this.vatRate,
          this.currentTab === 1 ? true : false
        ).toFixed(2);
        // Close dropdown
      },
    },
    geoData(value) {
      const countryName = value.location.country.name;
      if (!this.countries.some((x) => x.name === countryName)) return;
      // Find country and set default
      this.selectedCountry = this.countries.find((x) => x.name === countryName);
    },
  },
  async created() {
    // Call geolocation service
    const response = await fetch(process.env.geoAPI);
    this.geoData = await response.json();
    this.currency = this.geoData.currency.symbol_native;
  },
  methods: {
    calculateVAT,
    // Copy to clipboard
    copy() {
      navigator.clipboard.writeText(this.outputAmount);
    },
  },
};
</script>