# 実装内容
* GeoServerへのリクエスト送信時にAuthorizationヘッダーを付与
（Authorizationヘッダーに設定するトークンは有効期限があるので、必ず送信時に設定する）

* GeoServerヘのアクセスパターンは4種類あり、それぞれ実装が必要

## 1. OpenLayers(axios) ⇒ GeoServer 単発送信
* plugin/axiosで自動設定されるので対処不要

## 2. OpenLayers(axios) ⇒ GeoServer 複数送信
* plugin/axiosで自動設定されるが、有効期限が切れるとトークンリフレッシュも複数実行されるため、
1回だけトークンリフレッシュするように実装する。
（GeoServerへ複数送信する直前でトークンリフレッシュする）

## 3. Cesium ⇒ GeoServer 単発送信
* GeoServerへ送信する直前でutil/request-header#setGsHeadersをCALLし、取得したトークンをAuthorizationヘッダーに付与する。

## 4. Cesium ⇒ GeoServer 複数送信
* GeoServerへ送信する直前でutil/request-header#setGsHeadersをCALLし、取得したトークンをAuthorizationヘッダーに付与するが、
有効期限が切れるとトークンリフレッシュも複数実行されるため、1回だけトークンリフレッシュするように実装する。
（GeoServerへ複数送信する直前でトークンリフレッシュする）


## 補足）トークンのリフレッシュ
トークンを取得する際、トークンの有効期限が切れているとAWS SDKが非同期でトークンをリフレッシュする。
従って有効期限が切れていても再度トークンを取得すると自動でリフレッシュされる。
