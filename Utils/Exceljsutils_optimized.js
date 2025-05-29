const Exceljs = require('exceljs')

async function excelwrite(searchText, replaceText, Filepath)
{
const Workbook= new Exceljs.Workbook()
await Workbook.xlsx.readFile(Filepath)  
const worksheet = Workbook.getWorksheet("Sheet1")
const output= await excelread(worksheet,searchText) 
const cell = worksheet.getCell(output.row,output.column)
cell.value =replaceText
await Workbook.xlsx.writeFile(Filepath) 
}


async function excelread(worksheet,searchText)
{
    let output ={row:1, column:1,price}  //object declaration  
    worksheet.eachRow((row,rowNumber)=>    //  rowwise 
    {
        row.eachCell((cell,ColNumber)=>     // column wise
        {
            if (cell.value === searchText)
            {
                output.row=rowNumber
                output.column=ColNumber 
                                           
            }    
        })    
    })
    return output
}
excelwrite("Iphone","Samsung","C:/Playwright/Exceltest.xlsx")
