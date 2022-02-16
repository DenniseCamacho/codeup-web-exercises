"use strict";
//01write a function that takes an input and returns the string "I have no idea what you
//01just said";

// function functionName01(inputName01) {
// 	return "I have no idead what you just said";
// }
// console.log(functionName01("hi"));

//02write a function that takes in a number and returns that number times 2;
//02so if you give it 2 it returns 4;
//02if you give it 100 it returns 200;

// function functionName02(number02) {
// 	return number02 * 2;
// }
// console.log(functionName02(2), 4);
// console.log(functionName02(100), 200);

//08FEB2022
//1.write a function that takes in a number and returns that number plus itself;

// function fName(aNum) {
// 	return aNum + aNum;
// }
// console.log(fName());


//2.now write a function that takes in two numbers doubles each number, and then returns the sum of both numbers doubled;

// function doubletheNums(num1, num2) {
// 	var num1d = num1 * 2;
// 	var num2d = num2 * 2;
// 	return num1d + num2d;
// }
// console.log(doubletheNums(1,1))

// instructor:
// function sumOfDoubles (number1, number2) {
// 	return (number1 * 2) + (number2 * 2);
// }


//3.write a function that takes in a number and squares it (that is, returns that number multiplied by itself;

// function squared2(aNum) {
// 	return aNum * aNum;
// }
//or type squared2(put the number) in the console on chrome.
// console.log(squared2(10))

//instructor:
// function squareANumber(number){
// 	return number * number;
// }
// ||orrrr
// function squareAnumber(number){
// 	return number**2;
// }

//4. write a function that takes in a string and returns its length
// function strLength (strL) {
// // 	return strL.length;
// // }
// // console.log(strLength("love"));

//instructor:
// function stringLength(string){
// 	return string.length;
// }

//5. write a function that takes in two strings and returns the sum of their lengths
// function twoSTRSL(str1, str2) {
// 	return str1.length + str2.length;
// }
// console.log(twoSTRSL("love","love"))

//instructor:
// function sumOfStringLengths(string1, string2){
// 	return string1.length + string2.length;
// }

//6.write a function that takes in a number and returns the string "even" or "odd" depending on wether the number is even or odd.

// function oddOreven(number){
// 	if(number % 2 === 0){
// 		return "even";
// 	} else {
// 		return "odd";
// 	}
// }

// ================================= WARM UP
// Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// the array contains only string elements.
// 	Examples...
// removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]

// function removeB2s(arrayBremoved){
// 	return arrayBremoved.replaceAll("b", "").replaceAll("B", "");
// }
// function removeBs(arr) {
// 	var output = [];
// 	arr.forEach(function (arrayBremoved) {
// 		output.push(arrayBremoved);
// 	});
// 	return output;
// }
//
// console.log(removeBs(["abc", "ab", "cat", "Bay"]));

//join, replace, split


// function removeBs(arr) {
// 	return arr.join("")
// 		.replaceAll("b", " ")
// 		.replaceAll("B", " ")
// 		.split(",");
// }
//
// console.log(removeBs(["abc", "ab", "cat","Bay"]));
//


//

// function removeBsFromString(str) {
// 	return
// }

//
// ================================= WARM UP
// Write a function, createUserMsg, that takes in a user object like the following...
// {
// 	username: ‘jbomb’,
// 	email: ‘john@email.com’,
// 	isAdmin: true
// }
// ...and returns a string output that displays in the console like this...
// ‘User jbomb is an admin and can be reached at john@email.com’
// If jbomb were not an admin, the message should display...
// ‘User jbomb is not an admin and can be reached at john@email.com’

//my answer  vvvvvv
// var users = [
// 	{username: "jbomb",
// 	email: "john@email.com",
// 	isAdmin: true}
// ]
//
// function createUserMsg (enterusername) {
// 	for (var i = 0; i < users.length; i++) {
// 		enterusername === users[i].username && users[i].isAdmin === true ? console.log("User " + users[i].username + " is an admin and can be reached at " + users[i].email) : console.log("User " + users[i].username + " is not an admin");
// 	}
// }
// console.log(createUserMsg("jbomb"));

// // instructors answer vvvvv
// var user = {
// 	username: "jbomb",
// 	email: "john@email.com",
// 	isAdmin: true
// };

// // function createUserMsg(user) {
// // 	//1.
// // 	// if (user.isAdmin) {
// // 	// 	return "User " + user.username + " is an admin and can be reached at " + user.email;
// // 	// } else {
// // 	// 	return "User " + user.username + " is not an admin and can be reached at " + user.email;
// // 	// }
// //
// // 	//or...
// // //2.
// // 	return "User " + user.username + " is " + ((user.isAdmin) ? "" : "not ") + "an admin and can be reached at " + user.email;
// // }
//
// console.log(createUserMsg(user));

// perimeter = (l + w) x 2
//area = l x w
//You are given the length and width of a 4=sided polygon. The polygon can either be a rectangle or a square.
//if it is a square. return its area. If it is a rectangle. return its perimeter

// function areaOrPerimeter(l, w){
// 	if (l === w){
// 	return l * w;
// 	} else {
// 	return (l + w) * 2;
// 	}
// }
// console.log(areaOrPerimeter(6, 10), 32);
// console.log(areaOrPerimeter(3, 3), 9);

// Area or Perimeter
//Write a function that takes two parameters, the length and width of a
//square or a rectangle. If it's a square return the area
//If it's a rectangle, return the perimeter
//bonus: if the input is not a number or numeric string, return false

// function areaOrPerimeter2(l2, w2){
// 	if (l2 == w2){
// 		return l2 * w2;
// 	} else if (l2 !== w2) {
// 		return (l2 + w2) * 2;
// 	} else return false;
// }
//^loose equality)
// function areaOrPerimeter2 (length, width) {
// 	if (length == width){
// 		return length * width;
// 	}
// 	return (length + width) * 2
// }


//eliminate everything first, then catchall.
function areaOrPerimeter2 (length, width) {
	if (parseFloat(isNaN(length))) ||
	parseFloat(isNaN(width))
	{
		return false;
	} else if (){

	} else {

	}
}

//NaN !== NaN is true
//the order of your else ifs matters.
console.log(areaOrPerimeter2(6, 10), 32);
console.log(areaOrPerimeter2(3, 3), 9);
console.log(areaOrPerimeter2("3",3), 9);
console.log(areaOrPerimeter2(NaN, NaN));
console.log(areaOrPerimeter2(false, true))

