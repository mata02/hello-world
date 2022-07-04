# front
* https://jun-app.com/articles/nuxt-auth-middleware
* https://reffect.co.jp/vue/nuxt-js-auth-setting-with-backend
```javascript
nuxt.config.js

router: {
    middleware: ['auth']
  },
```
```javascript
middleware/auth.js

export default function ({ store, redirect }) {
    if (!store.state.user && route.path !== '/login') {
        redirect('/login');
    }
}
```

