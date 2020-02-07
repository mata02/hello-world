$(function() {
 
  // ボタンをクリックしたら発動
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
