// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-mdi'
  ],
  mdi: {
    cache: false,
    componentName: 'MdiIcon',
    defaultSize: '1em'
  },
})
