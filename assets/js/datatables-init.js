/**
 * Initializes DataTables on any table with the class 'datatable'.
 *
 * This script is designed to be reusable and robust. It automatically finds the
 * 'Date Solved' column for default sorting, so it won't break if you add or
 * remove columns.
 */
$(document).ready(function () {
    const dataTableSelector = ".datatable";

    // Only run if a datatable exists on the page
    if ($(dataTableSelector).length) {
        /**
         * Finds the index of a column by its header text.
         * @param {jQuery} table - The jQuery object for the table.
         * @param {string} headerText - The text to search for in the <th> elements.
         * @returns {number} - The 0-based index of the column, or 0 if not found.
         */
        const getColumnIndexByHeaderText = (table, headerText) => {
            let columnIndex = 0; // Default to first column
            table.find("thead th").each(function (index) {
                if ($(this).text().trim() === headerText) {
                    columnIndex = index;
                    return false; // Break the loop
                }
            });
            return columnIndex;
        };

        const table = $(dataTableSelector);
        const dateColumnIndex = getColumnIndexByHeaderText(
            table,
            "Date Solved"
        );

        // Configuration options for the DataTable
        const dataTableOptions = {
            // Default sort by the 'Date Solved' column, descending
            order: [[dateColumnIndex, "desc"]],
            info: false,
            paging: false,

            // Enable responsive behavior
            responsive: true,

            // Define the layout of the controls (search, pagination, etc.)
            // Uses Bootstrap-style row/col wrappers for proper alignment.
            dom:
                "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
                "<'row'<'col-table-row'tr>>" +
                "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        };

        // Initialize the DataTable
        table.DataTable(dataTableOptions);
    }
});
