import time
from pathlib import Path

def rm_old_files(target_dir, days=1):
    # 現在時刻（秒）を取得
    now = time.time()
    # 指定日数を秒に変換
    seconds = days * 24 * 60 * 60
    
    target_path = Path(target_dir)
    
    # rglob("*") で再帰的にすべてのファイル・ディレクトリを取得
    for path in target_path.rglob("*"):
        # ファイルのみを対象とする（ディレクトリを除外）
        if path.is_file():
            # ファイルの更新日時(mtime)を取得
            mtime = path.stat().st_mtime
            
            # 現在時刻との差が指定秒数を超えていたら削除
            if now - mtime > seconds:
                try:
                    path.unlink()
                except Exception as e:
                    print(f"Failed to delete {path}: {e}")

# 実行（削除したいディレクトリのパスを指定）
rm_old_files("path/to/your/directory")
