class Dashboard{
    //Dashboard  Page
constructor (page)
{
    this.page =page
    this.cardbody =  page.locator(".card-body")
    this.cartbutton = page.locator("[routerlink*='cart']")
    this.pageload = page.locator("div li")

}

async ProductSelection(productname)
{
    const productdetails = await  this.cardbody.allTextContents()
    const productcount =  await this.cardbody.count()
    console.log(productcount)
    for(let i=0 ; i< productcount ; ++i)
        {
         
     if( await this.cardbody.nth(i).locator("b").textContent() === productname)
     {
      await this.cardbody.nth(i).locator("text= Add To Cart").click()
      break 
     }
        }
}

async GotoCart()
{
    await this.cartbutton.click()
    await this.pageload.first().waitFor()
}


}
module.exports = Dashboard