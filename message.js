メッセージ域を<div class="modal-body">内に定義する

$('#select').on('change', function() {
  $('#container').waitMe();
  $('.modal-master').load('/not/here body', 'modal', function(response, status, xhr) {
    if (status === 'success') {
      $('#addnewWindow').modal('show');
      $('#container').waitMe("hide");
    } else {
      $('#container').waitMe("hide");
      ajaxFail(xhr.statusText, 'E', '通信エラーが発生しました。');
    }
  });
});
