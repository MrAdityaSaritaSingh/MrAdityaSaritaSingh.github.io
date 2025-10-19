$(document).ready(function() {
  // Only initialize DataTable if the table exists on the page
  if ($('#case-studies-table').length) {
    $('#case-studies-table').DataTable({
      "paging": false,
      "order": [[ 4, "desc" ]], // Sort by the 5th column (Date Solved) descending
      "info": false, // Hide "Showing X of Y entries"
      "responsive": true,
      "dom": 'ft', // "f" = filter input, "t" = table. Places search at the top.
      "columnDefs": [
        { "orderable": false, "targets": 3 } // Disable sorting on the 4th column (Tags)
      ]
    });
  }
});