https://qiita.com/ucan-lab/items/8eab84e37421f907dea0

```shell
$ composer remove --dev laravel-lang/lang laravel-lang/publisher
$ composer require --dev laravel-lang/lang laravel-lang/publisher
$ php artisan lang:add ja
$ php artisan lang:add en

$ composer remove --dev laravel-lang/lang laravel-lang/publisher laravel-lang/http-statuses
$ rm -f config/lang-publisher.php
```
