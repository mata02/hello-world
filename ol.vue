<script setup>
import { onMounted, ref } from 'vue'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import TileLayer from 'ol/layer/WebGLTile.js'
import GeoTIFF from 'ol/source/GeoTIFF.js'

const mapElement = ref(null)

onMounted(() => {
  if (!mapElement.value) return

  // 1. GeoTIFF ソースの定義（$fetch.raw を使用）
  const geotiffSource = new GeoTIFF({
    sources: [
      {
        url: 'https://example.com',
        loader: async (url, headers, abortSignal) => {
          // 💡 $fetch.raw により標準の Response オブジェクトをそのまま OpenLayers に渡す
          const response = await $fetch.raw(url, {
            headers,
            signal: abortSignal,
          })
          return response
        }
      }
    ]
  })

  // 2. 空のマップを初期化
  const map = new Map({
    target: mapElement.value,
    layers: [], // 状態が 'ready' になってから追加する
    view: new View({
      projection: 'EPSG:3857',
      center:,
      zoom: 2
    })
  })

  // 3. source.getState() の変化を監視する関数
  const checkSourceState = async () => {
    const state = geotiffSource.getState()

    if (state === 'ready') {
      // 💡 最適化: 重複実行を防ぐため、即座にイベントリスナーを解除
      geotiffSource.un('change', checkSourceState)

      try {
        // GeoTIFF のメタデータから自動構成された View オプションを非同期で取得
        const geoTIFFViewOptions = await geotiffSource.getView()
        
        // マップに新しい View を設定
        const newView = new View(geoTIFFViewOptions)
        map.setView(newView)

        // レイヤーを生成してマップに追加
        const tiffLayer = new TileLayer({
          source: geotiffSource
        })
        map.addLayer(tiffLayer)

        // GeoTIFF のデータ範囲（Extent）に画面をフィットさせる
        if (geoTIFFViewOptions.extent) {
          newView.fit(geoTIFFViewOptions.extent, {
            duration: 400, // スムーズなアニメーション（ミリ秒）
            padding:
          })
        }
      } catch (error) {
        console.error('GeoTIFF の View 設定中にエラーが発生しました:', error)
      }
    } else if (state === 'error') {
      // エラー時もリスナーを解除し、適切にハンドリング
      geotiffSource.un('change', checkSourceState)
      console.error('GeoTIFF ソースがエラー状態（error）になりました。URL、CORS、または認証ヘッダーを確認してください。')
    }
  }

  // 4. イベントリスナーを登録
  geotiffSource.on('change', checkSourceState)
})
</script>

<template>
  <div ref="mapElement" class="map-container"></div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 500px;
}
</style>
