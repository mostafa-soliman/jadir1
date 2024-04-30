// =============  Data Table - (Start) ================= //

$(document).ready(function(){

    var table = new DataTable('#myTable', {
        layout: {
            topStart: {
                buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
            }
        },
        language: {
            url: '//cdn.datatables.net/plug-ins/2.0.1/i18n/ar.json',
        },
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
    });

    table.buttons().container()
    .appendTo('#myTable_wrapper .col-md-6:eq(0)');
});

// =============  Data Table - (End) ================= //