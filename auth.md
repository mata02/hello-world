# MR
* whenは複数使用せずに第2引数にtruthy、第3引数にfalsyを指定する
```php
$users = DB::table('users')
                ->when($sortByVotes, function ($query, $sortByVotes) {
                    return $query->orderBy('votes');
                }, function ($query) {
                    return $query->orderBy('name');
                })
                ->get();
```

# DL
* dowload modal sample
* title sample
* vehicle no validate 

# front
* https://jun-app.com/articles/nuxt-auth-middleware
* https://reffect.co.jp/vue/nuxt-js-auth-setting-with-backend

