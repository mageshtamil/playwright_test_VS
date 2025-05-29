class LoginPage {
    
    constructor(page)
    {
        this.page =page
        this.username= page.locator("#userEmail")
        this.password= page.locator("#userPassword")
        this.signInbutton =page.locator("#login")
    }
     
    async validLogin(username,password)
    {
        //sample 1235
        await this.username.fill(username)
        await this.password.fill(password)
        await this.signInbutton.click()
        await this.page.waitForLoadState('networkidle')
   
    }
     
    async GoTo(url)
    {
        await this.page.goto(url);
        
    }
     
    }
 
module.exports = LoginPage;