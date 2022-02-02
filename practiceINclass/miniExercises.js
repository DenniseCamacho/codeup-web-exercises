// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.

// what is the input? no input
// no inputs needed

// what does the function do?
//it returns the number 5
// what is the output?
// the number five

function returnFive() {
    return 5;
}


// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
// 1. What input does the function take in? 5 or "5"
// 2. What does the function return? boolean true if number 5 or string 5

function isFive(val) {
    return val === 5 ||  val === "5";
}


// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
// 1. What input does the function take in? (how many inputs / what type?) a string
// 2. What does function return? (what is the type)

/** function isShortWord(a5tring) {
    return a5tring.length < 5;
}

console.log(isShortWord("codeup", false));
console.log(isShortWord("spanish", false));
console.log(isShortWord("love", true)); **/

// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
// 1. What is the input? two string inputs
// 2. What is the function outputting?

// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.

// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"

// 1. What is the input? a string and a number
// 2. What is the return value? a string