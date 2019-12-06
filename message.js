$('div').load('list.html', function(data, status) {  
  if(status === 'success') { 
    $(container).waitMe("hide");
   }  
});
