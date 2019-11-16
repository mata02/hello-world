document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM fully loaded and parsed");
}, false);
window.addEventListener('load', function(event) {
    console.log("All resources finished loading!");
}, false);
/*
* inlineスタイルはそのまま
* toggle設定はhideWaitMe()の直前（ctpは削除）
* Globalize.culture設定はそのままイベント登録しない
* メニューコンテンツはctp内で取得（Controller内での設定は削除）
* ログインユーザ名は<h5 class="dropdown-header">Dropdown header</h5>
* メッセージ定義ファイルの同期確認
*/
