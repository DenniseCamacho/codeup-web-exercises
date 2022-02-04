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
// 02/02/2022 Dennise's Answer -
// var carLocked = confirm("Is the car locked?");
// if (carLocked) {
// 	alert("will not open");
// } else {
// 	alert("will open")
// }

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

///02/03/2022 Dennise's answer :D i misunderstood though. and then it got into a long
// cycle of complicating and playing around with code that took hours so i stayed with this answer >_<;; :
// function messageLength(lengthOfWord) {
// 	var theMSG = lengthOfWord.length;
// 	return "Your entered text is " + theMSG + " characters long."
// }
// console.log(messageLength("testing"), 7);
// console.log(messageLength("love"), 4);
// console.log(messageLength("Jesus died for sinners like me :D"), 33);
// console.log(messageLength("He makes it well with my soul."), 30);

// if the string is no characters, return "Empty string"
// if the string is one character long, return "One character long"
// if the string is two characters long, return "Two characters long"
// Otherwise, return, "That is a long string!"

// 02FEB2022 @ 11:09PM I need to sleep. >_< but this was fun to make. --->>
// function messageLength(lengthOfWord) {
// 	if (lengthOfWord.length === 0) {
// 		alert("Empty String");
// 	} else if (lengthOfWord.length === 1) {
// 		alert("One character long");
// 	} else if (lengthOfWord.length === 2) {
// 		alert("Two characters long");
// 	} else {
// 		alert("That is a long string");
// 	}
// }
// console.log(messageLength(""), "Empty String");
// console.log(messageLength("o"), "One character long");
// console.log(messageLength("hi"), "Two characters long");
// console.log(messageLength("love"), "That is a long string");
// console.log(messageLength("Jesus died for sinners like me :D"), "That is a long string");
// console.log(messageLength("He makes it well with my soul."), "That is a long string");
// << --- 02FEB2022 @ 11:09PM I need to sleep. >_< but this was fun to make.

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

// var coffee = "dirtyfilter";
// switch (coffee) {
// 	case "dirtyfilter":
// 		console.log("clean the filter!");
// 		break;
// 	case "filtercleaned":
// 		console.log("no cleaning needed!");
// 		break;
// }