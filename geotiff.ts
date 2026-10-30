// plugins/geotiff.ts
import { fromUrl } from 'geotiff'

// 1. NuxtApp と Vue インスタンスへ型を拡張
//   「$geotiffFromUrl」という名前で登録する例
declare module '#app' {
  interface NuxtApp {
    $geotiffFromUrl: typeof fromUrl
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $geotiffFromUrl: typeof fromUrl
  }
}

// 2. Object構文によるプラグイン定義
export default defineNuxtPlugin({
  name: 'geotiff-loader',
  
  setup() {
    return {
      provide: {
        // fromUrl 関数だけを provide
        geotiffFromUrl: fromUrl
      }
    }
  }
})
