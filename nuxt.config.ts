export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  experimental: {
    headNext: true,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
  ],
  css: [
    '@fontsource/indie-flower',
    '@fontsource/mononoki',
    '@fontsource/montserrat-alternates',
    '@fontsource/delius-unicase',
  ],
  colorMode: {
    classSuffix: '',
  },
  content: {
    highlight: {
      theme: 'css-variables',
    },
  },
  unocss: {
    preflight: true,
  },
})
