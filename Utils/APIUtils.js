class APIUtils
{

     constructor(APIcontext,loginpayload)
     {
        this.APIcontext = APIcontext
        this.loginpayload =loginpayload
     }


    async getToken()
    {
        const loginresponse = await this.APIcontext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
            {
            data : this.loginpayload,
           
            })   // get the response
          
          const loginresponseJson = await loginresponse.json()
           token = loginresponseJson.token // parse the token from json repsonse
          console.log("token:",token)
          return token
    }

    async createorder(orderpayload)
    {
        const orderresponse = await this.APIcontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
          {
          data :orderpayload,
          headers :{
        
            'Authorization': this.getToken(),
            'Content-type': 'application/json'
           
          }
          })
          const orderresponseJson = await orderresponse.json()
          orderid = orderresponseJson.orders[0]
          console.log("orderid:",orderid)
          return orderid

        
    }


}

module.exports={APIUtils}