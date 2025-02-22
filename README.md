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

**追記**
mergeするブランチを全部間違えて、
mainをマージしてた..............

***
### 2024/12/18

**作業時間**  
18:30~21:00 

**作業内容**  
・access-logの制作


**参考にしたwebサイト**  
【 nl 】コマンド――テキストファイルを行番号付きで出力する  
・https://atmarkit.itmedia.co.jp/ait/articles/1703/30/news024.html  

Linux コマンド一覧表  
・https://qiita.com/savaniased/items/d2c5c699188a0f1623ef  

Linuxでテキストファイルの重複行を抽出・削除する方法（uniqコマンド）  
・https://qiita.com/yasushi-jp/items/4ac23751570a9058b785  

awkの使いかた  
・https://qiita.com/hnishi/items/4ee60ed515470e796f41  

sortコマンドとは？Linuxコマンドでファイルの中身を並び替えする方法をご紹介  
・https://academy.gmocloud.com/wp/know/20210625/12063  

深谷先生のリテラシーの教材

**感想**  
課題になっている機能は出来たがここにどんな機能を付ければ便利になるか迷った
また、issuesを使ってみようと思った。
***
### 2024/12/20

**作業時間**  
15:30 ~ 15:00  
16:30 ~ 18:00  
20:00 ~ 21:30  

**作業内容**  
・access-logの追加機能の実装  
　・ファイルパスにミスがある時とファイルが空の時用のエラーメッセージ  
　・解析したいファイル用のディレクトリを作成しキー入力でディレクトリ内の解析したいファイル名の入力機能の作成  
・weather-siteの追加機能の実装  
　・全角の場合アラートでエラーを分かりやすく伝える  

・READMEの書き方  

**参考にしたwebサイト**  
【シェルスクリプトBash】 if 文（test文）のオプションまとめ  
・https://qiita.com/yaaabu51/items/8758447fa672288f4757  

【Linux】シェルスクリプトでキーボード入力を受付ける方法  
・https://eng-entrance.com/linux-shellscript-keyboard  

　usr/bin/bash と /bin/bash の違い  
・https://zenn.dev/takeo/articles/532898d753b6fc  

　深谷先生のリテラシーの教材  

【JS】Javascript/正規表現/全角チェック/全角文字を含むかの判定方法  
・https://coffeeworks.hatenadiary.jp/entry/2021/07/13/%E3%80%90JS%E3%80%91Javascript/%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%8F%BE/%E5%85%A8%E8%A7%92%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF/%E5%85%A8%E8%A7%92%E6%96%87%E5%AD%97%E3%82%92%E5%90%AB%E3%82%80%E3%81%8B  

　正規表現でテキストが全角のみかチェックする  
・https://blog.kimizuka.org/entry/2020/07/17/190949  


**感想**  
ファイルのパスを指定いやすくなればユーザーにとって使いやすくなるかと思い  
解析したいファイルを保管するディレクトリを作り、そこにパスを事前に合わせておいて  
ユーザにファイル名を入力する形に機能を追加した。  

同じようにweather-siteでも、半角と全角などのよくあるミスようにアラートでエラーを  
ユーザーに分かりやすく伝えれるように追加した。  
全角かどうか判断するための正規表現が人によって異なるため少し迷いどころだった。  

READMEの書き方や内容が分からないので誰かのをたくさん見ていこうと思った。
***

### 2024/12/21

**作業時間**  
17:00 ~ 18:00  
19:00 ~ 20:00

**作業内容**  
・アラートによる警告の後にフォームに入力できなくなるバグがあったため  
　useStateを使って画面上に表示させる形に仕様を変更  
・READMEの更新

**参考にしたwebサイト**  
特になし  


**感想**  
今日の今日までバグを探すことを完全に忘れていたため探してみたところ  
alertで出力した後に、フォームに書き込めなくなる現象が発生していることに気づいたため、  
そのような記事を探したが見つからなかった、おそらく原因はReactでalertを使う時はjsと仕様が  
異なるのでは無いかと思ったが、useStateでも管理できそうだと感じたので仕様変更することにした。  
***

### 2024/12/22

**作業時間**  
17:00 ~ 19:30  

**作業内容**  
・コンポーネントの分割  

**参考にしたwebサイト**  
【React】「困難は分割せよ」―― 複雑な画面は小さな機能に分けて実装しよう。  
・https://qiita.com/honey32/items/2e6206c7dc1974b9bf9a  

React初学者が必ず押さえておきたい考え方とは？【コンポーネント指向のフロントエンド】  
・https://www.i3design.jp/in-pocket/8854  


**感想**  
いろいろな事をしていたらコードが長くなってしまいどこで何をしているのか分かりやすくするためにも  
コンポーネントを分割することにした。Qiitaなどで、どのくらいでわけるべきかいろいろな記事を見たが  
人により個人差があり、分かりにくかったのでchatGPTにコードを投げ、一度分割してもらった。  
そこで生成されたコードを元に分割した。  
やってみて、細かく分けることで管理がしやすくなったのではないかと感じた。  
***

### 2024/12/23

**作業時間**  
11:40 ~ 12:10  

**作業内容**  
・不要なファイルを削除  

**参考にしたwebサイト**  
「【GitHub】gitignoreの設定方法」  
https://qiita.com/nnahito/items/e546b27f73e7be131d4e  

「【Git】.gitignoreの仕様と設定方法」  
https://qiita.com/anqooqie/items/110957797b3d5280c44f  

**感想**  
gitでコードを見ているとふと、node_modulesディレクトリがないと思い調べてみると  
package.json と package-lock.jsonに記録されており、これを使って他の環境で   node_modules を再インストールすることができることや、サイズが大きい事や  
冗長性を避けるためにも.gitignoreに設定しておくべきという事を知った。  
これらの変更をなんてコメントするか迷ったので、とりあえず英語で入れておいたけど、  
良いコミットメッセージやブランチはまだまだなので、いろいろな物を見たい  