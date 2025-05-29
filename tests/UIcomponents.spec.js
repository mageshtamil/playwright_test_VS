const{test,expect} = require('@playwright/test')


import { waitForDebugger } from 'inspector';
//import { test, expect } from '@playwright/test';
import { only } from 'node:test';

    
// if its blank context for newContext(), newPage() we dont require to write the code
test("@Web my first test case", async({page})=>
    {
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName= page.locator("#username");
    const signIn =page.locator("#signInBtn");  
    const documentlink = page.locator("[href*= documents-request]")

    await userName.fill("rahulshettyacademy");
    await page.locator("[type=password]").fill("learning"); // css => attribute =value
   const dropdwn= page.locator("select.form-control")
   const optin =  page.locator(".radiotextsty").nth(1)
   dropdwn.selectOption("consult")
   await page.locator(".radiotextsty").nth(1).click();
   await page.locator("#okayBtn").click();
   await expect(optin).toBeChecked()
   console.log(await (optin).isChecked())
    await page.locator("[name=terms]").click();
    await page.locator("[name=terms]").uncheck();
    expect (await page.locator("[name=terms]").isChecked()).toBeFalsy() // assertion 
    await expect(documentlink).toHaveAttribute('class', 'blinkingText');
    //await signIn.click();
     

  await page.pause();
});


test('@Web my second case', async({browser})=>
  
{
  const context = await browser.newContext();
  const page = await context.newPage();  // Context for frist page
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  const documentlink = page.locator("[href*= documents-request]")
  await expect(documentlink).toHaveAttribute('class', 'blinkingText');

  const [newpage] =await Promise.all(   // Promise all helps to run reg scripts parrallely in asynchronius mode
[
    context.waitForEvent('page'),   // Context for second page
    documentlink.click(),
])

const text =await newpage.locator(".red").textContent()
await console.log(text)
const splittext =text.split('@')
await console.log(splittext)
const domain =splittext[1].split(" ")[0]
await console.log(domain)
await page.locator("#username").fill(domain)
console.log("hai")
console.log(await page.locator("#username").textContent())
await page.pause()





})
