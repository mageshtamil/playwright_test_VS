const {test,expect} = require("@playwright/test");
  
test("Calendar validations",async({page})=>
{
    const month = "January";
    const date = "21";
    const year = "2026";
    const monthandyear= month.concat(" " + year)
    console.log(monthandyear)
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker").click()

    const monthsection =await page.locator(".react-calendar__navigation__label").textContent()
    if(monthsection === monthandyear)
    {
        console.log("hai")
        await page.getByRole("button", {name : date}).click()
        
    }
    if(monthsection.includes(year))
    {
        console.log("hai1")
        await page.locator(".react-calendar__navigation__label").click()
        await page.getByRole("button", {name : month}).click()
        await page.getByRole("button", {name : date}).click()
    }
    else
    {
        console.log("hai2")
        await page.locator(".react-calendar__navigation__label").click()
        await page.locator(".react-calendar__navigation__label").click()
        await page.getByRole("button", {name : year}).click()
        await page.getByRole("button", {name : month}).click()
        await page.getByRole("button", {name : date}).click()
    }




})
