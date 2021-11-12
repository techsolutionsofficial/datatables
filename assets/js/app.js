// $(document).ready(function () {
//     $('.myTable').DataTable({
//         dom: 'Bfrtip',
//         buttons: [
//             'copy', 'csv', 'excel', 'pdf', 'print'
//         ]
//     });
// });
$(document).ready(function () {
    $('.myTable').DataTable({
        order: [
            [3, 'desc'],
            [0, 'asc']
        ],
        dom: 'Bfrtip',
        buttons: {
            buttons: [{
                    extend: 'copy',
                    className: 'btn btn-sm btn-success'
                },
                {
                    extend: 'csv',
                    className: 'btn btn-sm btn-danger'
                },
                {
                    extend: 'excel',
                    className: 'btn btn-sm btn-primary'
                },
                {
                    extend: 'pdf',
                    className: 'btn btn-sm btn-warning'
                },
                {
                    extend: 'print',
                    className: 'btn btn-sm btn-info'
                }
            ]
        }

    });
});