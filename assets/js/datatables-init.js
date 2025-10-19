$(document).ready(function() {
  // Only initialize DataTable if the table exists on the page
  if ($('#case-studies-table').length) {
    $('#case-studies-table').DataTable({
      "order": [[ 3, "desc" ]], // Sort by Date Solved in descending
      "responsive": true,
      "columnDefs": [
        { "orderable": false, "targets": 2 } // Disable sorting on the 3rd column (Key Frameworks)
      ],
      "initComplete": function() {
        // Add a wrapper for custom styling
        $('.dataTables_filter input').wrap('<div class="datatable-search-wrapper"></div>');
      }
    });
  }
});