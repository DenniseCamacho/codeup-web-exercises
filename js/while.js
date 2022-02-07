// While loops exercises https://java.codeup.com/javascript-i/loops/#exercises
//the answer ---
// var number = 1;
// while (number <= 32768){
// 	number = number * 2;
// 	console.log(number);
// }

// ---over complicated it...
// var the1Counter = 0;
// var the1Number = 10;
// while(the1Counter <= 10){
// 	the1Counter++;
// 	theNumber = the1Counter + the1Counter;
// 	console.log(the1Counter);
// 	console.log(theNumber);
// }
// refer to loops-lecture.js

//-- Do While Loop
var allCones = Math.floor(Math.random() * 50) + 50;

// statement, loop, conditional

do {
	var conesBeingBought = Math.floor(Math.random() * 5) + 1;
	if (conesBeingBought > allCones) {
		console.log("Cannot sell you " + conesBeingBought + " I only have " + allCones)
	} else {
		console.log(conesBeingBought + " cones sold...");
		allCones = allCones - conesBeingBought;
	}
} while (allCones > 0);
console.log("I have sold all my cones!")

// var allCones = Math.floor(Math.random()*50) + 50;
// var howManyConesWantingtoBuy = Math.floor(Math.random() * 5) + 1;
//
// do {
// 	allCones = allCones - howManyConesWantingtoBuy;
// 	if (allCones <= -1) {
// 		console.log("I can't sell " + howManyConesWantingtoBuy + " cones! Because that would leave me with " + allCones + ".");
// 	} else if (allCones > howManyConesWantingtoBuy){
// 		console.log("I only have " + allCones + " more cones to sell.");
// 	} else {
// 		console.log("All the cones are sold out.")
// 	}
//
// } while (allCones > 0);

//
// do {
// 	// allCones = allCones - conesBought;
// 	// console.log("You have " + allCones + " more cones to sell.");
// 	var conesBought = Math.floor(Math.random() * 5) + 1;
// 	if (conesBought > allCones) {
// 		console.log("cannot sell you " + conesBought);
// 	} else {
// 		allCones = allCones - conesBought;
// 		console.log("You have " + allCones + " more cones to sell.");
// 	}
// } while (allCones > 0);


// do {
// 	console.log("You can't sell " + conesBought + " you only have " + allCones);
// } while (conesBought < allCones);
// do {
// 	console.log("they're all gone\!");
// } while (conesBought === allCones);

//
// var number = Math.ceil(Math.random()*6);
//math.floor makes it a whole number, rounds it down
//math.ceil makes it whole, rounds up?
//adding 1 makes it start at 1
//
// var number = Math.floor(Math.random() * 6) + 1;
// var guess;
//  // loops over and over til you input the right number in the prompt
// do {
// 	guess = parseInt(prompt("enter a number between 1 and 6"));
// } while (guess !== number);
//
// alert("Your guess of " + guess + " matches the number " + number + "!");
//



