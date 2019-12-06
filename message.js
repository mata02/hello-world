$('#container').waitMe();
$('.modal-body').load('/not-here.php', 'modal', function(response, status, xhr) {
  $('#addnewWindow').modal('show');
  $('#container').waitMe("hide");
});
