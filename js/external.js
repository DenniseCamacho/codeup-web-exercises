
console.log("Hello from external JavaScript");

// 1. alert("Welcome to my Website!");

// 2. var favoriteColor = prompt("What is your favorite color?")
// console.log(favoriteColor);
// alert( ("Awesome! ") + (favoriteColor) + (" is my favorite color too!"));

// question #3 Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.;

// var movieRented = prompt("What movie have you rented?");
// console.log(movieRented);
// daysRented = Number(prompt("How many days will you rent this movie?"));
// console.log(daysRented);
// var totalPrice = (daysRented * 3);
// console.log(totalPrice);
// alert(("$") + (totalPrice) + (" is your total for ") + (movieRented));


// var companyWorkingFor = prompt ("What company are you working for?");
// console.log (companyWorkingFor);
// var payRate = Number(prompt("How much are you paid per hour?"));
// console.log (payRate);
// var hoursWorked = Number(prompt("How many hours have you worked?"));
// alert(("$") + (payRate) * (hoursWorked) + (" is how much you earned working for ") + (companyWorkingFor) + (". Must be nice."));

var classNotFull = confirm("Is the class you are enrolling in full?");
console.log(classNotFull);
var noScheduleConflict = confirm("Does this class conflict with any of your current classes?");
console.log(noScheduleConflict);
var canEnroll = (!classNotFull && !noScheduleConflict);
alert ("It is " + canEnroll + " that you can enroll in this class");

var productOffer;
var premiumMember = confirm("Are you a premium member?")
console.log(premiumMember)
productOffer = Number(prompt("How many items are you buying?"));
console.log(productOffer);
if (productOffer >= 2 || premiumMember) {
    alert("The offer has been applied!");
} else {
    alert("Sorry, not enough items.");
}


