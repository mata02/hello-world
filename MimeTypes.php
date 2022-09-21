private const REVERSE_MAP = [
  'text' => ['text/plain'],
  'csv' => ['text/csv', 'application/csv', 'text/x-comma-separated-values', 'text/x-csv'],
  'zip' => ['application/zip', 'application/x-zip', 'application/x-zip-compressed'],
];

# ファイル配列のバリデーション（配列数）
* バリデーションエラー:400（全エラー）
* エラー検知後は終了

# デコードファイルのバリデーション（MIMEタイプ、デコードサイズ）
* 全ファイルが検証対象
* エラー検知後もバリデーションは続行し、バリデーション後に終了
* バリデーションエラー:400（全エラー）

# 機体、総飛行時間登録
* 内部エラー:500（全エラー）
* エラー検知後は終了

# S3アップロード
* 内部エラー:500（一部エラー、全エラー）
* エラー検知後も処理継続

# 飛行記録登録
* 内部エラー:500（一部エラー、全エラー）
* エラー検知後も処理継続
