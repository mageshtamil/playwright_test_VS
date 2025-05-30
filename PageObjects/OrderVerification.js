const {test, expect} = require('@playwright/test');

class OrderVerification
{
//orderverification Page
constructor(page)
{
    this.page =page
    this.table =page.locator(".table-hover ")
    this.orderdetails =page.locator("tbody tr")
    this.vieworder = page.locator(".col-text")

}

async VerifyOrder(ordernumber)
{
    await this.table.waitFor()
    for(let i=0; i < await  this.orderdetails.count(); ++i)
    {  
      console.log("hai 1")
      const orderrow = await  this.orderdetails.nth(i).locator("th").textContent()
      if (ordernumber.includes(orderrow))
      {
        console.log("hai 2")
        await  this.orderdetails.nth(i).locator("text=view").click()
        break
      }
    
    }
    
    const vieworder = await this.vieworder.textContent()
    console.log(vieworder)
    await expect(ordernumber.includes(vieworder)).toBeTruthy()
    //await page.pause()

}
}
module.exports = OrderVerification