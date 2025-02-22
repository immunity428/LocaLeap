#!/usr/bin/bash
log_file="test.log"
echo -n 解析したいファイル名を入力してください:
read log_file

log_path="files/$log_file"

# ファイル存在確認
if [ ! -f "$log_path" ]; then #-f パスが通常のファイルであるかどうか
    echo "エラー: ファイルが見つかりません: $log_path"
    exit 1 #終了
fi

# ファイルが空か確認
if [ ! -s "$log_path" ]; then #-s ファイルサイズの確認
    echo "エラー: ファイルが空です: $log_path"
    exit 1 #終了
fi

echo "アクセス回数が多いIPアドレス Top5件"

# IPアドレスの集計とランキング表示
awk '{print $1}' "$log_path" |
    uniq -c | sort -nr | head -n 5 |
    awk '{
    rank = NR; # 現在の行番号を順位として取得
    printf "%d位: %-15s 回数: %d\n", rank, $2, $1
}'
