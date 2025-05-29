
Feature: Ecommerce validations


    Scenario: Placing an order
    Given a login to application with "smkpmagesh@gmail.com" and password "Tamil123#" in "https://rahulshettyacademy.com/client/"     
    When Add "ADIDAS ORIGINAL" product to the cart
    Then verify "ADIDAS ORIGINAL"  is added to the cart
    When  Enter mandatryy details and place an order 
    Then verify product placed availble in order history
