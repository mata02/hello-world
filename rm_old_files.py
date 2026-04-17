import time
from pathlib import Path

def rm_old_files(target, days=1):
    path = Path(target)
    if not path.exists():
        return 

    # 現在時刻（秒）を取得
    now = time.time()
    # 指定日数を秒に変換
    threshold = days * 24 * 60 * 60
    
    # rglob("*") で再帰的にすべてのファイル・ディレクトリを取得
    for fp in path.rglob("*"):
        # ファイルのみを対象とする（ディレクトリを除外）
        if fp.is_file():
            # 現在時刻との差が指定秒数を超えていたら削除
            if now - fp.stat().st_mtime > threshold:
                try:
                    fp.unlink()
                except Exception as e:
                    print(f"Failed to delete {fp}: {e}")

# 実行（削除したいディレクトリのパスを指定）
rm_old_files("path/to/your/directory")
