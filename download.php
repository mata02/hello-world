<?php

public function downloadFile(Request $request)
 {
    $disk = Storage::disk('s3');
    // １．ファイルの名前をURIや、リクエストなどで渡す
    $file_name = $request->input('file_name')
　　// ２．アップロードしたいディレクトリのパス
    $s3_dir_pash = 'upload/';
　　// １と２をあわせて、アップロード先パスを指定
    $s3_file_pash = $s3_dir_pash.$file_name; //'upload/5007.jpg'
    // ダウンロードする際のファイル名を、Content-Dispositionで指定
    $headers = [
        'Content-Type' => 'application/pdf',
        'Content-Disposition' => 'attachment; filename="' . $file_name . '"'
    ];
 
     return \Response::make($disk->get($s3_file_pash), 200, $headers);
　　 //$disk->download($s3_file_pash, $file_name, $headers);
     //↑の書き方でも良いが、日本語のファイル名でダウロードすると、The filename fallback must only contain ASCII characters.になってしまう。
 }
