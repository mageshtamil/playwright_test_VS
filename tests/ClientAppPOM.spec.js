const{test,expect} = require('@playwright/test')
const POManager = require('../PageObjects/POManger')
//JSON ->String ->JS object
const dataset = JSON.parse(JSON.stringify(require('../Utils/PlaceorderTestData.json')))

import { debug } from 'console';
import { waitForDebugger } from 'inspector';
import { only } from 'node:test';
//import { LoginPage} from  '../PageObjects/LoginPage'
test.describe.configure({mode:'serial'}) // to execute all the cases in parallel or serial
for (const data of dataset)
{

test(`Login for the product ${data.productname}`, async({page})=>
  {
    const pomanager = new POManager(page)
  /*const productname = "ADIDAS ORIGINAL"
  const username = "smkpmagesh@gmail.com"
  const password = "Tamil123#"
  const countryname ="India"
  const countryCode ="ind"*/
  const url = "https://rahulshettyacademy.com/client/"
  const loginpage = pomanager.getLoginPage()
  await loginpage.GoTo(url)
  await loginpage.validLogin(data.username,data.password)
  const dashboard = pomanager.getDashboardPage()
  await dashboard.ProductSelection(data.productname)
  await dashboard.GotoCart()
  const  mycartpage = pomanager.getMycartPage()
  //await mycartpage.ValidateProduct(productname
  await mycartpage.CheckoutButton()
  console.log("hello")
  const checkoutpage = pomanager.getCheckoutPage()
  //checkoutpage.Paymentdetails(username)
  checkoutpage.CountrySelect(data.countryCode,data.countryname)
  checkoutpage.ConfirmButton()
  const OrderSummary = pomanager.getOrderSummaryPage()
  const ordernumber =  await OrderSummary.OrdersummaryValidation()
   console.log(ordernumber)
   const OrderVerification =pomanager.getOrderVerificationPage()
   OrderVerification.VerifyOrder(ordernumber)
  //await page.pause()



});

}
