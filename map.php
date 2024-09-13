use Aws\Middleware;
use Psr\Http\Message\RequestInterface;

$command = $this->getS3Client()->getCommand('GetObject', $options);
$command->getHandlerList()->appendBuild(
    Middleware::mapRequest(function (RequestInterface $request) use ($uploadId, $partNumber) {
        return $request->withUri(
            GuzzleHttp\Psr7\Uri::withQueryValues($request->getUri(),
            [
                'uploadId' => $uploadId,
                'partNumber' => $partNumber
            ])
        );
    }), 'add-uri-query');
