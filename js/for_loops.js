"use strict";


//2.Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// function showMultiplicationTable (number) {
// 	for (var i = 1; i <= 10; i++) {
// 		console.log(number + " \* " + i +  " = " + (i * number));
// 		}
// }
// showMultiplicationTable(7);
//vvvinstructor:
//once you have the output for one line, you can make your loop
// console.log(number + " x " + 1 + " = " + number *1);
// for (var multiplier = 1; multiplier <=10; multiplier++){
// 	/**starts at*/		/**ends with*/     /**increases by*/
//
// }
// function showMultiplicationTable(number){
// 	for (var multiplier = 1; multiplier <= 10; multiplier++){
// 		console.log(number + " x " + multiplier + " = " + number * multiplier);
// 	}
// }

//3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
// for (var number = 20; number <= 200; number++) {
// 	console.log(number);
// };
//
// function oddOrEven () {
// 	if (number % 2 === 0) {
// 		console.log("even");
// 	} else {
// 		return "odd";
// 	}
// }

// var randomNum = Math.floor(Math.random() * 181) + 20;
// for (var i = 0 ; i < 5; i++)/**generates 5 random numbers**/{
// 	var randomNum = Math.floor(Math.random() * 181) + 20;
// 	console.log(randomNum);
// }



//https://www.w3schools.com/js/js_random.asp
// var randomN = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
// console.log(randomN);
// for (randomN = 20; randomN <= 200; randomN++);
// function oddOrEven() {
// 	if (randomN % 2 == 0) {
// 		console.log(" is even.");
// 	} else {
// 		console.log(" is odd.");
// 	}
// }
// oddOrEven();
//^^^struggle answer;


// instructor answer vvv
//the answer:::::::------------
// var randomNum = Math.floor(Math.random() * 200) + 20;
// for (var i = 0 ; i < 10; i++)/**generates 10 random numbers**/{
// 	var randomNum = Math.floor(Math.random() * 200) + 20; /**add your if after this, within for**/
// 	if (randomNum % 2 === 0) {
// 		console.log("random number "+ randomNum + " is even");
// 	} else {
// 		console.log("random number "+ randomNum + " is odd");
// 	}
// }
//:::::::::::::::::::::______________

//4. Create a for loop that uses console.log to create the output shown below.
function concatenation() {
	for(var i = 0; i < 10; i++) {
		var number =
	}
	return i;
}

console.log(concatenation());


// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
//every number is increasing once
//strings concatenate, which means 2 + 2 = 22 not 4
// "" + "3" + "3" + "3"
//333
//    v-starts at		v-ends at	     v-increases by
// for (var number = 1; number < 10; number++){
// 	var count = 0;
// 	var outputString = "";
// 	while (count < number){
// 		outputString = outputString + number;
// 		count = count + 1;
// 	}
// 	console.log(outputString);
// }
// or || another answer ::::::::::::::::::::::::::::::::::::::::::
// for (var i = 1; i < 10; i++) {
// 	console.log(i.toString().repeat(i));
// }
//look up repeat method js:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//5. Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
// for (var i = 100; i >= 5; i -= 5){
// 	console.log(i);
// }
//what helped with this answer was :
//for (var count = 100; count >= 0; count = count -1 ){
// //console.log(count); } and searching the subtraction operator js which is -= not -