const {test, expect} = require('@playwright/test');
class MycartPage{

constructor(page)
{
    this.page =page
    this.checkoutbutton = page.locator("text=checkout")
}

ValidateProduct(productname)
{
    const bool=  this.page.locator("h3:has-text('"+productname+"')").isVisible(); 
    console.log(bool)
    expect(bool).toBeTruthy() 

}

async CheckoutButton()
{
    await this.checkoutbutton.click()
    await this.page.waitForLoadState('networkidle')
}

}
module.exports = MycartPage