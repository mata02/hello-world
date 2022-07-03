# front
* /homeにショートカット表示
* https://jun-app.com/articles/nuxt-auth-middleware
* https://reffect.co.jp/vue/nuxt-js-auth-setting-with-backend
```javascript
nuxt.config.js

router: {
    middleware: ['auth']
  },
```
```javascript
login/index.vue

export default {
    auth: false
}
```
```javascript
middleware/auth.js

export default function ({ store, redirect }) {
    if (!store.state.user && route.path !== '/login') {
        redirect('/login');
    }
}
```
 
# back
* user()の取得項目にvariantを追加
* 例外除外リストからAuthenticationExceptionを除外
```php
app/Exceptions/Handler.php

    protected $internalDontReport = [
//        AuthenticationException::class,
        AuthorizationException::class,
        HttpException::class,
        HttpResponseException::class,
        ModelNotFoundException::class,
        MultipleRecordsFoundException::class,
        RecordsNotFoundException::class,
        SuspiciousOperationException::class,
        TokenMismatchException::class,
        ValidationException::class,
    ];
```
* mobile_app_packagesにapi_download(bigint)とbrowser_download(bigint)を追加（初期値:0）
