"use strict";
//
// //20 Feb 2022 - Attempting to redo problem.
// var array1 = [1, 2, 3];
// var array2 = ["a","b","c"];
// var array3 = ["bob", 100, null];
// var arrayTest = [5, 5, 5];
// var stringCombo = ["5", 5, "5", 10];
// var testing = [null, "65", 82]
// //returns an object with information
// //information about the array, including the lengthOfArray(.length), containsAllStrings(true or false),
// // and the combineResult of adding all elements together(the sum of, or the array together).
//
// function joiningArrays(anyArray) {
// 	if (anyArray.includes(null)) return anyArray.join("") + null;
// 	/**https://www.w3schools.com/jsref/jsref_includes_array.asp**/
// 	else if (isNaN(parseFloat(anyArray))) return anyArray.join("");
// 	else {
// 		var sum = 0;
// 		for (var i = 0; i < anyArray.length; i++) {
// 			 sum += parseFloat(anyArray[i]);
// 		} return parseFloat(sum);
// 		// for (var i = 0; i < anyArray.length; i++) {
// 		// 	var sum = 0;
// 		// 	sum += parseFloat(anyArray);
// 		// 	return parseFloat(sum);
// 		}
// 	}
// function checkForAllStrings(anyArray){
// 	if (typeof anyArray !== "string") return false;
// 	else return true;
// }
// function analyzeArray(anyArray){
//
// 	for (var i = 0; i < anyArray.length; i++){
// 		var analyzeArray = "(" + anyArray + ") returns...";
// 		return anyArray = {
// 			analyzeArray,
// 			lengthOfArray: anyArray.length,
// 			containsAllStrings: anyArray.every(checkForAllStrings),
// 			combineResult: joiningArrays(anyArray)
// 		}
// 	}
// }
// console.log("-----------V testing functionsV")
// console.log(analyzeArray(array1));
// console.log(analyzeArray(array2));
// console.log(analyzeArray(array3));
// console.log(analyzeArray(arrayTest));
// console.log(analyzeArray(stringCombo));
// console.log(analyzeArray(testing));
//
//

// ================================= JS Challenge

// Create a function, analyzeArray, that takes in an array and returns an object with information about the passed array. The function should return an object with properties containing information about the array, including the lengthOfArray, containsAllStrings, and the combineResult of adding all elements together.
// analyzeArray([1, 2, 3]) returns...
// {
// 	lengthOfArray: 3,
// 			containsAllStrings: false,
// 		combineResult: 6
// }
// analyzeArray([???a???, ???b???, ???c???]) returns...
// {
// 	lengthOfArray: 3,
// 			containsAllStrings: true,
// 		combineResult: ???abc???
// }
// analyzeArray([???bob???, 100, null]) returns...
// {
// 	lengthOfArray: 3,
// 			containsAllStrings: true,
// 		combineResult: ???bob123nul

// 	//trying to make a function that can tell if an input is a string
// 	var array1 = [1, 2, 3]
// 	var array2 = ["a","b","c"]
// 	var array3 = ["bob", 100, null]
// 	var arrayTest = [5, 5, 5]
// 	var dreadTestingThisOne = ["5", 5, "5"] /**Just adding parseFloat in the function addTheArray avoids
// 	 concatenation**/
// //i needed to check if the array contained all strings, so I made a function
// 	function isItString(array){
// 		if (typeof array === "string") return true;
// 		else return false;
// 	}
// 	// I needed to check if the array had numbers to return the sum, so I'm struggling to make a function that returns the sum while looking through the index........ returning the sum of the array
// 	function addTheArray(array) {
// 		if (isNaN(parseFloat(array))) {
// 			return array.join("");
// 		} else {
// 			var sum = 0;
// 			for (var i = 0; i < array.length; i++) {
// 				 sum += parseFloat(array[i]);
// 			} return parseFloat(sum);
// 			}
// 			// sum = 0;
// 			// for (var i = 0; i < array.length; i++) {
// 			// 	sum += array[i];
// 			// 	console.log(sum); ---- this was confusing me.
// 			/**stuck on what to use here**/// in the end, putting the console.log inside the forloop was confusing me,
// 		// but it was giving me the desired answer once I took out the console.log.
// }
// // the final function that takes the array, scans the array,
// 	// and returns the length, a boolean value of true (if it has strings), and the combined result.
// 	// /**trying to figure out how to return the sum and not concatenate the numbers in arrays with numbers.
// 	// Ended up creating another function that filtered out what was not
// 	// numeric and returned the sum of the array that was numeric.**/
// 	function analyzeArray(array){
// 		 for (var i = 0; i < array.length; i++){
// 			 return {
// 				 lengthOfArray: array.length,
// 				 containsAllStrings: array.every(isItString),
// 				 combineResult: addTheArray(array)
// 				 // array.join("").toString()
// 			 }
// 		 }
// 	}
//
//
// 	console.log(analyzeArray(array1));
// 	console.log(analyzeArray(array2));
// 	console.log(analyzeArray(array3));
// 	console.log(analyzeArray(arrayTest));
// 	console.log(analyzeArray(dreadTestingThisOne));

//js 101probs
//
//
// // Keep this function definition in order to test expected vs. actual results
// const assert = function(actual, expected, message = "") {
//
// 	// This compares primitive values and collections. If they differ, throw an error.
// 	if(JSON.stringify(actual) !== JSON.stringify(expected)) {
// 		console.error('[assert] expected:    ' + JSON.stringify(expected))
// 		console.error('[assert] instead got: ' + JSON.stringify(actual))
//
// 		throw Error("Assert failed in " + message);
// 	}
// };
//
//
// // Keep this function here in order to add correct questions to the counter
// function addToDone(message) {
// 	var node = document.createElement("LI");                 // Create a <li> node
// 	var textnode = document.createTextNode(message);         // Create a text node
// 	node.appendChild(textnode);                              // Append the text to <li>
// 	node.classList.add("finished");
// 	document.querySelector(".correct ul").appendChild(node);
// 	document.querySelector("#count").innerHTML = document.querySelectorAll('.finished').length + " of 101";
// }
//
//
// // Welcome to 101 Exercises in JS
// // If you get "ReferenceError: someVariableName is not defined", that means you need to create a variable
//
// // Exercise #0, Example Problem:
// // Example problem setup: Create a variable named doingJSRightNow and assign it the boolean true.
// // The line below creates the variable named doingJSRightNow and assigns the boolean value true
// // To complete Exercise #0, uncomment the following line of JS
// // var doingJSRightNow = true
//
// // The lines below will test your answer. If you see an error, then it means that your answer is incorrect or incomplete.
// // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined to understand this error message.
// var doingJSRightNow = true;
//
// assert(doingJSRightNow, true, "Exercise 0");
//
//
// //  Exercise 1
// // On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
// // For more on variables, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
// var onMarsRightNow = false;
// assert(onMarsRightNow, false, "Exercise 1");
// addToDone("Exercise 1 is correct.");
//
// // Exercise 2
// // For more on arrays, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// // Create a variable named fruits and assign it an array of strings containing the following fruits.
// // mango, banana, guava, kiwi, and strawberry.
// var fruits = ["mango", "banana", "guava", "kiwi", "strawberry"];
//
// assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry"], "Exercise 2");
// addToDone("Exercise 2 is correct.");
//
// // Exercise 3
// // Create a variable named vegetables and assign it an array of strings containing the following vegetables.
// // eggplant, broccoli, carrot, cauliflower, and zucchini
// var vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"];
//
// assert(vegetables, ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"], "Exercise 3");
// addToDone("Exercise 3 is correct.");
//
//
// // Exercise 4
// // Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Exercise 4");
// addToDone("Exercise 4 is correct.");
//
//
// // Exercise 5
// // Add the string "tomato" to the end of the fruits array.
// // *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.
// fruits.push("tomato");
// assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"], "Exercise 5");
// addToDone("Exercise 5 is correct");
//
// // Exercise 6
// // add the string "tomato" onto the end of the vegetables array.
// // Recommend using the built-in JS operation to add to an array.
//
// vegetables.push("tomato");
// assert(vegetables,["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"], "Exercise 6");
// addToDone("Exercise 6 is correct")
//
//
// // Exercise 7
// // Given the array of numbers defined below, reverse the array of numbers that you created above.
// var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// someNumbers.reverse();
//
// assert(someNumbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7")
// addToDone("Exercise 7 is correct")
//
//
//
// // Exercise 8
// // Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method
//
// vegetables.sort();
// assert(vegetables, ['broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 8")
// addToDone("Exercise 8 is correct.")
//
//
//
// // Exercise 9
// // Write the code necessary to sort the fruits in reverse alphabetical order
// fruits.sort().reverse();
// assert(fruits, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana'], "Exercise 9")
// addToDone("Exercise 9 is correct.")
//
//
// // Exercise 10
// // Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// // Assign the result to a variable named fruitsAndVeggies.
// // *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.
// var fruitsAndVeggies = fruits.concat(vegetables);
//
// assert(fruitsAndVeggies, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana', 'broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 10")
// addToDone("Exercise 10 is correct")
//
// // This function generates a random number that is both positive and even
// function randomPositiveEvenNumber() {
// 	var randomNumber = Math.ceil(Math.random() * 100) + 10;
// 	if(randomNumber % 2 !== 0) {
// 		return randomPositiveEvenNumber()
// 	}
//
// 	return randomNumber;
// }
//
// // this function generates a random number that is both positive and odd
// function randomPositiveOddNumber() {
// 	var randomNumber = Math.ceil(Math.random() * 100) + 10;
// 	if(randomNumber % 2 === 0) {
// 		return randomPositiveOddNumber();
// 	}
//
// 	return randomNumber;
// }
//
// // this function generates a random number that is both negative and even.
// function randomNegativeEvenNumber() {
// 	var randomNumber = Math.ceil(Math.random() * -100) - 10;
// 	if(randomNumber % 2 === 0) {
// 		return randomNumber;
// 	}
//
// 	return randomNegativeEvenNumber();
// }
//
// // this function generates a random number that is both negative and odd.
// function randomNegativeOddNumber() {
// 	var randomNumber = Math.ceil(Math.random() * -100) - 10;
// 	if(randomNumber % 2 === 0) {
// 		return randomNegativeOddNumber();
// 	}
//
// 	return randomNumber;
// }
//
// // The next 4 lines create variables that hold these generated random numbers
// var positiveEvenNumber = randomPositiveEvenNumber()
// var positiveOddNumber = randomPositiveOddNumber();
// var negativeEvenNumber = randomNegativeEvenNumber();
// var negativeOddNumber = randomNegativeOddNumber();
//
// // Writing functions
// // See https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions for help with writing functions
// // Be sure to return values from your function definitions. The assert statements will call/run your function(s) for you.
//
//
// // Example function defintion:
// // Write a sayHello function that adds the string "Hello, " to the beginning and "!" to the end of any given input.
// function sayHello(name) {
// 	return "Hello, " + name + "!";
// }
//
// assert(sayHello("Jane"), "Hello, Jane!");
// assert(sayHello("Pat"), "Hello, Pat!");
// assert(sayHello("Astrud"), "Hello, Astrud!");
// assert(sayHello("June"), "Hello, June!");
// assert(sayHello("World"), "Hello, World!");
//
//
// // Heres another example function definition
// // This plusTwo function takes in a variable and adds the number 2 to it.
// function plusTwo(x) {
// 	return x + 2;
// }
//
// assert(plusTwo(3), 5, "3 plus 2 is five")
// assert(plusTwo(-2), 0, "-2 plus 2 is zero")
// assert(plusTwo(0), 2, "zero plus 2 is two")
//
//
//
// // Exercise 11
// // Write a function definition for a function named addOne that takes in a number and returns that number plus one
//
// function addOne(number){
// 	return number += 1;
// }
//
//
// assert(addOne(2), 3, "Exercise 11");
// assert(addOne(0), 1, "Exercise 11");
// assert(addOne(positiveEvenNumber), positiveEvenNumber + 1, "Exercise 11");
// assert(addOne(negativeOddNumber), negativeOddNumber + 1, "Exercise 11");
// addToDone("Exercise 11 is correct.")
//
//
// // The next exercises will be focusing on basic operators in JS
// // Exercise 12
// // Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
// // Think about the definition of a number that is positive.
// // Is 5 positive? Is 0.25 positive? Is 0.00001 positive? Is -0.001 positive?
// // Is zero itself positive? What about infinity? What about negative infinity?
// // Documentation for comparison operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators
// // HINT - here are example functions using comparison operators https://gist.github.com/ryanorsinger/e843c7d0966993bd8193f0afabe16ae0
// // If you get stuck, be sure to check the example code and documentation listed above
//
//
// function isPositive(number){
// 	if(number > 0) return true;
// 	else return false;
// }
//
// assert(isPositive(0.25), true, "Exercise 12");
// assert(isPositive(0.00001), true, "Exercise 12");
// assert(isPositive(Infinity), true, "Exercise 12");
// assert(isPositive(0), false, "Exercise 12");
// assert(isPositive(-0.001), false, "Exercise 12");
// assert(isPositive(positiveOddNumber), true, "Exercise 12");
// assert(isPositive(positiveEvenNumber), true, "Exercise 12");
// assert(isPositive(negativeOddNumber), false, "Exercise 12");
// assert(isPositive(negativeEvenNumber), false, "Exercise 12");
// assert(isPositive(-Infinity), false, "Exercise 12");
// addToDone("Exercise 12 is correct.")
//
//
// // Exercise 13
// // Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
//
// function isNegative(number){
// 	if (number < 0) return true;
// 	else return false;
// }
//
// assert(isNegative(positiveOddNumber), false, "Exercise 13");
// assert(isNegative(positiveEvenNumber), false, "Exercise 13");
// assert(isNegative(negativeOddNumber), true, "Exercise 13");
// assert(isNegative(negativeEvenNumber), true, "Exercise 13");
// addToDone("Exercise 13 is correct.")
//
//
// // Exercise 14
// // Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
// function isOdd(number){
// 	if (number % 2) return true;
// 	else return false;
// }
//
// assert(isOdd(positiveOddNumber), true, "Exercise 14");
// assert(isOdd(positiveEvenNumber), false, "Exercise 14");
// assert(isOdd(negativeOddNumber), true, "Exercise 14");
// assert(isOdd(negativeEvenNumber), false, "Exercise 14");
// addToDone("Exercise 14 is correct.")
//
// // Exercise 15
// // Write a function definition named isEven that takes in a number and returns true or false if that number is even.
// function isEven(number){
// 	if (number % 2) return false;
// 	else return true;
// }
// assert(isEven(2), true, "Exercise 15");
// assert(isEven(positiveOddNumber), false, "Exercise 15");
// assert(isEven(positiveEvenNumber), true, "Exercise 15");
// assert(isEven(negativeOddNumber), false, "Exercise 15");
// assert(isEven(negativeEvenNumber), true, "Exercise 15");
// addToDone("Exercise 15 is correct.")
//
//
// // Exercise 16
// // Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!
// function identity(input){
// 	return input;
// }
// assert(identity(fruits), fruits, "Exercise 16");
// assert(identity(vegetables), vegetables, "Exercise 16");
// assert(identity(positiveOddNumber), positiveOddNumber, "Exercise 16");
// assert(identity(positiveEvenNumber), positiveEvenNumber, "Exercise 16");
// assert(identity(negativeOddNumber), negativeOddNumber, "Exercise 16");
// assert(identity(negativeEvenNumber), negativeEvenNumber, "Exercise 16");
// addToDone("Exercise 16 is correct.")
//
//
// // Exercise 17
// // Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd
// function isPositiveOdd(number){
// 	if (number > 0 && number % 2) return true;
// 	else return false;
// }
//
// assert(isPositiveOdd(3), true, "Exercise 17");
// assert(isPositiveOdd(positiveOddNumber), true, "Exercise 17");
// assert(isPositiveOdd(positiveEvenNumber), false, "Exercise 17");
// assert(isPositiveOdd(negativeOddNumber), false, "Exercise 17");
// assert(isPositiveOdd(negativeEvenNumber), false, "Exercise 17");
// addToDone("Exercise 17 is correct.")
//
//
// // Exercise 18
// // Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
//
// function isPositiveEven(number){
// 	if (number > 0 && number % 2 == 0) return true;
// 	else return false;
// }
// assert(isPositiveEven(4), true, "Exercise 18" );
// assert(isPositiveEven(positiveOddNumber), false, "Exercise 18");
// assert(isPositiveEven(positiveEvenNumber), true, "Exercise 18");
// assert(isPositiveEven(negativeOddNumber), false, "Exercise 18");
// assert(isPositiveEven(negativeEvenNumber), false, "Exercise 18");
// addToDone("Exercise 18 is correct.")
//
//
// // Exercise 19
// // Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
//
// function isNegativeOdd(number){
// 	if (number < 0 && number % 2) return true;
// 	else return false;
// }
// assert(isNegativeOdd(-3), true, "Exercise 19" );
// assert(isNegativeOdd(positiveOddNumber), false, "Exercise 19");
// assert(isNegativeOdd(positiveEvenNumber), false, "Exercise 19");
// assert(isNegativeOdd(negativeOddNumber), true, "Exercise 19");
// assert(isNegativeOdd(negativeEvenNumber), false, "Exercise 19");
// addToDone("Exercise 19 is correct.")
//
//
// // Exercise 20
// // Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.
//
// function isNegativeEven(number){
// 	if (number < 0 && number % 2 == 0) return true;
// 	else return false;
// }
//
// assert(isNegativeEven(-4), true, "Exercise 20" );
// assert(isNegativeEven(positiveOddNumber), false, "Exercise 20");
// assert(isNegativeEven(positiveEvenNumber), false, "Exercise 20");
// assert(isNegativeEven(negativeOddNumber), false, "Exercise 20");
// assert(isNegativeEven(negativeEvenNumber), true, "Exercise 20");
// addToDone("Exercise 20 is correct.")
//
//
//
// // Exercise 21
// // Write a function definition named half that takes in a number and returns half the provided number.
// function half(number){
// 	return number/2;
// }
//
// assert(half(4), 2, "Exercise 21");
// assert(half(5), 2.5, "Exercise 21");
// assert(half(positiveOddNumber), positiveOddNumber / 2, "Exercise 21");
// assert(half(positiveEvenNumber), positiveEvenNumber / 2, "Exercise 21");
// assert(half(negativeOddNumber), negativeOddNumber / 2, "Exercise 21");
// assert(half(negativeEvenNumber), negativeEvenNumber / 2, "Exercise 21");
// addToDone("Exercise 21 is correct.")
//
//
//
// // Exercise 22
// // Write a function definition named double that takes in a number and returns double the provided number.
// function double(n){
// 	return n * 2;
// }
// assert(double(4), 8, "Exercise 22");
// assert(double(5), 10, "Exercise 22");
// assert(double(positiveOddNumber), positiveOddNumber * 2, "Exercise 22");
// assert(double(positiveEvenNumber), positiveEvenNumber * 2, "Exercise 22");
// assert(double(negativeOddNumber), negativeOddNumber * 2, "Exercise 22");
// assert(double(negativeEvenNumber), negativeEvenNumber * 2, "Exercise 22");
// addToDone("Exercise 22 is correct.")
//
//
//
// // Exercise 23
// // Write a function definition named triple that takes in a number and returns triple the provided number.
// function triple(n){
// 	return n * 3;
// }
//
// assert(triple(4), 12, "Exercise 23");
// assert(triple(5), 15, "Exercise 23");
// assert(triple(positiveOddNumber), positiveOddNumber * 3, "Exercise 23");
// assert(triple(positiveEvenNumber), positiveEvenNumber * 3, "Exercise 23");
// assert(triple(negativeOddNumber), negativeOddNumber * 3, "Exercise 23");
// assert(triple(negativeEvenNumber), negativeEvenNumber * 3, "Exercise 23");
// addToDone("Exercise 23 is correct.")
//
//
//
// // Exercise 24
// // Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.
// function reverseSign(n){
// 	if (n > 0) return -Math.abs(n);
// 	else return Math.abs(n);
// }
//
// assert(reverseSign(4), -4, "Exercise 24");
// assert(reverseSign(-5), 5, "Exercise 24");
// assert(reverseSign(positiveOddNumber), positiveOddNumber * -1, "Exercise 24");
// assert(reverseSign(positiveEvenNumber), positiveEvenNumber * -1, "Exercise 24");
// assert(reverseSign(negativeOddNumber), negativeOddNumber * -1, "Exercise 24");
// assert(reverseSign(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 24");
// addToDone("Exercise 24 is correct.")
//
//
//
// // Exercise 25
// // Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
// function absoluteValue(n){
// 	return Math.abs(n);
// }
// assert(absoluteValue(4), 4, "Exercise 25");
// assert(absoluteValue(-5), 5, "Exercise 25");
// assert(absoluteValue(positiveOddNumber), positiveOddNumber, "Exercise 25");
// assert(absoluteValue(positiveEvenNumber), positiveEvenNumber, "Exercise 25");
// assert(absoluteValue(negativeOddNumber), negativeOddNumber * -1, "Exercise 25");
// assert(absoluteValue(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 25");
// addToDone("Exercise 25 is correct.")
//
//
//
// // Exercise 26
// // Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.
// function isMultipleOfThree(n){
// 	if (n % 3 ==0) return true;
// 	else return false;
// }
// assert(isMultipleOfThree(3), true, "Exercise 26");
// assert(isMultipleOfThree(15), true, "Exercise 26");
// assert(isMultipleOfThree(9), true, "Exercise 26");
// assert(isMultipleOfThree(4), false, "Exercise 26");
// assert(isMultipleOfThree(10), false, "Exercise 26");
// addToDone("Exercise 26 is correct.")
//
//
//
//
// // Exercise 27
// // Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.
// function isMultipleOfFive(n){
// 	if (n % 5 == 0) return true;
// 	else return false;
// }
// assert(isMultipleOfFive(3), false, "Exercise 27");
// assert(isMultipleOfFive(15), true, "Exercise 27");
// assert(isMultipleOfFive(9), false, "Exercise 27");
// assert(isMultipleOfFive(4), false, "Exercise 27");
// assert(isMultipleOfFive(10), true, "Exercise 27");
// addToDone("Exercise 27 is correct.")
//
//
//
// // Exercise 28
// // Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.
// function isMultipleOfBothThreeAndFive(n){
// 	if (n % 3 == 0 && n % 5 == 0) return true;
// 	else return false;
// }
// assert(isMultipleOfBothThreeAndFive(15), true, "Exercise 28");
// assert(isMultipleOfBothThreeAndFive(45), true, "Exercise 28");
// assert(isMultipleOfBothThreeAndFive(3), false, "Exercise 28");
// assert(isMultipleOfBothThreeAndFive(9), false, "Exercise 28");
// assert(isMultipleOfBothThreeAndFive(4), false, "Exercise 28");
// addToDone("Exercise 28 is correct.")
//
//
//
//
// // Exercise 29
// // Write a function definition named square that takes in a number and returns the number times itself.
// function square(n){
// 	return n * n;
// }
//
// assert(square(3), 9, "Exercise 29");
// assert(square(2), 4, "Exercise 29");
// assert(square(9), 81, "Exercise 29");
// assert(square(positiveOddNumber), positiveOddNumber * positiveOddNumber, "Exercise 29");
// addToDone("Exercise 29 is correct.")
//
//
//
// // Exercise 30
// // Write a function definition named add that takes in two numbers and returns the sum.
// function add(n1, n2){
// 	return n1 += n2;
// }
//
// assert(add(3, 2), 5, "Exercise 30");
// assert(add(10, -2), 8, "Exercise 30");
// assert(add(5, 7), 12, "Exercise 30");
// addToDone("Exercise 30 is correct.")
//
//
//
// // Exercise 31
// // Write a function definition named cube that takes in a number and returns the number times itself, times itself.
// function cube(n){
// 	return n * n * n;
// }
// assert(cube(3), 27, "Exercise 31");
// assert(cube(2), 8, "Exercise 31");
// assert(cube(5), 125, "Exercise 31");
// assert(cube(positiveOddNumber), positiveOddNumber * positiveOddNumber * positiveOddNumber, "Exercise 31");
// addToDone("Exercise 31 is correct.")
//
//
//
// // Exercise 32
// // Write a function definition named squareRoot that takes in a number and returns the square root of the provided number
// function squareRoot(n){
// 	return Math.sqrt(n);
// }
//
// assert(squareRoot(4), 2.0, "Exercise 32");
// assert(squareRoot(64), 8.0, "Exercise 32");
// assert(squareRoot(81), 9.0, "Exercise 32");
// addToDone("Exercise 32 is correct.")
//
//
//
//
// // Exercise 33
// // Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.
// function subtract(n1, n2){
// 	return n1 -= n2;
// }
//
// assert(subtract(8, 6), 2, "Exercise 33");
// assert(subtract(27, 4), 23, "Exercise 33");
// assert(subtract(12, 2), 10, "Exercise 33");
// addToDone("Exercise 33 is correct.")
//
//
//
// // Exercise 34
// // Write a function definition named multiply that takes in two numbers and returns the first times the second argument.
// function multiply(n1, n2){
// 	return n1 *= n2;
// }
// assert(multiply(2, 1), 2, "Exercise 34");
// assert(multiply(3, 5), 15, "Exercise 34");
// assert(multiply(5, 2), 10, "Exercise 34");
// addToDone("Exercise 34 is correct.")
//
//
//
// // Exercise 35
// // Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.
// function divide(n1, n2){
// 	return n1 / n2;
// }
//
// assert(divide(27, 9), 3, "Exercise 35");
// assert(divide(15, 3), 5, "Exercise 35");
// assert(divide(5, 2), 2.5, "Exercise 35");
// assert(divide(10, 2), 5, "Exercise 35");
// addToDone("Exercise 35 is correct.")
//
//
// // Exercise 36
// // Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.
// function quotient(n, n2){
// 	var quotient = parseInt(n / n2);
// 	return quotient;
// }
// assert(quotient(27, 9), 3, "Exercise 36");
// assert(quotient(5, 2), 2, "Exercise 36");
// assert(quotient(10, 3), 3, "Exercise 36");
// addToDone("Exercise 36 is correct.")
//
//
// // Exercise 37
// // Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.
// function remainder(n, n2){
// 	return n % n2;
// }
// assert(remainder(3, 3), 0, "Exercise 37");
// assert(remainder(5, 2), 1, "Exercise 37");
// assert(remainder(7, 5), 2, "Exercise 37");
// addToDone("Exercise 37 is correct.")
//
//
//
// // Exercise 38
// // Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.
// function sumOfSquares(n, n2){
// 	return n * n + n2 * n2;
// };
// assert(sumOfSquares(3, 2), 13, "Exercise 38");
// assert(sumOfSquares(5, 2), 29, "Exercise 38");
// assert(sumOfSquares(2, 4), 20, "Exercise 38");
// addToDone("Exercise 38 is correct.")
//
//
//
// // Exercise 39
// // Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.
// function timesTwoPlusThree(n){
// 	return (n *= 2) + 3;
// }
// assert(timesTwoPlusThree(0), 3, "Exercise 39");
// assert(timesTwoPlusThree(1), 5, "Exercise 39");
// assert(timesTwoPlusThree(2), 7, "Exercise 39");
// assert(timesTwoPlusThree(3), 9, "Exercise 39");
// assert(timesTwoPlusThree(5), 13, "Exercise 39");
// addToDone("Exercise 39 is correct.")
//
//
// // Exercise 40
// // Write a function definition named areaOfRectangle that takes in two numbers and returns the product.
//
// function areaOfRectangle(n, n2){
// 	return n *= n2;
// }
// assert(areaOfRectangle(1, 3), 3, "Exercise 40");
// assert(areaOfRectangle(5, 2), 10, "Exercise 40");
// assert(areaOfRectangle(2, 7), 14, "Exercise 40");
// assert(areaOfRectangle(5.3, 10.3), 54.59, "Exercise 40");
// addToDone("Exercise 40 is correct.")
//
//
//
// // Exercise 41
// // Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle
//
// function areaOfCircle(r){
// 	var area= Math.PI * r * r;
// 	return area;
// }
//
// assert(areaOfCircle(3), 28.274333882308138, "Exercise 41");
// assert(areaOfCircle(5), 78.53981633974483, "Exercise 41");
// assert(areaOfCircle(7), 153.93804002589985, "Exercise 41");
// addToDone("Exercise 41 is correct.")
//
//
// // Exercise 42
// // Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.
// function circumference(r){
// 	return r * 2 * Math.PI;
// }
// assert(circumference(3), 18.84955592153876, "Exercise 42");
// assert(circumference(5), 31.41592653589793, "Exercise 42");
// assert(circumference(7), 43.982297150257104, "Exercise 42");
// addToDone("Exercise 42 is correct.")
//
//
// // In earlier exercises, the solution was to use a logical AND.
// // In some of the future exercises, the solution will be to use a logical OR.
// // The following two example functions are examples that provide a hint on how to as
//
// // Example function where the function returns true if the input is one OR two.
// function isOneOrTwo(x) {
// 	return x == 1 || x == 2
// }
//
// // Example function where the input is one of 3 possibilities
// function isOneOrTwoOrThree(x) {
// 	return x == 1 || x == 2 || x == 3
// }
//
// // Exercise 43
// // Review this code carefully https://gist.github.com/ryanorsinger/5627b954d119dabb3d8c44d56b38c354 if you want more guidance on Exercises 43, 44, and 45.
// // Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.

// function isVowel(vowelOrnot){
// 	var vowels = ['a', 'e', 'i', 'o', 'u'];
// 	if (vowels.includes(vowelOrnot.toLowerCase())) return true;
// 	else return false;
// };
// for (var i = 0; i < vowels.length; i++){
// 	if (vowels.includes(vowelOrnot)) return true;
// 	else return false;
// console.log(vowels[i] + vowelOrnot.toLowerCase());
// if (vowels[i] !== vowelOrnot.toLowerCase()) return false;
// else return true;
// };
// console.log(isVowel("a"));
// console.log(isVowel("U"));
// console.log(isVowel("banana"));
// console.log(isVowel("Q"));
// console.log(isVowel("y"));
//I was solving the problem by checking the "vowelOrNot" against every item in the array, I just needed the answer to equal one item in the array.
/**Question**/
// // Exercise 44
// // Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.
// function hasVowels(string) {
// 	// var stringArray = string.toLowerCase().split(""); not necessary.
// 	var vowels = ["a", "e", "i", "o", "u"];
// 	for (var i = 0; i < vowels.length; i++){
// 		if (string.indexOf(vowels[i]) > -1) return true;
// 		// console.log(stringArray.indexOf(vowels[i]));
// 	}; return false; // if this is in the for loop, it doesn't work...
// };
// console.log(hasVowels("banana"), true, "Exercise 1");
// console.log(hasVowels("ubuntu"), true, "Exercise 2");
// console.log(hasVowels("QQQQ"), false, "Exercise 3");
// console.log(hasVowels("wyrd"), false, "Exercise 4");
// //after several attempts to return all the letters in the array to check them by
// // the all the letters in the string... eventually retrieved the answer when
// // I took out the return false from the for loop.
// // I need to ask for clarification later.
// 	// var everyVowel;
// 	// var everyLetter;
// 	// stringArray.forEach(function (value, index, array) {
// 	// everyLetter = value;
// 	// });
// 	// vowels.forEach(function (value){
// 	// 	everyVowel = value;
// 	// });
// 	// console.log(stringArray.indexOf(vowels[0]) + " - " + stringArray + " " + vowels);
// // if (vowels.indexOf(stringArray) !== -1) return true;
// 	// else return false;};
// // console.log(hasVowels("word"));
/** ************************************************************************ **/
// var vowels = [
// 	{vowel: "a"},
// 	{vowel: "e"},
// 	{vowel: "i"},
// 	{vowel: "o"},
// 	{vowel: "u"}
// ];
// 	var allVowels = Object.values(vowels);
// 	var newArr = [].concat(vowels);
//
// console.log(typeof allVowels);
// console.log(typeof newArr);
// function countVowels(string) {
// 	var answer;
// 	var newArr2;
// 	// = [].concat(string.split(""));
// 	for (var i = 0; i < vowels.length; i++) {
// 		answer = [].concat(string.split(""));
// 		};
// 	return answer;
// };
// function countVowels(value2) {
// 	var vowelCount = 0;
// 	value2.split("").forEach(function(value, index, array){
// 		if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u"){
// 		vowelCount++;
// 		};
// 	});
// 	return vowelCount;
// };
// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels
// function removeVowels(value1) {
// 	var vowels = ["a", "e", "i", "o", "u"];
// 	var newWord = value1.split("").filter(function(item){
// 		if (item === "a" || item === "e" || item === "i" || item === "o" || item === "u"){
// 			return false; //returning the item gave me all the vowels back...
// 		} else return item; // forgetting to add this gave me nothing >_<
// 	});
// 	 return newWord.join("");
// }
// console.log(removeVowels("banana"), "bnn", "Exercise 46");
// console.log(removeVowels("ubuntu"), "bnt", "Exercise 46");
// console.log(removeVowels("mango"), "mng", "Exercise 46");
// console.log(removeVowels("QQQQ"), "QQQQ", "Exercise 46");

// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel
// 	var vowels = ["a", "e", "i", "o", "u"];
//trying to console.log each item
// function anyItem(array){
// 	var value = "";
// 	for (var i = 0; i < array.length; i++){
// 		value = array[i];
// 	}
// 	return value;
// }

// function startsWithVowel(string) {
// 	if (string.startsWith(anyItem(vowels))) return true;
// 	else return false;
// 			};
// console.log(startsWithVowel("ubuntu"), true, "Exercise 47");
// console.log(startsWithVowel("banana"), false, "Exercise 47");
// console.log(startsWithVowel("mango"), false, "Exercise 47");

// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel
// function endsWithVowel(string){
// 	var vowels = ["a", "e", "i", "o", "u"];
// 	if (string.endsWith(anyItem(vowels[0])) ||
// 			string.endsWith(anyItem(vowels[1])) ||
// 			string.endsWith(anyItem(vowels[2])) ||
// 			string.endsWith(anyItem(vowels[3])) ||
// 			string.endsWith(anyItem(vowels[4]))
// 	){
// 		return true;
// 	}
// 	else return false;
// }
//
//
// console.log(endsWithVowel("ubuntu"), true, "Exercise 48");
// console.log(endsWithVowel("banana"), true, "Exercise 48");
// console.log(endsWithVowel("mango"), true, "Exercise 48");
// console.log(endsWithVowel("spinach"), false, "Exercise 48");

// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel
// function startsAndEndsWithVowel(word){
// 	var vowels = ["a", "e", "i", "o", "u"];
// 	var everyVowel = justVowels();
// 	function justVowels() {
// 	var vowels2 = ""
// 		for (var i = 0; i < vowels.length; i++) {
// 			vowels2 = vowels[i];
// 		}
// 		return vowels2
// 	};
// 	if (word.startsWith(everyVowel) && word.endsWith(everyVowel)) return true;
// 	else return false;
// }
// console.log(startsAndEndsWithVowel("ubuntu"), true, "Exercise 49");
// console.log(startsAndEndsWithVowel("banana"), false, "Exercise 49");
//
//
// Create a function, createFirstNamesArray, that takes in an array of user objects and returns an array of first name strings. Assume that each user object has a property called 'firstName'.
//
// 		Example...
//
// var users = [
// 	{
// 		firstName: 'Bob',
// 		lastName: 'Smith',
// 		email: 'bob@email.com'
// 	},
// 	{
// 		firstName: 'Sally',
// 		lastName: 'Smith',
// 		email: 'sally@email.com'
// 	},
// 	{
// 		firstName: 'Fred',
// 		lastName: 'Smith',
// 		email: 'fred@email.com'
// 	},
// 	{
// 		firstName: 'Cathy',
// 		lastName: 'Smith',
// 		email: 'cathy@email.com'
// 	},
// 	{
// 		firstName: 'Joe',
// 		lastName: 'Smith',
// 		email: 'joe@email.com'
// 	},
// ];
// function createFirstNamesArray(users){
// 	var name = "";
// 	for(var i = 0; i < users.length; i++) {
// 		name += users[i].firstName + ",";
// 	};
// 	name = name.split(",");
// 	name.pop();
// 	return name;
// };
// //adding.split(",") and + "," and .pop()
// //
// console.log(createFirstNamesArray(users)); // returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']
// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.
// function first(sequence){
// 	if (typeof sequence == "string") {
// 		var sequenceThatWasAString = "";
// 		var sequenceThatWasNotAString = "";
// 		sequence.split("").forEach(function (value, index, array) {
// 			if (index == "0") sequenceThatWasAString = value;
// 		});
// 		return sequenceThatWasAString;
// 	} else {
// 		sequence.forEach(function (value, index, array) {
// 			if (index == "0") sequenceThatWasNotAString = value;
// 		});
// 		return sequenceThatWasNotAString;
// 	}
// }
// console.log(first("ubuntu"), "--u", "Exercise 50");
// console.log(first([1, 2, 3]), "--1", "Exercise 50");
// console.log(first(["JS", "is", "awesome"]), "--JS", "Exercise 50");
// function forth(sequence){
// 	var string= "";
// 	var array= "";
// 	if (typeof sequence !== "string") {
// 		sequence.forEach(function(value,index){
// 			if (index == "3") {array = value;}
// 		}); return array;
// 	} else {
// 		sequence.split("").forEach(function(value,index){
// 			if (index == "3") {string = value;}
// 		}); return string;
// 	}
// }

// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.

// function last(sequence){
// 	if (typeof sequence !== "string"){
// 		return sequence.pop();
// 	}
// 	else {
// 		return sequence.split("").pop();
// 	}
// }
// console.log(last("ubuntu"), "u", "Exercise 54");
// console.log(last("1234"), "u", "Exercise 54");
// console.log(last([1, 2, 3, 4]), 4, "Exercise 54");
// console.log(last(["JS", "is", "awesome"]), "awesome", "Exercise 54");
// console.log(last(["kiwi", "mango", "guava"]), "guava", "Exercise 54");

// function secondTolast(sequence){
// 	if (typeof sequence !== "string"){
// 		sequence.pop();
// 		return sequence.pop();
// 	}
// 	else {
// 		var sToArray = sequence.split("");
// 		sToArray.pop();
// 		return sToArray.pop();
// 	}
// }
// console.log(secondToLast("ubuntu"), "t", "Exercise 55");
// console.log(secondToLast([1, 2, 3, 4]), 3, "Exercise 55");
// console.log(secondToLast(["JS", "is", "awesome"]), "is", "Exercise 55");
// console.log(secondToLast(["kiwi", "mango", "guava"]), "mango", "Exercise 55");

// function thirdToLast(sequence){
// 	if (typeof sequence !== "string") {
// 		sequence.pop();
// 		sequence.pop();
// 		return sequence.pop();
// 	} else {
// 		var stringToArray = sequence.split("")
// 		stringToArray.pop();
// 		stringToArray.pop();
// 		return stringToArray.pop();
//
// 	}
// };
// console.log(thirdToLast("ubuntu"), "n", "Exercise 56");
// console.log(thirdToLast([1, 2, 3, 4]), 2, "Exercise 56");
// console.log(thirdToLast(["JS", "is", "awesome"]), "JS", "Exercise 56");
// console.log(thirdToLast(["strawberry", "kiwi", "mango", "guava"]), "kiwi", "Exercise 56");

//just realized there's an isArray() method... ^^;
// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array
function firstAndSecond(sequence){
		var firstTwo = "";
		sequence.forEach(function(value, index){
			if (index == "0" && index == "1"){
				firstTwo = value;
			}
		});
		return false;
		return firstTwo;
}

console.log(firstAndSecond([1, 2, 3, 4]), "testing", [1, 2], "Exercise 57");
console.log(firstAndSecond(["JS", "is", "awesome"]), "testing",["JS", "is"], "Exercise 57");
console.log(firstAndSecond(["strawberry", "kiwi", "mango", "guava"]), "testing", ["strawberry", "kiwi"], "Exercise 57");