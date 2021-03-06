ng-redmine-admin
================

篠宮樹里「絵子よ、[Angular](https://angular.io/) で [Redmine](https://www.redmine.org/) のフロントエンドアプリケーションを作ってみたぞ」  
瀬尾絵子「おー。おめでとー」

## Description

## Usage

### 環境構築

絵子「さっそく使ってみよう！」
樹里「まず、[Node.js](https://nodejs.org/ja/) と [npm](https://www.npmjs.com/) 、
[Angular CLI](https://cli.angular.io/) がセットアップされていない人はさっさとセットアップするように」  
絵子「はーい」

* まずNode.jsのインストーラーを実行したあとに、`npm install -g @angular/cli` とコマンドを入力してAngular CLIをインストールします。

### 設置

樹里「準備ができたら、さっそくアプリをダウンロードしよう」

`git clone https://github.com/8amjp/ng-redmine-admin.git`

絵子「gitをインストールしていない人は、ZIPファイルをダウンロードして解凍してもOKだよ」

### 準備

樹里「次に、必要なモジュールを追加しよう。ng-redmine-adminディレクトリに移動し、次のコマンドを実行する」

`npm install`

絵子「いろいろダウンロードしだしたぞ。けっこう時間かかるもんだね……」  
樹里「それから、 `/src/environments/environment.ts` を環境に応じて編集する必要がある」

* `redmine_protocol` と `redmine_host_name` の値にRedmineのプロトコル、URLを記述します。
* `redmine_api_key` の値にRedmineのシステム管理者アカウントのAPIキーを記述します。

### Redmine側の準備

樹里「Redmine側でも準備がいる。管理画面で、『RESTによるWebサービスを有効にする』をオンにしよう。それから、CORS(オリジン間リソース共有)を使用した要求に応答させる設定が必要だ」  
絵子「どうやったらいいの？」  
樹里「方法はいろいろあるが、セキュリティ面に目をつぶれば、Redmineが稼働しているWebサーバーの設定ファイル(Apacheならhttpd.conf)を書き換えてしまうのが最も簡単だ」

```
Header always set Access-Control-Allow-Origin "*" 
Header always set Access-Control-Allow-Methods "OPTIONS, PUT" 
Header always set Access-Control-Max-Age "60" 
Header always set Access-Control-Allow-Headers "Content-Type, X-Redmine-API-Key" 
RewriteEngine On 
RewriteCond %{REQUEST_METHOD} OPTIONS 
RewriteRule ^(.*)$ $1 [R=200,L] 
```

樹里「これをhttpd.confの末尾に追記すると、あらゆるドメインからのアクセスも受け付け、X-Redmine-API-Keyというリクエストヘッダーを許可し、さらにすべてのOPTIONSメソッドのリクエストに対しステータスコード200を返す」  
絵子「ザル警備だね……」

### 起動

絵子「さて、準備できたよ」  
樹里「では、さっそく起動しよう」

`ng s`

樹里「起動したら、Webブラウザでアクセスしてみよう。通常は `http://localhost:4200/` だ」  
絵子「……おー、表示されたよ！　樹里すごーい！」

## Todo

- [ ] ログイン画面
- [ ] チケットの新規登録画面
- [ ] レポート画面
- [ ] フィルタ項目の追加

樹里「まだまだ完成には程遠いが、気長に開発していこう」  
絵子「がんばって！」

## Author

[8amjp](https://github.com/8amjp)
