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

* DateTimeパラメータはPHPのDateTimeInterface::ATOM形式で送信
```javascript
dayjs().format('YYYY-MM-DDTHH:mm:ssZ') 
```
```php
const string DateTimeInterface::ATOM = "Y-m-d\TH:i:sP";
```

# DL
* dowload modal sample
* title sample
* vehicle no db validate 

# resend
* falsh.success()

# front
* https://jun-app.com/articles/nuxt-auth-middleware
* https://reffect.co.jp/vue/nuxt-js-auth-setting-with-backend

