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
