document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM fully loaded and parsed");
}, false);
window.addEventListener('load', function(event) {
    console.log("All resources finished loading!");
}, false);
/*
* 名称変更navbar_content,menu_content,menu_list
* inlineスタイルはそのまま
* toggle設定はhideWaitMe()の直前（ctpは削除）
* Globalize.culture設定はそのままイベント登録しない
* メニューリストはctp内で取得（Controller内での設定は削除）
* メッセージ定義ファイルの同期確認
*/
