use Illuminate\Support\Facades\Storage;

$disk = Storage::build([
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION'),
    'bucket' => env('AWS_BUCKET'),
    'use_accelerate_endpoint' => true, // ここを true に設定
]);

// 高速化されたエンドポイントを使用してアップロード
$disk->put('filename.jpg', $fileContents);
