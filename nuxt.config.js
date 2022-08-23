export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Calculators',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  //
  generate: {
    async ready() {
      const { $content } = require('@nuxt/content')
      const articles = await $content().only(['slug', 'clusterPath']).fetch()
      console.log(`${x.clusterPath}/${x.slug}`)
      return articles.map(x => `${x.clusterPath}/${x.slug}`)
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '~/assets/css/normalise.css', '~/assets/css/webflow.css', '~/assets/css/custom.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vimg.js',
    '@/plugins/vvideo.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    // GEO Location AP
    // DOCS --> https://ipregistry.co/docs
    geoAPI: process.env.BASE_URL || 'https://api.ipregistry.co/?key=uczyw3hmlyrv3val'
  }
}
