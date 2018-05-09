ng-redmine-admin
================

篠宮樹里「絵子よ、[Angular](https://angular.io/) で [Redmine](https://www.redmine.org/) のフロントエンドアプリケーションを作ってみたぞ」  
妹尾絵子「おー。おめでとー」

## Description

## Usage

### 環境構築

樹里「[Node.js](https://nodejs.org/ja/) と [npm](https://www.npmjs.com/) 、
[Angular CLI](https://cli.angular.io/) がセットアップされていない人はさっさとセットアップするように」  
絵子「はーい」

* まず、Node.jsのインストーラーを実行したあとに、`npm install -g @angular/cli` とコマンドを入力してAngular CLIをインストールします。

### 設置

樹里「準備ができたら、さっそくアプリをダウンロードしよう」

`git clone https://github.com/8amjp/ng-redmine-admin.git`

絵子「ZIPファイルをダウンロードして、解凍してもOKだよ」

### 準備

樹里「次に、必要なモジュールを追加しよう」

`npm install`

絵子「けっこう時間がかかるね……」  
樹里「それから、 `/src/environments/environment.ts` を環境に応じて編集する必要がある」

* `redmine_protocol` と `redmine_host_name` の値にRedmineのプロトコル、URLを記述します。
* `redmine_api_key` の値にRedmineのシステム管理者アカウントのAPIキーを記述します。

### Redmine側の準備

樹里「Redmine側でも準備がいる。管理画面で、『RESTによるWebサービスを有効にする』をオンにしよう。それから、CORS(オリジン間リソース共有)を使用した要求に応答させる設定が必要だ」  
絵子「どうやったらいいの？」  
樹里「方法はいろいろあるが、セキュリティ面に目をつぶれば、Redmineが稼働しているWebサーバーの設定ファイル(Apacheならhttpd.conf)を書き換えてしまうのが最も簡単だ」

### 起動

絵子「できた！」  
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
