# app client
* Do not use appl_sec

# config/aws.php
```php
<?php

use Aws\Laravel\AwsServiceProvider;

return [

    'region' => env('AWS_REGION', env('AWS_DEFAULT_REGION')),

];
```

# Console
```php
        $cip = \AWS::createClient('CognitoIdentityProvider');
```

# front
* https://jun-app.com/articles/nuxt-auth-middleware
* https://reffect.co.jp/vue/nuxt-js-auth-setting-with-backend

