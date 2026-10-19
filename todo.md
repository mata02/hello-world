```json
"scripts": {
    "post-autoload-dump": [
        "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
        "@php artisan env:decrypt --key=\"${LARAVEL_ENV_ENCRYPTION_KEY}\" --force || true",
        "@php artisan package:discover --ansi"
    ]
}
```
