const playwright = require('@playwright/test')
const POManager = require('../../PageObjects/POManger')
const {Given, When, Then} = require("@cucumber/cucumber")

 Given('a login to application with {string} and password {string} in {string}',{ timeout: 20000 }, async function (username, password, url)  {
           // Write code here that turns the phrase above into concrete actions
         const browser = await playwright.chromium.launch({ headless: false });
        const context = await browser.newContext();
        this.page = await context.newPage();
        this.pomanager = new POManager(this.page)
         const loginpage =   this.pomanager.getLoginPage()
         await loginpage.GoTo(url)
         await loginpage.validLogin(username,password)
            });

When('Add {string} product to the cart',{ timeout: 40000 }, async function (productname) {
           // Write code here that turns the phrase above into concrete actions
      const dashboard = this.pomanager.getDashboardPage()
        await dashboard.ProductSelection(productname)
      await dashboard.GotoCart()
         });
Then('verify {string}  is added to the cart', async function (productname) {
           // Write code here that turns the phrase above into concrete actions
         
  const  mycartpage = this.pomanager.getMycartPage()
  //await mycartpage.ValidateProduct(productname)
  await mycartpage.CheckoutButton()
  console.log("hello")
  
         });
When('Enter mandatryy details and place an order', async function() {
           // Write code here that turns the phrase above into concrete actions
           const checkoutpage = this.pomanager.getCheckoutPage()
  //checkoutpage.Paymentdetails(username)
  await checkoutpage.CountrySelect("ind","India")
  await checkoutpage.ConfirmButton()
         });

 Then('verify product placed availble in order history', async function () {
           // Write code here that turns the phrase above into concrete actions
          const OrderSummary = this.pomanager.getOrderSummaryPage()
  const ordernumber =  await OrderSummary.OrdersummaryValidation()
   console.log(ordernumber)
   const OrderVerification =this.pomanager.getOrderVerificationPage()
   await OrderVerification.VerifyOrder(ordernumber)
  //await this.page.pause()
         });
