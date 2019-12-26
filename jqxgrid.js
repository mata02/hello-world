$('#jqxGrid').on('rowdoubleclick', function (event) 
{ 
    var args = event.args;
    var boundIndex = args.rowindex;

    $('#updateUser').trigger('click');
});
