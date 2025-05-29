const Exceljs = require('exceljs')
const{test, expect} = require('@playwright/test')

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
    let output ={row:1, column:1}  //object declaration  
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

test('@web downloadandupload',async({page})=>{
    //@Web for tagging the testcases to run seprately
    

await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")
const downloadpath = "C:/Users/smkpm/Downloads/"

const downloadpromise = page.waitForEvent('download') 
await page.getByRole("button",{name: 'Download'}).click()

const download = await downloadpromise; // wait for download event to complete
await download.saveAs(`${downloadpath}download.xlsx`);

await excelwrite("Apple","Samsung",`${downloadpath}download.xlsx`)
await page.locator(".upload").click()
await page.locator("#fileinput").setInputFiles(`${downloadpath}download.xlsx`)
await page.pause()



})


