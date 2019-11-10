var csrf = $('#form1 input:hidden[name=_csrfToken]').val();
$.ajax({
    url: url,
    type: 'post',
    dataType: 'json',
    beforeSend: function(xhr){
        xhr.setRequestHeader('X-CSRF-Token', csrf);
    },
    success : function(data, dataType){
        console.log('成功');
        console.log(data);
    },
    error: function(data, dataType){
        console.log('失敗');
        console.log(data);
    }
});
