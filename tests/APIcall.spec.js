const{test,expect,request} = require('@playwright/test');
const { appendFile } = require('node:fs/promises');
const {APIUtils}=require('../Utils/APIUtils')

const loginpayload = {userEmail:"smkpmagesh@gmail.com",userPassword:"Tamil123#"}
const orderpayload ={orders:[{country:"Australia",productOrderedId:"67a8df56c0d3e6622a297ccd"}]}
let token
let orderid
test.beforeAll(async()=>
{
const APIcontext= await request.newContext()
const apiutils= new APIUtils(APIcontext,loginpayload)
apiutils.createorder(orderpayload)
})



    
// if its blank context for newContext(), newPage() we dont require to write the code
test("Placing order", async({page})=>
  {

    const apiutils =new APIUtils(APIcontext,loginpayload)
    const orderid = createorder(orderpayload)

    page.addInitScript(value =>{
      window.localStorage.setItem("token",value)
     }, token)  // insert the token to local storage of browser
     
     await page.goto("https://rahulshettyacademy.com/client/")

 
  
await page.locator("button[routerlink*='myorders']").click()
await page.locator(".table-hover ").waitFor()
const orderdetails= await page.locator("tbody tr")
for(let i=0; i < await orderdetails.count(); ++i)
{  
  console.log("hai 1")
  const orderrow = await orderdetails.nth(i).locator("th").textContent()
  if (orderid.includes(orderrow))
  {
    console.log("hai 2")
    await orderdetails.nth(i).locator("text=view").click()
    break
  }

}

const vieworder = await page.locator(".col-text").textContent()
expect(orderid.includes(vieworder)).toBeTruthy()
await page.pause()



});


