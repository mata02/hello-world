// ログイン
// * 利用規約デフォルト値ON
// * 利用規約prop設定変更
// 高さ計算
// * outerHeight(true)
// splitter幅指定
// * 99.9%
// ユーザマスタ
// * 作業者略名：作業者マスタの同一所属区分内でユニーク
// 作業者マスタ
// * 作業者名：作業者マスタの同一所属区分内でユニーク
// * 作業者略名：作業者マスタの同一所属区分内でユニーク
// * ユーザー->システム利用者
// 所属区分
// * 所属区分名：所属区分マスタ内でユニーク
$(function() {
  $('#btn').click(function() {
    // もしチェックが入っていたら
    if ($('input[name="check"]').prop('checked')) {
      // チェックを外す
      $('input[name="check"]').prop('checked', false);
    // もしチェックが外れていたら
    } else {
      // チェックを入れる
      $('input[name="check"]').prop('checked', true);
    }
  });
});
