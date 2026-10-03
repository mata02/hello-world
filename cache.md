# メソッドの変更
* Cache::remember()はCache::flexible()に変更

|item|1st|2nd|
|--|--|--|
|jwks|3600|5400|
|token|?|?|
|s3-{project}|600|900|

# ドライバの変更
* [Cacheテーブル](https://github.com/laravel/laravel/blob/12.x/database/migrations/0001_01_01_000001_create_cache_table.php) の作成
```bash
php artisan make:cache-table
php artisan migrate
```
* config/cache.php CACHE_STOREを「database」に変更
```php
return [
    'default' => env('CACHE_STORE', 'database'),

    'stores' => [
        'database' => [
            'driver' => 'database',
            'connection' => env('DB_CACHE_CONNECTION'),
            'table' => 'cache',
            'lock_connection' => env('DB_CACHE_LOCK_CONNECTION'),
            'lock_table' => 'cache_locks',
            'events' => false,
        ],
    ],

    'prefix' => env('CACHE_PREFIX', Str::slug((string) env('APP_NAME', 'laravel')).'-cache-'),

];
```

# 期限切れの削除
* ユーザークリーンアップCLIに期限切れの削除を追加
```php
$deletedCount = \DB::table('cache')
    ->where('expiration', '<', time())
    ->delete();
```
