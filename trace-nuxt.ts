// server/plugins/trace-nuxt.ts
import { tracingChannel } from 'node:diagnostics_channel'

interface TraceContext {
  key?: string
  name?: string
  url?: string
  route?: string
  event?: { path?: string }
  plugin?: { name?: string }
  [key: string]: unknown
}

/**
 * 指定した TracingChannel の所要時間を同期・非同期の両対応で計測するヘルパー
 */
function subscribeChannel(
  channelName: string,
  getLabel: (ctx: TraceContext) => string,
) {
  const channel = tracingChannel(channelName)
  const startTimes = new WeakMap<object, number>()
  const isAsyncContexts = new WeakSet<object>()

  const cleanup = (ctx: object) => {
    startTimes.delete(ctx)
    isAsyncContexts.delete(ctx)
  }

  const logDuration = (ctx: TraceContext, mode: 'sync' | 'async') => {
    const startTime = startTimes.get(ctx)
    if (startTime !== undefined) {
      const duration = (performance.now() - startTime).toFixed(2)
      const label = getLabel(ctx)
      console.log(`[${channelName}:${mode}] ${label} - ${duration}ms`)
      cleanup(ctx)
    }
  }

  channel.subscribe({
    start(message) {
      startTimes.set(message as object, performance.now())
    },

    asyncStart(message) {
      isAsyncContexts.add(message as object)
    },

    end(message) {
      const ctx = message as TraceContext
      if (!isAsyncContexts.has(ctx)) {
        logDuration(ctx, 'sync')
      }
    },

    asyncEnd(message) {
      logDuration(message as TraceContext, 'async')
    },

    error(message) {
      const ctx = message as TraceContext & { error?: unknown }
      const startTime = startTimes.get(ctx)
      const duration = startTime !== undefined
        ? `${(performance.now() - startTime).toFixed(2)}ms`
        : 'N/A'
      const label = getLabel(ctx)
      console.error(`[${channelName}:error] ${label} (${duration})`, ctx.error)
      cleanup(ctx)
    },
  })
}

export default defineNitroPlugin(() => {
  // 1. データ取得の計測 (useFetch / useAsyncData)
  subscribeChannel('nuxt.data', (ctx) => {
    return `key="${ctx.key ?? 'unknown'}"`
  })

  // 2. SSR レンダリング全体の計測
  subscribeChannel('nuxt.render', (ctx) => {
    const target = ctx.url ?? ctx.event?.path ?? ctx.route ?? 'unknown'
    return `url="${target}"`
  })

  // 3. Nuxt プラグイン実行の計測
  subscribeChannel('nuxt.plugin', (ctx) => {
    const name = ctx.name ?? ctx.plugin?.name ?? 'unknown'
    return `name="${name}"`
  })
})
