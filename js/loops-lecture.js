// var slices = 4;
// /** while is a loop keyword**/while/**going to check if slices are greater than 0**/(slices > 0){/**the code block starts(everything in between), it executes if yes/true, the slices are greater than 0**/
// 	console.log("I'll have a slice!");
// 	slices = slices -1;/** reduces the slices by 1 based upon var slices = 4**/
// 	console.log("Now there's " + slices + " left.");
// 	/**the code block ends**/}
// console.log("Aw, no more pizza :("); /** when it's finally false**/

// while(slices <= 5){
// 	console.log(slices);
// 	slices = slices -1;
// }

//getting rid of slices = would be an infinite loop making it force quit...

// ================================================
// var counter = 0;
// while(counter <= 100){
// 	console.log(counter);
// 	//counter = counter -1;
// 	counter++;
// }
//
// var /**counter = conditional**/counter = 100;
// while (counter >= 0/**as long as this is true,loop will continue**/){
// 	console.log(counter);
// 	counter--;
// }
// console.log("I'm out of the loop!");

// var lives = 3; /** how many times you want this to happen**/
// while(lives > 3){
// 	console.log(lives);
// 	lives--;
// }
// console.log("game over");

// var counter = 1;
// var number = 5;
// while (counter <=5){
// 	number = number * 2;
// 	counter = counter + 1;
// 	console.log(number);
// }
/**where you put your output -the console.log()- makes a difference
 * in the loop {part of the loop} **/
// var number = 5;
// while (number < 200){
// 	console.log(number);
// 	number = number * 2;
// }
//-----------------------------------------------------------------------------;


//declare var count = 100
//checked while (count >=0) {
//incremented count++;
// }

// for (var count = 100; count >= 0; count = count -1 ){
// 	console.log(count);
// }
//is the same as;
// variable called i for iterator
// for (var i =100; i >=0; i--){
// 	console.log(i);
// }
// is the same as;
// for(var i = 0; i <=100; i++){
// 	console.log(i);
// }
//^^^loses flexibility

// var i = 0
// while (i < 100){
// 	console.log(i);
// 	i++;
// }
//
// for (i = 0 ; i < 100; i++){
// 	console.log(i);
// }
// console.log("after the lopp ends,i is " + i);