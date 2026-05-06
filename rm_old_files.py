import time
from pathlib import Path

def rm_old_files(target, days=1):
    path = Path(target)
    if not path.exists():
        return 

    # 現在時刻（秒）を取得
    now = time.time()
    # 指定日数を秒に変換
    threshold = now - (days * 24 * 60 * 60)
    
    # rglob("*") で再帰的にすべてのファイル・ディレクトリを取得
    for file_path in path.rglob("*"):
        # 現在時刻との差が指定秒数を超えていたら削除
        if file_path.is_file() and file_path.stat().st_mtime < threshold:
            try:
                file_path.unlink()
                print(f"Deleted: {file_path}")
            except Exception as e:
                print(f"Failed to delete {file_path}: {e}")

# 実行（削除したいディレクトリのパスを指定）
rm_old_files("path/to/your/directory")
