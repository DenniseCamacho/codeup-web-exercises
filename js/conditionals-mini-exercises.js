"use strict";

// CONDITIONALS MINI-EXERCISES

// 1. Create conditional logic to represent the following scenario...
// If the car is locked, alert 'will open', otherwise, alert 'will not open

/**
 var theCar = "locked";
if (theCar === "locked") {
	alert("will not open");
} else {
	alert("will open");
}
 **/

//instructors answer:

// var caIslocked = true;
// if (caIslocked) {
// 	alert("Will not open")
// } else {
// 	alert("Will open")
// }
//
// (carIsLocked) ? alert("will not open") : alert("will open");

// 2. Write a function that takes in a string and returns a message based on the string length:

// function certainLength(theLength){
// 	return theLength.length(1);
// }
// if (certainLength() === 1) {
// 	alert("Its that length!")
// } else {
// 	alert("It's not that length!")
// }


//**instructor :
// var strLengthMessage;
// function countCharacterLength(str) {
// 	if (str.length === 0) {
// 		strLengthMessage = 'Empty string';
// 	} else if (str.length === 1) {
// 		strLengthMessage = 'One character long';
// 	} else if (str.length === 2) {
// 		strLengthMessage = 'Two characters long';
// 	} else {
// 		return "That is a long string!";
// 	}
// 	console.log(countCharacterLength(''), "empty string");
// 	console.log(countCharacterLength('1'), "one character long");

// var str = '';
// var strLengthMessage;
// if (str.length === 0) {
// 	strLengthMessage = 'Empty string';
// } else if (str.length === 1) {
// 	strLengthMessage = 'One character long';
// } else if (str.length === 2) {
// 	strLengthMessage = 'Two characters long';
// } else {
// 	strLengthMessage = 'That is a long string!';
// }
//
// alert(strLengthMessage);


// if the string is no characters, return "Empty string"
// if the string is one character long, return "One character long"
// if the string is two characters long, return "Two characters long"
// Otherwise, return, "That is a long string!"

// 3. Refactor the Following Code into a Ternary Operator:

/*
    var message;
    var num = 5;
    if (num < 10) {
        message = 'Num less than 10';
    } else {
        message = 'Num more than 10';
    }
*/

//
//
// var num = 5;
// var message = (num < 10) ? "Num less than 10" : "Num more than 10";
//
var coffee = "cleanfilter";
switch (coffee) {
	case "cleanfilter":
		console.log("clean the filter!");
		break;
	case "filtercleaned"
		console.log("no cleaning needed!")
		break;
}