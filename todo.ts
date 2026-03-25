// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      '/_nuxt/**': { headers: { 'Set-Cookie': '' } },
      '/_ipx/**': { headers: { 'Set-Cookie': '' } },
      '/_i18n/**': { headers: { 'Set-Cookie': '' } },
      '/_fonts/**': { headers: { 'Set-Cookie': '' } },
    },
  },
})
