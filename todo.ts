// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      // /_nuxt/配下の全ファイルに対してヘッダーを削除
      '/_nuxt/**': {
        headers: {
          'Set-Cookie': '', // Set-Cookieヘッダーを空にして削除
        },
      },
    },
  },
})
