const {test, expect} = require('@playwright/test');
class OrderSummaryPage{
//Ordersummary Page
  constructor(page)
    {
    this.page=page
    this.confiramtionText = page.locator(".hero-primary")
    this.OrderNumber= page.locator(".em-spacer-1 .ng-star-inserted")
    this.OrderSummaryButton =page.locator("button[routerlink*='myorders']")
       }


async OrdersummaryValidation()
{
    await expect (this.confiramtionText).toHaveText(" Thankyou for the order. ")
    const ordernumber = await this.OrderNumber.textContent()
    await  this.OrderSummaryButton.click() 
   // console.log(ordernumber)
    return ordernumber
}
  
}
module.exports = OrderSummaryPage