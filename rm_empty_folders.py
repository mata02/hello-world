import os
from pathlib import Path

def rm_empty_folders(target):
    path = Path(target)
    if not path.exists():
        return 

    # topdown=Falseで深い階層から順に処理
    for dirpath, dirnames, filenames in os.walk(path, topdown=False):
        # サブフォルダが空、かつファイルも存在しない場合
        if not dirnames and not filenames:
            try:
                os.rmdir(dirpath)
                print(f"Deleted: {dirpath}")
            except OSError as e:
                print(f"Failed to delete. {dirpath} ({e})")

rm_empty_folders('./target_folder')
