import{test} from'@playwright/test'

test('@Web speciallocator test case', async({page}) =>{

await page.goto("https://rahulshettyacademy.com/angularpractice/")
await page.getByPlaceholder("Password").fill("password")
await page.getByLabel("Check me out if you Love IceCreams!").click()
await page.getByText("Gender").selectOption("Male")
await page.getByLabel("Student").check()
await page.getByRole("button",{name:'Submit'}).click()
console.log(await page.getByText("Success! The Form has been submitted successfully!.").isVisible())
await page.getByRole("link", {name :'Shop'}).click()
await page.locator("app-card").filter({hasText:'Blackberry'}).getByRole("button").click();



})