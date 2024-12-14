# Localeapインターン

## 開発ルール

### フォーマット: [Type]:[Title]
**例: `feat:ログイン機能の実装をする`**  

### Type
**chore**  
タスクファイルなどプロダクションに影響のない修正

**docs**  
ドキュメントの更新  

**feat**  
ユーザー向けの機能の追加や変更  

**fix**  
ユーザー向けの不具合の修正  

**refactor**  
リファクタリングを目的とした修正  

**style**  
フォーマットなどのスタイルに関する修正  

**test**  
テストコードの追加や修正  
***
### ブランチ
feature: 新機能開発を行う際のブランチ  
hotfix:バグ修正を行う際のブランチ  
例: `feature/[ディレクトリ名]/[title]`  
***


### 開発日報

### 2024/12/09

**作業時間**  
17:30~18:30  

**作業内容**  
問2-の技術選定デザインの作成  

**参考にしたwebページ等**  
【Vite + React】3分で使えるようになるVite + React入門（初心者向け）  
https://monotein.com/blog/react-vite-how-to-use  

Webサーバーのアクセスログをスクリプトで解析してみた  
https://qiita.com/tbtakhk/items/63e022861aa969ea3e69  

**感想**  
初めて使う記述やツールなため手こずるところがいくつかあり予想以上
に苦労した
***

### 2024/12/11

**作業時間**  
19:30~21:30  

**作業内容**  
簡易的なhtml  
一日分の天気の出力  

**参考にしたwebページ等**  
PlayGround フロントエンドコースReact資料  

React公式ドキュメント  

無料天気予報API【OpenWeatherMap】を使って天気予報サイトデモを作ってみた  
https://hibi-update.org/blog/openweathermap-api/  

OpenWeatherのAPIを使ってみる  
https://dev.classmethod.jp/articles/openweather_-pyowm/  

【JavaScript】Weather App開発でAPIを使ってみた話  
https://qiita.com/Tun/items/b8aacea7d92dbe394201  

**感想**  
何から手を付ければいいのか分からずReactの公式ドキュメントやPGの資料を基に見よう見まねで書いてみたもののわからない部分があったので理解しておきたい。  
また今日やった内容は基礎でしかないので今後も改良を続けたい  
***

### 2024/12/12

**作業時間**
19:30~21:30

**作業内容**
5日分の天気の出力
map関数について学ぶ
toLocaleDateStringについて

**参考にしたwebページ等**  

【JavaScript】toLocaleDateStringで日付フォーマット 🗓  
https://qiita.com/__knm__/items/3c7466a19abdf5192d11  

JSの最強日付フォーマットは「toLocaleDateString」  
https://blog.turai.work/entry/20230520/1684593880  

Reactでmap関数について勉強したのでまとめてみる  
https://qiita.com/scythercas/items/9a45e90647ec39121fa5  

【初心者向け】Pythonのmap関数とは？基本的な使い方を解説  
https://www.tech-teacher.jp/blog/python-map/  

**感想**  
作りたい機能を思いついてもどう作ればいいのか分からないことが増えたため
chatgptを利用しコードを生成してそれを見て学ぶことが増えたが、
この方法は調べることの時短にはなるが、調べる力など、
いろいろな物を失っているように感じた。
***

### 2024/12/13

**作業時間**  
19:00~21:30  

**作業内容**  
cssの追加  
map関数について学ぶ  
環境変数を使う  

**参考にしたwebページ等**  
Vite ＋ React + TypeScript で 環境変数ファイルを作成する  
https://zenn.dev/longbridge/articles/575190b038f805  

vite公式ドキュメント  
https://ja.vite.dev/guide/env-and-mode  

Reactで環境変数を読み込む【開発・本番で切り替え可能】  
https://ralacode.com/blog/post/use-env-variables-in-react/  

[Git] .gitignoreの仕様詳解  
https://qiita.com/anqooqie/items/110957797b3d5280c44f  

Gitのコミットメッセージの書き方（2023年ver.）  
https://zenn.dev/itosho/articles/git-commit-message-2023  

Markdown記法 チートシート  
https://qiita.com/Qiita/items/c686397e4a0f4f11683d  

基本的な書き方とフォーマットの構文
https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax  

Git勉強会資料  
https://www.canva.com/design/DAGF-AuMlwc/mZiUjyUBUWAqrqF9mobi6g/view#48  

チーム開発においてGit初心者が踏みがちな地雷まとめ  
https://techracho.bpsinc.jp/morimorihoge/2020_09_09/16856

**感想**  
たまたまXで見かけた記事でREADMEの書き方やコミットメッセージのルールの存在に気が付いたので改善することにしました。
これからは今回学んだルールや書き方などにもしっかりと意識しつつ
チームや複数人での開発のマナーなど知っていきたいと思いました。  

**追記**  
早急にgithubやgitの使い方を勉強する  
本当に改善しないと重症  
コミットメッセージやブランチを作る作らないの判断など
意識して調べて改善していく


***
### 2024/12/14

**作業時間**  
18:30~21:00 

**作業内容**  
gitについての勉強(suwageeksを参考)  
Reactでのtodolistの制作  

**参考にしたwebページ等**  
【React】ToDoリストを作ってみた  
https://qiita.com/hiizkk/items/c419d0aafd1fd1071875  

なぜReactではアロー関数を使うのか  
https://qiita.com/obake_fe/items/f0d9855e6b55b40b35b8  

REACTで頻出のJavaScript記法① arrow関数/Export,Import/ コールバック関数  
https://zenn.dev/airiswim/articles/810ada777371ae  

**感想**  
思っていたよりToDoリストの機能追加に苦労した。  
具体的には、リストは5日後まであるため、何日目のリストの何番目に変更を加えるには  
どうしようか迷った。  
ほかにも、変数や関数目などの命名で名前が似ているものが増え  
見にくくなるように感じてきたので改善したい。
