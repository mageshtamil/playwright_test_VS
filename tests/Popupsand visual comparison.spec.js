const{test, expect} = require('@playwright/test')

test('popup and frames' , async({page})=>
{
await page.goto("https://google.com")
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
await page.goBack()
await page.goForward()
expect (await page.locator("#displayed-text").isVisible())
await page.locator("#hide-textbox").click()
expect (await page.locator("#displayed-text").isHidden())
page.on('dialog',dialog => dialog.accept()) // verify any dialog opened and clikc postive reposnse dismiss() for negative response
await page.locator("#alertbtn").click()
await page.locator("#mousehover").hover()  // mouse hover

const framewindow = await page.frameLocator("#courses-iframe") // frame locator used to access the fame window contraol
await framewindow.locator("li a[href*='lifetime']:visible").click()
console.log((await framewindow.locator(".text h2").textContent()).split(' ')[1])

})


test('screenshots' , async({page})=>
    {
    
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#displayed-text").screenshot({path: 'Partial screenshot.png'}) ////take field level screenshot
    await page.locator("#hide-textbox").click()

    expect (await page.locator("#displayed-text").isHidden())
    await page.screenshot({path : 'Full screenshot.png'})  //take full screenshot


    })

    
test('Visual Comparison Fail' , async({page})=>
    {
    
    await page.goto("https://www.flightaware.com/")
    expect (await page.screenshot()).toMatchSnapshot('Firstscreenhsot.png') // first time will fail to take actual screenshot


    })

    test('Visual Comparison Pass' , async({page})=>
        {
        
        await page.goto("https://www.google.com/")
        expect (await page.screenshot()).toMatchSnapshot('Googlescreenhsot.png')
    
    
        })