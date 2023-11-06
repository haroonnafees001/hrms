export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
    mode:'universal',
    // mode:'spa',
  head: {
    title: 'hrm',
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
    ],
      script: [
          {
              src: "/js/jquery/jquery.min.js"},
          {
              src: "/js/bootstrap.bundle.min.js"
          },
          {
              src: "/js/jquery-easing/jquery.easing.min.js"
          },
          {
              src: "/js/sb-admin-2.min.js"
          },
          {
              src: "/js/datatables/jquery.dataTables.min.js"

          },
          {
              src: "/js/datatables/jquery.dataTables.min.js"
          },
      ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@/assets/css/fontawesome-free/css/all.min.css', '@/assets/css/sb-admin-2.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
