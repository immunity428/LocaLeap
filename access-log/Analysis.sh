#!/bin/bash

# ログファイルのパス
log_file="access.log"

echo "アクセス回数が多いIPアドレス Top5"

awk '{print $1}' "$log_file" |
    uniq -c | sort -nr | head -n 5 |
    awk '{
    rank = NR; # 現在の行番号を順位として取得
    printf "%d位: %-15s 回数: %d\n", rank, $2, $1
}'

# uniq -c 出現回数をカウントし、カウント数を行の先頭に出力
# sort -nr n:数値順, r:降順　で並べ替え
# awk 一言で言えばC言語にできる
# head -n 5 Top5のみ表示
# %-15 15 文字分の幅で表示
# awk '{print $1}' 最初のフィールド（$1）を抽出
