const XLSX = require('xlsx');


const writeToFile = (file,docname) => {
        
    const newWorkBook = XLSX.utils.book_new();
    const newSheet = XLSX.utils.json_to_sheet(file);
    XLSX.utils.book_append_sheet(newWorkBook, newSheet, docname);
    const filename = "output/"+docname + (new Date().getTime()) + '.xlsx';
    XLSX.writeFile(newWorkBook, filename);
}
module.exports = {
    writeToFile
}