"use strict";
//2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//-- my answer ^_^;
//an odd number between 1 - 50
// if not valid number, continue prompting for a valid one.
//
// for (var aNumber = 1; aNumber < 50; aNumber++) {
// 	aNumber = prompt("Input an odd number between 1 and 50");
// 	if (aNumber % 2 !== 0) {
// 		break;
// 	}//a number is not a type of number
// 	else {
// 		continue;
// 	}
// }

// for (var num = 0; num <= 50; num++) {
// 	num = prompt("Pick an odd number between 1 and 50");
// 	if (num % 2 !== 0) {
// 		break;
// 	} else {
// 		continue;
// 	}
// }

//---- instructor vv
// while(true) {
// 	var userNumber = prompt("Please enter an odd number between 1-50");
// 	if(userNumber % 2 === 1 && userNumber <= 50 && userNumber >= 1) {
// 		break;
// 	}
// }

//3. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// for (var num = 1; num < 50; num++) {
// 	console.log(num);
// }
//output should be:
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
//
// while(true) {
// 	var userNumber = prompt("Please enter an odd number between 1-50");
// 	if(userNumber % 2 === 1 && userNumber <= 50 && userNumber >= 1) {
// 		break;
// 	}
// }
//
// console.log("number to skip is " + userNumber);
// for (var i = 1; i < 50; i++){
// 	if (i == userNumber){
// 		console.log("skip this " + userNumber);
// 		continue;
// 	}
// 	console.log(i);
// }

