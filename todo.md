* GETパラメーターはqueryで指定
```typescript
const param1 = ref('value1')
const { data, status, error, refresh } = await useFetch('/api/modules', {
  query: { param1, param2: 'value2' },
})
```

* [Singleton Data Fetching Layer](https://nuxt.com/docs/3.x/getting-started/upgrade#singleton-data-fetching-layer)
```typescript
export default defineNuxtConfig({
  experimental: {
    granularCachedData: true,
    purgeCachedData: true,
  },
})
```
* [Shared Prerender Data](https://nuxt.com/docs/3.x/getting-started/upgrade#shared-prerender-data)
```typescript
export default defineNuxtConfig({
  experimental: {
    sharedPrerenderData: true,
  },
})
```
* [Default data and error values in useAsyncData and useFetch](https://nuxt.com/docs/3.x/getting-started/upgrade#default-data-and-error-values-in-useasyncdata-and-usefetch)
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
* [Respect defaults when clearing data in useAsyncData and useFetch](https://nuxt.com/docs/3.x/getting-started/upgrade#respect-defaults-when-clearing-data-in-useasyncdata-and-usefetch)
```typescript
export default defineNuxtConfig({
  experimental: {
    resetAsyncDataToUndefined: false,
  },
})
```
* [Alignment of pending value in useAsyncData and useFetch](https://nuxt.com/docs/3.x/getting-started/upgrade#alignment-of-pending-value-in-useasyncdata-and-usefetch)
```typescript
export default defineNuxtConfig({
  experimental: {
    pendingWhenIdle: false,
  },
})
```
* [Key Change Behavior in useAsyncData and useFetch](https://nuxt.com/docs/3.x/getting-started/upgrade#key-change-behavior-in-useasyncdata-and-usefetch)
```typescript
// Or globally in your Nuxt config
export default defineNuxtConfig({
  experimental: {
    alwaysRunFetchOnKeyChange: false,
  },
})
```
* [Shallow Data Reactivity in useAsyncData and useFetch](https://nuxt.com/docs/3.x/getting-started/upgrade#shallow-data-reactivity-in-useasyncdata-and-usefetch)
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
