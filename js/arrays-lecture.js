"use strict";

// var groceryList = ["bread", "eggs", "butter", "milk"]; -- the main thing
// var prices = [2, 4, 5, 4];
// for (var i = 0; i < groceryList.length; i++) {
// 	console.log("at index " + i);
// 	console.log(groceryList[i]);
// }

//length starts at 1, index starts at 0. length - 1 will be the first index item.
// for (var i = 0; i < groceryList.length; i++) {
// 	if (i !== groceryList.length - 1) {
// 		console.log("I have to buy " + groceryList[i] + " and...");
// 	} else {
// 		console.log("I have to buy " + groceryList[i] + ".");
// 	}
// }

//mini exercise:
//create an array of four things you know.
//console.log first & last item
//console.log the relation to each


// var dennisesLife = ["John", "Coco", "Chiquita", "Rain", "Spike"];
// var relationship = ["spouse", "my dog"]
// console.log(dennisesLife[0] + " is the first one on my list.");
// console.log(dennisesLife[4] + " Spike is the last on my list.");
// console.log(dennisesLife[0] + " is my spouse.");
// console.log(dennisesLife[1] + " is my dog.");
// console.log(dennisesLife[2] + " is my dog.");
// console.log(dennisesLife[3] + " is my dog.");
// console.log(dennisesLife[4] + " is a dog I\'m watching.");
//
// for (var i = 0; i < dennisesLife.length; i++){
// 	console.log(dennisesLife[i] + " is a part of my life.");
// }


// Given an array
//     var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
// First, create a for loop that generates the output:
//     ```
// San Antonio
// Austin
// Dallas
// Houston
// ```
// Then elaborate on the loop output to generate output like:
//     ```
// Student number 1 lives in San Antonio
// Student number 2 lives in Austin
// Student number 3 lives in Dallas
// Student number 4 lives in Houston
// ```
// Remember the key concept that you can use the iterator variable (i) to access array elements in a loop.
// var cities = ["","San Antonio", "Austin", "Dallas", "Houston"];
// for (var i = 1; i < cities.length; i++) {
// 		console.log("Student number " + i + " lives in " + cities[i]);
// 	}

//ForEach loop
// var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// 1. prices.forEach()
//forEach() needs a set of instructions -- a function is a list of instructions
//2.prices.forEach(function (){ /**hit return**/})

//                      (price) v-is called element or item
// prices.forEach(function (price, index){
// 	//							index + 1 or else it would start at 0
// 	console.log("item number " + (index + 1) + " costs $" + price);
// })

var groceryList = ["bread", "eggs", "butter", "milk"];

//push("item"), pop, shift, unshift("item")
//push , pushes it to the end,
// pop gets rid of the last one
//unshift("insertwordinarrayhere");
//shift(); move item to first item and shifts the other items back

// var indexOfButter = groceryList.indexOf("butter");
// console.log("the butter is at index " + indexOfButter);
//
// groceryList[indexOfButter];
// groceryList[indexOfButter] = "butter";
// console.log(groceryList);
// var firstHalfOfList = groceryList.slice(0, 2); //0 - up to, but not including 2
// console.log(firstHalfOfList);
// console.log(groceryList);
// var secondHalfOfList = groceryList.slice(2); // if you skip second number it starts at first number and goes until the end.
// console.log(secondHalfOfList);
// firstHalfOfList.push("peanut butter");
// console.log(firstHalfOfList);
// groceryList = firstHalfOfList.concat(secondHalfOfList);
// console.log(groceryList);
//

// reverse ......reverses....
// groceryList.reverse();
// console.log(groceryList);
//sort is case-sensitive, alphabetical order
// groceryList.sort();
// console.log(groceryList);

var hamletQuote = "To be or not to be, that is the question";
var hamletQuoteArray = hamletQuote.split(' ');
//to get rid of the comma ,
var noCommasHamletQuote = hamletQuote.replace(",","").toLowerCase();//deletes the comma store the output in a variable.
console.log(noCommasHamletQuote); //deletes the comma
//reverse the order
hamletQuoteArray.reverse();
console.log(hamletQuoteArray);

//
var hamletQuoteBackwards = hamletQuoteArray.join(" ");
console.log(hamletQuoteBackwards);
// comma between every word
var hamletQuoteWordList = hamletQuoteArray.join(",");
console.log(hamletQuoteWordList);
//bring it back to what it was
var bringBacktheOriginal = hamletQuoteWordList.replaceAll(","," ");
var theOriginalArray = bringBacktheOriginal.split(" ");
theOriginalArray.reverse();
var theOriginalQuote = theOriginalArray.join(" ");
console.log(theOriginalQuote);

