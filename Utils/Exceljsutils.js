const Exceljs = require('exceljs')

async function excelread()
{
const Workbook= new Exceljs.Workbook()
await Workbook.xlsx.readFile("C:/Playwright/Exceltest.xlsx")  
const worksheet = Workbook.getWorksheet("Sheet1")
worksheet.eachRow((row,rowNumber)=>    //  rowwise 
{
    row.eachCell((cell,ColNumber)=>     // column wise
    {
console.log(cell.value)
    })

})


}

async function excelwrite()
{
const Workbook= new Exceljs.Workbook()
await Workbook.xlsx.readFile("C:/Playwright/Exceltest.xlsx")  
const worksheet = Workbook.getWorksheet("Sheet1")
worksheet.eachRow((row,rowNumber)=>    //  rowwise 
{
    row.eachCell((cell,ColNumber)=>     // column wise
    {
        if (cell.value === "Apple")
        {
            console.log(rowNumber)
            console.log(ColNumber)
            cell.value = "Iphone"

        }


    })

})

await Workbook.xlsx.writeFile("C:/Playwright/Exceltest.xlsx") 
}

//excelread()
excelwrite()
