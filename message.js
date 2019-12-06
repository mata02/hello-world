$(".modal-body").load("/not-here.php", "modal", function(response, status, xhr) {
  $(container).waitMe("hide");
});
