"use strict";
// :D :D :D
// alert("Hello, World!");
// confirm("are you sure?");
// var userChoice = confirm("Are you sure you want to cancel?");
// console.log(userChoice);
// if(userChoice){
//     alert("okay true :D");
// } else {
//     alert("canceled false :(");
// }
//type coehercion to add var #s or else itll add as string

var currentSpeed = Number(prompt("How fast are you driving now?"));
console.log(currentSpeed);
 var plannedSpeedIncrease = Number(prompt("How many more miles per hour do you want to go?"));
 var newSpeed = currentSpeed + plannedSpeedIncrease;
 console.log("Your planned speed is:" + newSpeed);

// you needed to add number or else it would've added it like 3 + 5 = 35 instead (like a string?) instead of 8;



 var distanceLeft = Number(prompt("How many miles are you from your destination?"));

 var timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
 var timePlannedSpeed = (distanceLeft/newSpeed) * 60;
 var timeGain = (timeAtCurrentSpeed - timePlannedSpeed);
 console.log("If you drive at " + newSpeed + "mph, you will arrive " + timeGain.toFixed(2) + " minutes sooner.")
