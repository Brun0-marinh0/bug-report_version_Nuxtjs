export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bugas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon/bugIcon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css', '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'vue-toastification/nuxt'
  ],
  styleResources: {
    // your settings hereJ
    scss: ['@/components/bosons/*.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      theme_color: '#262130',
      name: 'bugas',
      author: 'Bruno&Paula'
    },
    manifest: {
      lang: 'pt-br',
    },
    icon:{
      source: '/icon/bugIcon.svg',
      filename: 'bugIcon.svg'
    },
  },

  ssr: false,
  server: {
    port: 3000, // valor padrão: 3000
    host: '0.0.0.0', // valor padrão: localhost,
    timing: false
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
