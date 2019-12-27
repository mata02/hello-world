function getRowIndex(id) {
    var rows = $('#jqxgrid').jqxGrid('getdisplayrows');
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        if (row.id === id) {
          return row.boundindex;
        }
    }
    return null;
}
