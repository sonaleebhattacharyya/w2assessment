///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a, b) => {
    return a + b.price; 
}, 0) ; 
console.log(summedPrice) ; 

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    const taxes = cartTotal * tax; 
    const totalplustax = cartTotal + taxes; 
    const Price = totalplustax - couponValue; 
    return Price; 
}
// test 

console.log(calcFinalPrice(100, 10, .0825))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Name: string type
    Address: an object with fields for house number, city, state, country, etc. 
    Phone Number: a string type. Although it is a number, it is better to convert it to a string since
    the numbers have no value. 
    Dietary Restrictions: string

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerinfo = {
    Name: "Sonalee",
    Address: "ATX",
    Phone: "1232123212",
    Diet:  "Vegetarian"
}
console.log(customerinfo)