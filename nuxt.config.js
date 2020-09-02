export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '甜點電商',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge'
      },
      {
        property: 'og:title',
        content: '甜點電商'
      },
      {
        property: 'og:description',
        content: '六角學院的甜點電商'
      },
      {
        property: 'og:site_name',
        content: '甜點電商'
      },
      {
        property: 'og:locale',
        content: 'zh_TW'
      }
    ],
    link: [{
        rel: 'shortcut icon',
        href: '~/img/favicon_48.ico',
        type: 'image/x-icon'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
        integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
        crossorigin: 'anonymous'
      }
    ]
  },

  // head: {
  //   htmlAttrs: {
  //     lang: 'zh-TW'
  //   },

  // }

  // head: {
  //   title: process.env.npm_package_name || '',
  //   meta: [{
  //       charset: 'utf-8'
  //     },
  //     {
  //       name: 'viewport',
  //       content: 'width=device-width, initial-scale=1'
  //     },
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: process.env.npm_package_description || ''
  //     }
  //   ],
  //   link: [{
  //     rel: 'icon',
  //     type: 'image/x-icon',
  //     href: '/favicon.ico'
  //   }]
  // },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/sass/all.sass'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/proxy',
  ],
  proxy: [
    // Proxies /api/products/*/**.json to http://127.0.0.1:8080
    'http://127.0.0.1:8080/api/products/*/**.json',
  ],
  axios: {},

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  //觀看網站分析，看看網站有哪些不需要的內容https://medium.com/@zx2515296964/nextjs%E7%AD%86%E8%A8%98-%E7%B6%B2%E7%AB%99%E5%84%AA%E5%8C%96-%E6%8F%90%E5%8D%87%E9%80%9F%E5%BA%A6-%E8%AE%93%E4%BD%A0%E7%9A%84%E7%B6%B2%E7%AB%99%E9%A3%9B%E8%B5%B7%E4%BE%86%E5%90%A7-3d37a7e7db2f
  // build: {
  //   // ... 其餘設定 ...
  //   analyze: true,
  //   assetFilter: function (assetFilename) {
  //     return assetFilename.endsWith('.js');
  //   }
  // }
}
