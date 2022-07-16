    public function download()
    {
        // リクエストクラスで機体番号をバリデーション

        // ダウンロードファイルの存在チェック
        $s3key = $request->input('s3key');
        if (!Storage::disk('s3')->exists($s3key)) {
            // 404エラー
        }

        // S3キーからファイル名を取得
        $filename = basename($s3key);

        // レスポンスヘッダーの作成
        $headers = [
            'Content-Type' => Storage::disk('s3')->mimeType($s3key),
            'Content-Length' => Storage::disk('s3')->size($s3key),
            'Content-Disposition' => 'attachment; filename*=UTF-8\'\''.rawurlencode($filename)
        ];

        // ストリームダウンロード
        return response()->stream(function () {
            return Storage::disk('s3')->get($s3key);
        }, 200, $headers);

        // $s3->download()は日本語のファイル名でダウロードすると、The filename fallback must only contain ASCII characters.になってしまう。
        // return \Response::make($disk->get($s3key), 200, $headers);
    }
