
function selectedRowById(selector, id) {
    var rows = $(selector).jqxGrid('getdisplayrows');
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        if (row.id === id) {
            $(selector).jqxGrid({ selectedrowindex: row.boundindex});
            return;
        }
    }
    return;
}
