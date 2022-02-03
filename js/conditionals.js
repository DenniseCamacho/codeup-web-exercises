"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//Dennise's answer:
// var analyzeColor= "cyand"
// if (analyzeColor === "blue") {
// 	console.log("blue is the color of the sky");
// } else if (analyzeColor === "red") {
// 	console.log("strawberries are red");
// } else if (analyzeColor === "cyan") {
// 	console.log("I don't know anything about cyan.")
// } else {
// 	console.log("Please name an actual color, or a different color.")
// }
// --- ^^^later try to convert to switch case.
//
//***Instructor:

// function analyzeColor(color) {
//
// 	if (color === "blue") {
// 		return "blue is the color of the sky";
// 	} else if (color === "red") {
// 		return "Strawberries are red";
// 	} else if (color == "purple") {
// 		return "Purple Rain is the best";
// 	} else {
// 		return "Not sure about the color " + color;
// 	}
// }
// console.log(analyzeColor("red"));
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("yellow"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// var analyzeColor= randomColor
// if (analyzeColor === "blue") {
// 	console.log("blue is the color of the sky");
// } else if (analyzeColor === "red") {
// 	console.log("strawberries are red");
// } else if (analyzeColor === "cyan") {
// 	console.log("I don't know anything about cyan.")
// } else {
// 	console.log("That is an interesting color.")
// }

//Instructor:
//
// function analyzeColor(color) {
//
// 	if (color === "blue") {
// 		return "blue is the color of the sky";
// 	} else if (color === "red") {
// 		return "Strawberries are red";
// 	} else if (color == "purple") {
// 		return "Purple Rain is the best";
// 	} else {
// 		return "Not sure about the color " + color;
// 	}
// }
//
// console.log(randomColor);
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//Dennises answer:
// var analyzeColor = prompt("What is your favorite color?")
// switch (analyzeColor){
// 	case "red":
// 		console.log("Red? Like a tomato.");
// 		break;
// 	case "blue":
// 		console.log("Blue? like the sky!");
// 		break;
// 	case "cyan":
// 		console.log("I don't know anything about cyan.");
// 		break;
// 	default:
// 		console.log("That is an interesting color.")
// }
//if you use return you don't need "break;"
//Instructor/student:
//
// function analyzeColor(color) {
// 	switch (color) {
// 		case "blue":
// 				return "blue is the color of the sky";
// 		case "red":
// 			return "Tomatoes are red";
// 		case "purple":
// 			return "purple is my favorite color";
// 		default:
// 			return "Not sure about the color " + color;
// 	}
// }
//to make it so that it doesnt matter is the answer is R or r,
// add (color.toLowerCase()); or case "blue" case "Blue" but it //would take longer.
//or if the answer has spaces .trim() or tolowerCase().trim()

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//Dennises answer:
// var analyzeColor = prompt("Name a color, any color.")
// if (analyzeColor === "red") {
// 	alert("It was " + analyzeColor + " wasn\'t it?")
// } else {
// 	alert("Please\? \:\(")
// }

//--sidestudy// try to make it so that it prompts the user again?
/* ########################################################################## */
//Instructor:
//
// var userInput = prompt("Please enter a color");
// alert(analyzeColor(userInput));

//to make it so that it doesnt matter is the answer is R or r,
// add (color.toLowerCase());

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//Dennise's Answer: d(^^ b)
// var originalPrice = prompt("How much are you paying?");
// var luckyNumber = 4;
// var discountedPrice1 = originalPrice * .10;
// var discountedPrice2 = originalPrice * .25;
// var discountedPrice3 = originalPrice * .35;
// var discountedPrice4 = originalPrice * .50;
// if (luckyNumber === 1) {
// 	alert(originalPrice - discountedPrice1)
// 	} else if (luckyNumber === 2) {
// 	console.log(originalPrice - discountedPrice2)
// 	} else if (luckyNumber === 3) {
// 	console.log(originalPrice - discountedPrice3)
// 	} else if (luckyNumber === 4) {
// 	console.log(originalPrice - discountedPrice4)
// 	} else if (luckyNumber === 5) {
// 	alert("Congratlations! You don't have to pay anything! Enjoy.")
// 	}
//Instructor:
//
// function calculateTotal(luckyNum, totalAmountDollars) {
// 	var amountOwed;
// 	if (luckyNum === 0) {
// 		amountOwed = totalAmountDollars;
// 	} else if (luckyNum === 1) {
// 		amountOwed = totalAmountDollars - (totalAmountDollars * .1);
// 	} else if (luckyNum === 2) {
// 		amountOwed = totalAmountDollars - (totalAmountDollars * .25)
// 	} else if (luckyNum === 3) {
// 		amountOwed = totalAmountDollars - (totalAmountDollars * .35)
// 	} else if (luckyNum === 4) {
// 		amountOwed = totalAmountDollars - (totalAmountDollars * .5)
// 	} else if (luckyNum === 5) {
// 		return 0;
// 	}
// }
//
//
// function calculateTotal(luckyNum, totalAmountDollars) {
//
// 	switch (luckyNum) {
// 		case 0:
// 			return totalAmountDollars;
// 		case 1:
// 			return totalAmountDollars - (totalAmountDollars * .1);
// 		case 2:
// 			return totalAmountDollars - (totalAmountDollars * .25);
// 		case 3:
// 			return totalAmountDollars - (totalAmountDollars * .35);
// 		case 4:
// 			return totalAmountDollars - (totalAmountDollars * .5);
// 		case 5:
// 			return 0;
// 	}
// }
// console.log(calculateTotal(0, 100), 100);
// console.log(calculateTotal(4, 100), 50);
// console.log(calculateTotal(5, 100), 0);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
//
// //Dennises answer:
//I keep looking at this to want to clean it up, it's bugging me. That's why my pace is so slow, also trying to understand at the same time.
// //I added Number().toFixed(2) to keep it looking clean on the outside but it looks messy in here idk.
//
// var totallBill = prompt("What is your total bill?")
// alert("Your total is $" + totallBill + ". Your lucky number is " + luckyNumber + ".")
//
// if (luckyNumber === 1) {
// 	var discountedPrice = Number(totallBill * .10).toFixed(2);
// 	alert("Your new total after discount is $" + Number(totallBill - discountedPrice).toFixed(2) + ".")
// } else if (luckyNumber === 2) {
// 	var discountedPrice = Number(totallBill * .25).toFixed(2);
// 	alert("Your new total after discount is $" + Number(totallBill - discountedPrice).toFixed(2) + ".")
// } else if (luckyNumber === 3) {
// 	var discountedPrice = Number(totallBill * .35).toFixed(2);
// 	alert("Your new total after discount is $" + Number(totallBill - discountedPrice).toFixed(2) + ".")
// } else if (luckyNumber === 4) {
// 	var discountedPrice = Number(totallBill * .50).toFixed(2);
// 	alert("Your new total after discount is $" + Number(totallBill - discountedPrice).toFixed(2) + ".")
// } else if (luckyNumber === 5) {
// 	alert("Congratlations! You don't have to pay anything! Enjoy.")
// }
//
//
//Instructor:
//
// var totalBillDollars = prompt("Please enter your total bill in dollars");
// var finalBillDollars  = calculateTotal(luckyNumber, totalBillDollars);
// var billMessage = "Your total bill is "
// alert(");
// alert(billMessage)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//
//
// var answer1 = confirm("Would you like to enter a number?")
//
// if (answer1) {
// 		var answer2 = prompt("Great! Please enter a number.")
// 	} else {
// 		alert("Well, ok I guess. \:\(")
// 	}
// if(answer2 % 2 === 0) {
// 		alert("That number is even.");
// 	var answerEven = answer2 += 100;
// 	alert("Your answer added to 100 is " + answerEven)
// 	} else if (answer2 % 2 === 1){
// 		alert("That number is odd.");
// 	var answerOdd = ;
// 	alert("Your answer added to 100 is " + answerOdd)
// 	} else {
// 	alert("Either the input was not a number or you have written out the number. " +
// 		"Please do not write out the number (i.e three), only input the numerical value" +
// 		" (i.e. 3).")
//}
// alert("That number is odd.");
// alert("That number is even.");
// alert("Adding" + "insertvarhere" + "to 100 would be" + "insertvarhere")
//
//
//
//Instructor:
//
/** Test Run

var willEnterNumber = confirm('Do you want to enter a number?');

if (willEnterNumber) {
	// do the number things...

	// get the user input and store in a variable called numInput
	var numInput = Number(prompt('Please enter a number'));

	// validate the user input (number)

	// if valid number

	if (typeof numInput === 'number') {
		// alert even/odd message...
		if (numInput / 2 === 0 ) {
			alert('Number is even');
		} else {
			alert('Number is odd');
		}

		// alert num + 100 message
		alert(numInput + 100);

		// alert negative/positive message

		if (numInput > 0) {
			alert('Number is positive');
		} else {
			alert('Number is negative');
		}
	} else {
		// else alert incorrect data type
		alert('Incorrect data type!');

	}

}
 **/

