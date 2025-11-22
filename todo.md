* GETパラメーターはqueryで指定
```typescript
const param1 = ref('value1')
const { data, status, error, refresh } = await useFetch('/api/modules', {
  query: { param1, param2: 'value2' },
})
```

* Singleton Data Fetching Layer
```typescript
export default defineNuxtConfig({
  experimental: {
    granularCachedData: true,
    purgeCachedData: true,
  },
})
```
* Shared Prerender Data
```typescript
export default defineNuxtConfig({
  experimental: {
    sharedPrerenderData: true,
  },
})
```
* Default data and error values in useAsyncData and useFetch
```typescript
export default defineNuxtConfig({
  experimental: {
    defaults: {
      useAsyncData: {
        value: 'undefined',
        errorValue: 'undefined',
      },
    },
  },
})
```
* Respect defaults when clearing data in useAsyncData and useFetch
```typescript
export default defineNuxtConfig({
  experimental: {
    resetAsyncDataToUndefined: false,
  },
})
```
* Alignment of pending value in useAsyncData and useFetch
```typescript
export default defineNuxtConfig({
  experimental: {
    pendingWhenIdle: false,
  },
})
```
* Key Change Behavior in useAsyncData and useFetch
```typescript
// Or globally in your Nuxt config
export default defineNuxtConfig({
  experimental: {
    alwaysRunFetchOnKeyChange: false,
  },
})
```
* Shallow Data Reactivity in useAsyncData and useFetch
```typescript
export default defineNuxtConfig({
  experimental: {
    defaults: {
      useAsyncData: {
        deep: false,
      },
    },
  },
})
```
