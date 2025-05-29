const{test,expect} = require('@playwright/test')


import { waitForDebugger } from 'inspector';
//import { test, expect } from '@playwright/test';
import { only } from 'node:test';

// await key word used to wait for each code to execute as Java script is asynchronous execute all code at the time(not in sequence)
// asunc keyword used when await used inside the block
//() represenet the annonymous function


//{browser} is the fixture
test.expect("my first test case", async({browser})=>
    {
                const context = await browser.newContext();
                const page = await context.newPage();
    await page.goto("http://google.com");


    console.log(await(page.title()));
    await expect(page).toHaveTitle("Google")
       
    }); 


    
// if its blank context for newContext(), newPage() we dont require to write the code
test("my first test case", async({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const userName= page.locator("#username");
    const signIn =page.locator("#signInBtn");
    const cartitem =page.locator(".card-body a");
    
    console.log(await(page.title()));
    await userName.fill("Hai");  //css => .id
    await page.locator("[type=password]").fill("learning"); // css => attribute =value
    await page.locator("[name=terms]").click();
    await signIn.click();
    console.log(await page.locator("[style*=block]").textContent()); // Css regular expression => attribute* =value

    await expect(await page.locator("[style*=block]")).toContainText("Incorrect username/password.")

    await userName.fill("rahulshettyacademy");
    await signIn.click();
  
  console.log(await cartitem.first().textContent()); // Css parent to child => parent child
  console.log(await cartitem.nth(1).textContent());
  console.log(await cartitem.allTextContents());
  await page.pause();
});


