//JQuery
// $.get("data/rows.json", function(result){console.log(result.data)});
// 2015: es6 fetch api/promises ... no JQuery


fetch("data/rows.json").then(response => response.json()).then(info => console.log(info.data));
//console.log('hi') will go first
//what does this mean-^? -v
//fetch has to have a .then after it
//anything after fetch, after line 6, will happen first...

// https://www.w3schools.com/js/js_hoisting.asp

// function displayInput(input){
// 	document.getElementById('output').innerHTML = input;
// };
// function sayHello(greeting, name){
// 	const salutation = `${greeting}, ${name}!`;
// 	displayInput(salutation);
// };
// sayHello('Hi', 'Reader');
//---------------------------------VcallbackV
const myGreeter = (greeting, name, outputFunction) => {
	const salutation = `${greeting}, ${name}!`;
	outputFunction(salutation);
};
const displayInput = (input) => {
	document.getElementById("output").innerHTML = input;
}
// myGreeter("hi", "reader", displayInput);

//setTimeout
// setTimeout(()=>{myGreeter("hola","reader2",displayInput),2000});
//call mygreeter after 2000 seconds and pass mygreeter..mygreeter is a callback
// setTimeout(myGreeter, 2000, "Hola","amigo", displayInput);

const getInfo = (info) => {
	const request = fetch('data/rows.json').then(response => response.json()).then(info => displayInput(info.data))
}
// getInfo(displayInput);
// displayInput('what goes first?');

//promises
const ourFirstPromise = new Promise((resolve, reject)=> {
	setTimeout(()=>{if(Math.random() > 0.5){resolve('i am resolved!')}else{reject('ive been rejected');}},1000);
});
ourFirstPromise.then(value => console.log(value)).catch(error=>console.log(error));

//a promise is an object that is given a callback function
//the object immediatley invokes the callback function which has the name executer
//executer has resolve and reject
//the resolve is success
///the reject is failure
//having to deal with promise object is unlikely?
//https://java.codeup.com/javascript-ii/promises/

//https://github.com/public-apis/public-apis



