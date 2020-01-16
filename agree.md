# 利用規約の表示
* 初回ログイン時
* 前回ログインから1年以上経過している時
* 利用規約改定日以降の初回ログイン時

# 初期表示
* system_parameterからURLと改定日を取得し、ctpに埋め込み
* ready時にCookie読み込み(js)
  * 存在しないor同意日<=改定日の場合は、利用規約表示CB:OFF(js)
  * 存在するand同意日>改定日の場合は、利用規約非表示CB:ON(js)
* submit時にCookie書き込み(js)
```php
if (Browser !== "Chrome") {
  if (Browser !== "Safari") {
    // NG other
  } else {
    if (Platform !== "iOS" && Platform !=="ipadOS") {
      // NG Safari and !iOS and !ipadOS
    } else {
      // OK Safari and (iOS or ipadOS)
    }
  }
} else {
  // OK Chrome
}

Browser="Safari"
Browser="Chrome"
Platform="iOS"
Platform="ipadOS"
```
