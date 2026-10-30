// plugins/geotiff.ts
import { fromUrl } from 'geotiff'

// 1. $geotiff.fromUrl という構造に合わせて型定義を拡張
declare module '#app' {
  interface NuxtApp {
    $geotiff: {
      fromUrl: typeof fromUrl
    }
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $geotiff: {
      fromUrl: typeof fromUrl
    }
  }
}

// 2. Object構文によるプラグイン定義
export default defineNuxtPlugin({
  name: 'geotiff-loader',
  
  setup() {
    return {
      provide: {
        // geotiff というオブジェクトの中に fromUrl を含める
        geotiff: {
          fromUrl
        }
      }
    }
  }
})
