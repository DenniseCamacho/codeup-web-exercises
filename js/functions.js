"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// function sayHello(name) {
//     return "Hello " + name + "!";
// }



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
// var helloMessage = sayHello("Dennise");
//
// function sayHello(name) {
//     return "Hello " + name + "!";
// }
//
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// var myName = "Dennise";
// function sayHello() {
//     return myName;
// }
// console.log(sayHello());


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random

var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
//
// function isTwo(number) {
//     return number === 2;
// }
// console.log(isTwo(2), true);
// console.log(isTwo(3), false);
// console.log(isTwo(5), false);
//
// function isTwo(random) {
//     return random;
// }
// console.log(random)



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// function calculateTip(totalBill, tipPer) {
//     return totalBill * tipPer;
// }
//
// console.log(calculateTip(20,.20));
// console.log(calculateTip(25.50, 0.25));
// console.log(calculateTip(33.42, 0.15));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// what is the input? (number) tipPercentage (number) billAmountDollars
// What is the output? a number that represents total tip amount.

// function calculateTip(totalBill, tipPer) {
//     return totalBill * tipPer;
// }
//
//you do not have to add console.log fyi******
// var totalBill = prompt("What is your total bill?");
// console.log(totalBill);
// var tipPer = prompt("What percentage would you like to tip (in decimal form)?");
// alert("You should pay $" + calculateTip(totalBill, tipPer));

//** instructors answer

//     function calculateTip(billTotal, tipPercentage) {
//     return billTotal * tipPercentage;
// }
// var billTotal = Number(prompt("What is the total bill?"));
// var tipPercentage = Number(prompt("How much would you like to tip? (in decimal form)"));
// var tipTotal = calculateTip(tipPercentage, billTotal);
//  alert("Your total tip would be $" + tipTotal.toFixed(2));

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

//**instructor:
// function applyDiscount(price, discount) {
//     var dollarsOffPrice = price * discount;
//     return price - dollarsOffPrice;
// }


// function applyDiscount(priceOG, priceDISC) {
//     return priceOG * priceDISC
//     parseInt(0,1);
// }
//
// console.log(Number(applyDiscount(50, 10));



