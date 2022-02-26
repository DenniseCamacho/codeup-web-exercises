// "use strict";
// //01write a function that takes an input and returns the string "I have no idea what you
// //01just said";
//
// // function functionName01(inputName01) {
// // 	return "I have no idea what you just said";
// // }
// // console.log(functionName01("hi"));
//
// //02write a function that takes in a number and returns that number times 2;
// //02so if you give it 2 it returns 4;
// //02if you give it 100 it returns 200;
//
// // function functionName02(number02) {
// // 	return number02 * 2;
// // }
// // console.log(functionName02(2), 4);
// // console.log(functionName02(100), 200);
//
// //08FEB2022
// //1.write a function that takes in a number and returns that number plus itself;
// function addMe(number){
// 	if (number !== parseFloat(number)) return "this is not a number";
// 	else return parseFloat(number) + parseFloat(number);
// }
// console.log(addMe(2));
// console.log(addMe("a"));
// console.log(addMe("2"));
// console.log(addMe(null));
// console.log(addMe(NaN));
// console.log(addMe(0));

//
// // function fName(aNum) {
// // 	return aNum + aNum;
// // }
// // console.log(fName());
//
//
// //2.now write a function that takes in two numbers doubles each number, and then returns the sum of both numbers doubled;

function doubles(firstNumber, secondNumber){
	if (parseFloat(firstNumber) && parseFloat(secondNumber)) return firstNumber * 2 + secondNumber * 2;
	else return false;
}

console.log(doubles(5,10));
console.log(doubles("5",10));
console.log(doubles(5,"10"));
console.log(doubles(null, 0));
console.log(doubles("five",10));
console.log(doubles(0,NaN));

//
// // function doubletheNums(num1, num2) {
// // 	var num1d = num1 * 2;
// // 	var num2d = num2 * 2;
// // 	return num1d + num2d;
// // }
// // console.log(doubletheNums(1,1))
//
// // instructor:
// // function sumOfDoubles (number1, number2) {
// // 	return (number1 * 2) + (number2 * 2);
// // }
//
//
// //3.write a function that takes in a number and squares it (that is, returns that number multiplied by itself;
//
// // function squared2(aNum) {
// // 	return aNum * aNum;
// // }
// //or type squared2(put the number) in the console on chrome.
// // console.log(squared2(10))
//
// //instructor:
// // function squareANumber(number){
// // 	return number * number;
// // }
// // ||orrrr
// // function squareAnumber(number){
// // 	return number**2;
// // }
//
// //4. write a function that takes in a string and returns its length
// // function strLength (strL) {
// // // 	return strL.length;
// // // }
// // // console.log(strLength("love"));
//
// //instructor:
// // function stringLength(string){
// // 	return string.length;
// // }
//
// //5. write a function that takes in two strings and returns the sum of their lengths
// // function twoSTRSL(str1, str2) {
// // 	return str1.length + str2.length;
// // }
// // console.log(twoSTRSL("love","love"))
//
// //instructor:
// // function sumOfStringLengths(string1, string2){
// // 	return string1.length + string2.length;
// // }
//
// //6.write a function that takes in a number and returns the string "even" or "odd" depending on wether the number is even or odd.
//
// // function oddOreven(number){
// // 	if(number % 2 === 0){
// // 		return "even";
// // 	} else {
// // 		return "odd";
// // 	}
// // }
//
// // ================================= WARM UP
// // Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// // the array contains only string elements.
// // 	Examples...
// // removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]
//
// // function removeB2s(arrayBremoved){
// // 	return arrayBremoved.replaceAll("b", "").replaceAll("B", "");
// // }
// // function removeBs(arr) {
// // 	var output = [];
// // 	arr.forEach(function (arrayBremoved) {
// // 		output.push(arrayBremoved);
// // 	});
// // 	return output;
// // }
// //
// // console.log(removeBs(["abc", "ab", "cat", "Bay"]));
//
// //join, replace, split
//
//
// // function removeBs(arr) {
// // 	return arr.join("")
// // 		.replaceAll("b", " ")
// // 		.replaceAll("B", " ")
// // 		.split(",");
// // }
// //
// // console.log(removeBs(["abc", "ab", "cat","Bay"]));
// //
//
//
// //
//
// // function removeBsFromString(str) {
// // 	return
// // }
//
// //
// // ================================= WARM UP
// // Write a function, createUserMsg, that takes in a user object like the following...
// // {
// // 	username: ‘jbomb’,
// // 	email: ‘john@email.com’,
// // 	isAdmin: true
// // }
// // ...and returns a string output that displays in the console like this...
// // ‘User jbomb is an admin and can be reached at john@email.com’
// // If jbomb were not an admin, the message should display...
// // ‘User jbomb is not an admin and can be reached at john@email.com’
//
// //my answer  vvvvvv
// // var users = [
// // 	{username: "jbomb",
// // 	email: "john@email.com",
// // 	isAdmin: true}
// // ]
// //
// // function createUserMsg (enterusername) {
// // 	for (var i = 0; i < users.length; i++) {
// // 		enterusername === users[i].username && users[i].isAdmin === true ? console.log("User " + users[i].username + " is an admin and can be reached at " + users[i].email) : console.log("User " + users[i].username + " is not an admin");
// // 	}
// // }
// // console.log(createUserMsg("jbomb"));
//
// // // instructors answer vvvvv
// // var user = {
// // 	username: "jbomb",
// // 	email: "john@email.com",
// // 	isAdmin: true
// // };
//
// // // function createUserMsg(user) {
// // // 	//1.
// // // 	// if (user.isAdmin) {
// // // 	// 	return "User " + user.username + " is an admin and can be reached at " + user.email;
// // // 	// } else {
// // // 	// 	return "User " + user.username + " is not an admin and can be reached at " + user.email;
// // // 	// }
// // //
// // // 	//or...
// // // //2.
// // // 	return "User " + user.username + " is " + ((user.isAdmin) ? "" : "not ") + "an admin and can be reached at " + user.email;
// // // }
// //
// // console.log(createUserMsg(user));
//
// // perimeter = (l + w) x 2
// //area = l x w
// //You are given the length and width of a 4=sided polygon. The polygon can either be a rectangle or a square.
// //if it is a square. return its area. If it is a rectangle. return its perimeter
//
// // function areaOrPerimeter(l, w){
// // 	if (l === w){
// // 	return l * w;
// // 	} else {
// // 	return (l + w) * 2;
// // 	}
// // }
// // console.log(areaOrPerimeter(6, 10), 32);
// // console.log(areaOrPerimeter(3, 3), 9);
//
// // Area or Perimeter
// //Write a function that takes two parameters, the length and width of a
// //square or a rectangle. If it's a square return the area
// //If it's a rectangle, return the perimeter
// //bonus: if the input is not a number or numeric string, return false
//
// // function areaOrPerimeter2(l2, w2){
// // 	if (l2 == w2){
// // 		return l2 * w2;
// // 	} else if (l2 !== w2) {
// // 		return (l2 + w2) * 2;
// // 	} else return false;
// // }
// //^loose equality)
// // function areaOrPerimeter2 (length, width) {
// // 	if (length == width){
// // 		return length * width;
// // 	}
// // 	return (length + width) * 2
// // }
//
//
// //eliminate everything first, then catchall.
// // function areaOrPerimeter2 (length, width) {
// // 	if (parseFloat(isNaN(length))) || parseFloat(isNaN(width)) {
// // 		return false;
// // 	} else if (){
// //
// // 	} else {
// //
// // 	}
// // }
// //
// // //NaN !== NaN is true
// // //the order of your else ifs matters.
// // console.log(areaOrPerimeter2(6, 10), 32);
// // console.log(areaOrPerimeter2(3, 3), 9);
// // console.log(areaOrPerimeter2("3",3), 9);
// // console.log(areaOrPerimeter2(NaN, NaN));
// // console.log(areaOrPerimeter2(false, true))
// ///^^^^^^ redo this....
//
// // 17 FEB 2020 WARMUP.
// // write a function, sumTheStrings that takes two numeric strings as input
// // and returns the sum as a string. It returns false if the inputs are not numeric strings.
// //
// //
// // function sumTheStrings(num1, num2){
// // 	if (isNaN(num1) !== false || isNaN(num2) !== false) {
// // 		return false;
// // 	} else if (typeof num1 === "object" || typeof num2 === "object") {
// // 		return false;
// // 	} else if (typeof num1 === "boolean" || typeof num2 === "boolean") {
// // 		return false;
// // 	} else if (num1 === "" || num2 === "") {
// // 		return false;
// // 	} else {
// // 		// return num1.toString() + num2.toString();
// // 		return parseFloat(num1) + parseFloat((num2));
// // 	}
// // }
// //
// // //to make an empty string = 0
// // //if (num1 === "" || num2 === "") {
// // //num1 = "0"
// // //num2 = "0"
// // //}
// // // isNaN(parseFloat(parameterName))
// //
// //
// //
// // console.log(sumTheStrings(2,10));
// // console.log(sumTheStrings(" ",10));
// // console.log(sumTheStrings("",10));
// // console.log(sumTheStrings(2.30,10.30));
// // console.log(sumTheStrings(4.3,"4.3"));
// // console.log(sumTheStrings("1.5",1.5));
// // console.log(sumTheStrings("2","103"));
// // console.log(sumTheStrings("2",120));
// // console.log(sumTheStrings(true,false));
// // console.log(sumTheStrings(false,false));
// // console.log(sumTheStrings(true,true));
// // console.log(sumTheStrings(null,0));
// // console.log(sumTheStrings(NaN, 0));
//
// //JS warmup 18FEB2020
// // ================================= WARM UP
// // In a new HTML file in `codeup-web-exercises`, add a script to solve the following problem...
// // Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
// // 	Assume the following shape of the user object for the function input:
// // 	{
// // 		firstName: '...',
// // 		lastName: '...',
// // 		email: '...',
// // 		username: '...',
// // 		password: '...'
// // 	}
// // The shape of the output should be the following:
// // {
// // 	firstName: '...',
// // 		lastName: '...',
// // }
// // Regardless of the case of the first name and last name input, the output should be in all lower case.
// // var fred = {
// // 	firstName: 'Fred',
// // 	lastName: 'Smith',
// // 	email: 'fred@email.com',
// // 	username: 'fred123',
// // 	password: 'pass123'
// // }
// // getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}
//
// //1. function getSimpleUser(user){
// //
// // }
// //2. function getSimpleUser(user){
// // 	return {
// // 		firstName:,
// // 		lastName:,
// // 	}
// // }
// // var fred = {
// // 	firstName: "Fred",
// // 	lastName: "Smith",
// // 	email: "fred@email.com",
// // 	username: "fred123",
// // 	password: "pass123"
// // }
// // function getSimpleUser(user){
// // 	return {
// // 		firstName: user.firstName.toLowerCase(),
// // 		lastName: user.lastName.toLowerCase()
// // 	}
// // }
// // console.log(getSimpleUser(fred));
// //
//
//
//
//
//
// // var SimplifiedNames = [
// // name:{
// // 	firstName: 'Fred',
// // 	lastName: 'Smith',
// // 	email: 'fred@email.com',
// // 	username: 'fred123',
// // 	password: 'pass123'
// // }
// // ]
//
//
// // function getSimpleUser(user){
// // 	if (user == "fred") {
// // 		user = {
// // 			firstName: 'Fred',
// // 			lastName: 'Smith',
// // 			email: 'fred@email.com',
// // 			username: 'fred123',
// // 			password: 'pass123'
// // 		} else{
// // 			return "I do not know that user.";
// // 		}
// // 	}
// // }
//
// // var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
// // var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
// // function createNames(firstNames, lastNames){
// // 	if (firstNames) {
// // 		for (var i = 0; i < firstNames.length; i++) {
// // 			return firstNames[i];
// //
// // 		}
// // 	} else if (lastNames) {
// // 			for (var i = 0; i < lastNames.length; i++){
// // 				lastNames[i]
// // 			}
// // 		}
// // 	};
//
//
// //if the arrays were different lengths, base it off the longer array.
// // var length = arr1.length; // you could do this and add it in i < arr1.length part.
// // function createNames(arr1, arr2){
// // 	var output = [];
// // 	for(var i = 0; i < arr1.length; i += 1){
// // 		output.push({
// // 			firstName: arr1[0],
// // 			lastName: arr2[0]
// // 		});
// // 	}
// // 	return output;
// // }
// // Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
// //
// // var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
// // var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
// //
// // createNames(firstNames, lastNames) // returns...
// //
// // 	[
// // 	{
// // 		firstName: 'CJ',
// // 		lastName: 'Cat'
// // 	},
// // 		{
// // 			firstName: 'Max',
// // 			lastName: 'Feline'
// // 		},
// // 		{
// // 			firstName: 'Claude',
// // 			lastName: 'Kitten'
// // 		},
// // 		{
// // 			firstName: 'Meowmeow',
// // 			lastName: 'Calico'
// // 		}
// // 	]
// //
// // HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.
//
// // returns the remainder of the smaller value by the larger value
// // division by 0 returns nan
//
// // function remainers(smallv, largev) {
// // 	if (smallv === 0 || largev === 0) return NaN;
// // 	else return smallv % largev;
// // }
// // console.log(remainers(6,3));
// // console.log(remainers(0,3))
//
// //to loop through a strng, turn it into an array
//
// // function printerError(string){
// // 	var totalOverM = 0;
// // 	for (var i in string) {
// // 		if (string[i] > "m") {
// // 			totalOverM++
// // 		}
// // 	} return "" + totalOverM + "/" + string.length;
// // }
//
