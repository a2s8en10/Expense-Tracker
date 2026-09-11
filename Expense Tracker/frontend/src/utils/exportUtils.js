import * as XLSX from "xlsx";

export const exportToExcel = (data, filename = "transactions") => {
  if (!data || data.length === 0) {
    alert("No data available to export.");
    return;
  }
  try {
    // create a new workbook and add the data as a worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    // generate a file and trigger the download
    XLSX.writeFile(workbook, `${filename}.xlsx`, {
      bookType: "xlsx",
      type: "array",
    });
  } catch (error) {
    console.error("Error exporting to Excel:", error);
    alert("An error occurred while exporting to Excel. Please try again.");
  }
};
