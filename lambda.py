import boto3
from boto3.s3.transfer import TransferConfig
from botocore.config import Config

# S3 Transfer Acceleration を有効化
ta_config = Config(s3={'use_accelerate_endpoint': True})
s3 = boto3.client('s3', config=ta_config)

# 約2GBの大きなファイルを効率的に分割ダウンロードするための設定
# multipart_chunksize: 分割サイズ（8MB）、max_concurrency: 並列数（8）
transfer_config = TransferConfig(
    multipart_chunksize=8 * 1024 * 1024,
    max_concurrency=8
)

bucket_name = 'あなたのバケット名'
object_key = 'ダウンロードするファイルのキー'
file_name = '保存先のファイル名'

# 高速ダウンロードの実行
s3.download_file(
    bucket_name, 
    object_key, 
    file_name, 
    Config=transfer_config
)
