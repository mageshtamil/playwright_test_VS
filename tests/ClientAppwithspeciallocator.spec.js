const{test,expect} = require('@playwright/test')


import { debug } from 'console';
import { waitForDebugger } from 'inspector';
//import { test, expect } from '@playwright/test';
import { only } from 'node:test';


    
// if its blank context for newContext(), newPage() we dont require to write the code
test("my second test case", async({page})=>
  {

  const productname = "ADIDAS ORIGINAL"
  const email = "smkpmagesh@gmail.com"
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.getByPlaceholder("email@example.com").fill(email)
    await page.getByPlaceholder("enter your passsword").fill("Tamil123#")
    await page.getByRole('button',{name : 'Login'}).click()
   // await page.waitForLoadState('networkidle') => This used to load all the API services loaded in the page and all network idle
   //or
   const cardbody =  page.locator(".card-body")
   await cardbody.last().waitFor(); // wait unitll last item in the array is loaded

   await page.locator(".card-body").filter({hasText : "ADIDAS ORIGINAL"}).getByRole("button",{name:'Add To Cart'}).click()
   
await page.getByRole('listitem').getByRole('button',{name:'Cart'}).click()
await page.locator("div li").first().waitFor() //Isvisibke not eligible for await, this line helps to wait untill page loaded

const bool= page.getByText("ADIDAS ORIGINAL").isVisible(); 
expect(bool).toBeTruthy()

console.log(await page.locator(".cartSection h3").textContent())
//console.log(await page.locator(".field .ddl").textContent())
await page.getByRole('button',{name : 'Checkout'}).click()
//await page.locator(".field .ddl").locator("nth=0").selectOption("5")
//await page.locator("text=CVV Code").locator(".input").fill("123")
//await page.locator("text=CVV Code").locator(".input").fill("123");
await page.locator('input[type="text"]').nth(1).fill('123');
await page.locator('input[type="text"]').nth(2).fill('Magesh');
await page.locator('input[name="coupon"]').fill('rahulshettyacademy');
await page.locator(" button[type='submit']").click()
await page.locator("text =* Coupon Applied").waitFor()
await page.getByPlaceholder("Select Country").pressSequentially("ind")
await page.getByRole('button',{name : 'India'}).nth(1).click()

expect(page.getByText(email)).toBeTruthy()
await page.getByText('Place Order ').click()
expect (page.getByText(" Thankyou for the order. "))
const ordernumber = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
const exactordernumber = ordernumber.substring(3,27)
console.log("Order Number"+ exactordernumber)

await page.locator("button[routerlink*='myorders']").click()
await page.locator(".table-hover ").waitFor()


page.locator("tbody tr").filter({hasText: exactordernumber}).getByRole('button',{name: 'view'}).click()

expect(page.getByText(exactordernumber)).toBeVisible()

await page.pause()



});


