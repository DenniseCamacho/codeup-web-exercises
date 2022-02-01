//
// function log() {
//     console.log("Hello Titan");
//     console.log("Hello from codeup");
// }
//
// //--when you're calling a function (whatever is in the brackets, "fire it off" log() fires it off;--
// log();
// log();

//assigning a function to a variable.

//
// function logSomeStuff() {
//     console.log("Hello");
//     console.log("some stuff");
//     console.log("Goodbye");
// }

//Function Expression - slightly different way of writing a function.
// var logSomeStuff = function () {
//     console.log("Hello");
//     console.log("some stuff");
//     console.log("Goodbye");
// }
// logSomeStuff();

//Return statement. Return stops after. Nothing will run after it.

// function returnValue() {
//    console.log("Do something");
//     return "hello";
// }
//
// var hello = returnValue();
//
// console.log(hello);
// console.log(returnValue() + " " + returnValue());

// function returnValue() {
    //var hello = "bob";
    //var world = "smith";
    //return hello + " " + world;
    // return "Hey what's up hello";
//}
//you have to console.log() to see it.
// console.log(returnValue());

//functions that returns a specifict value, specific value being hello world";
//console logs do not return, it shows? you need console.log needs to be there for it to show it.
//
// function returnValue() {
//     return 6;
// }

// console.log(returnValue) is not the same as console.log(returnValue()) console.log(returnValue) shows the function, defines the function

// 3. ARGUMENTS AND PARAMETERS

//function taking in a value?

// function returnInput(input) {
//     return input;
// }
// console.log(returnInput(4));

//create a function, doubleTheNum that takes in a number and returns the number doubled;

// function doubleTheNum(number) {
//     return number * 2;
// }
//
// console.log(doubleTheNum(3))

//if console.log is empty like console.log(doubleTheNum()) its und.
// PARAMETERS
//you can declare variables inside a function.
//you don't have declare variables to create parameters. you dont have to define num1 within the function, before the function , you don't have to var num1=2

//parameters are flexible, var is stuck
// function multiplyTwoNums(num1, num2 /*parameters*/) {
//     return num1 * num2;
// }
//
// console.log(multiplyTwoNums(3, 5));

//variables inside of a function (parameters)- scope

//write a function, returnFive, that returns the number five. No inputs should be defined.

//what is the input?
//no inputs needed

//what does the function do? (sometimes)

//what is the output?
//the number five

// function returnFive() {
//     return 5;
// }

