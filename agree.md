# 利用規約の表示
* 初回ログイン時
* 前回ログインから1年以上経過している時
* 利用規約改定日以降の初回ログイン時

# 初期表示
* system_parameterからURLと改定日を取得
* ctpに埋め込み
* ready時にCookie読み込み(js)
  * 存在しないor同意日<=改定日の場合は、利用規約表示CB:OFF(js)
  * 存在するand同意日>改定日の場合は、利用規約非表示CB:ON(js)
* submit時にCookie書き込み(js)
