const LoginPage= require('./LoginPage')
const Dashboard= require('./Dashboard')
const MycartPage= require('./MycartPage')
const CheckoutPage= require('./CheckoutPage')
const OrderSummaryPage= require('./OrderSummaryPage')
const OrderVerificationPage =require('./OrderVerification')

class POManager{

constructor(page)
{
 this.page =page
 this.loginPage = new LoginPage(this.page)
 this.dashboardPage = new Dashboard(this.page)
 this.mycartPage = new MycartPage(this.page)
 this.checkoutPage = new CheckoutPage(this.page)
 this.orderSummaryPage =new OrderSummaryPage(this.page)
 this.orderVerificationPage = new OrderVerificationPage(this.page)

}

getLoginPage()
{
    return this.loginPage
}

getDashboardPage()
{
    return this.dashboardPage
}

getMycartPage()
{
    return this.mycartPage
}
getCheckoutPage()
{
    return this.checkoutPage
}

getOrderSummaryPage()
{
    return this.orderSummaryPage
}


getOrderVerificationPage()
{
    return this.orderVerificationPage
}



}
module.exports= POManager