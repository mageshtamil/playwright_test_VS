const{test,expect} = require('@playwright/test')
class CheckoutPage
{
    //checkout Page
     //checkout Page
 //checkout Page
constructor(page)
{
    this.page =page
    this.carddetails = page.locator('input[type="text"]')
    this.coupon = page.locator('input[name="coupon"]')
    this.applycouponbutton = page.locator(" button[type='submit']")
    this.couponapply = page.locator("text =* Coupon Applied")
    this.selectcountry= page.locator("[placeholder = 'Select Country']")
    this.dropcountry =  page.locator(".ta-results")
    this.submitbutton =page.locator(".action__submit")
    this.usernamevalidation =page.locator(".mt-5 label")
    this.paymentbutton=page.locator(".action__submit")

}

async Paymentdetails(username)
{
//await this.carddetails.nth(1).fill('123');
//await this.carddetails.nth(2).fill('Magesh');
await this.coupon.fill('rahulshettyacademy');
await this.applycouponbutton.click()
await this.couponapply.waitFor()
expect(usernamevalidation).toContainText(username)
}

async CountrySelect(countryCode,countryname)
{
await this.selectcountry.pressSequentially(countryCode)
await this.dropcountry .waitFor();
const countrycount = await  this.dropcountry.locator("button").count()
//await this.page.pause()
for(let i=0;i<countrycount; ++i)
    {
      const text = await  this.dropcountry.locator("button").nth(i).textContent()
     
     if(text.trim() === countryname )
    
      {
        console.log("hai")
        await  this.dropcountry.locator("button").nth(i).click()
        break
      }
    }
    
   
}

async ConfirmButton()
{
    await this.paymentbutton.click()
    await this.page.waitForLoadState('networkidle')
}

}
module.exports = CheckoutPage