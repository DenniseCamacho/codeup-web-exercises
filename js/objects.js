(function() {
	"use strict";

	/**
	 * TODO:
	 * Create an object with firstName and lastName properties that are strings
	 * with your first and last name. Store this object in a variable named
	 * `person`.
	 *
	 * Example:
	 *  > console.log(person.firstName) // "Rick"
	 *  > console.log(person.lastName) // "Sanchez"
	 */
	// var person = {
	// 	firstName: "Dennise",
	// 	lastName: "Camacho"
	// };
	// console.log(person.firstName);
	// console.log(person.lastName);


	/**
	 * TODO:
	 * Add a sayHello method to the person object that returns a greeting using
	 * the firstName and lastName properties.
	 * console.log the returned message to check your work
	 *
	 * Example
	 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
	 */
// 	person.sayHello = function () {
// 		return "Hello from " + person.firstName + " " + person.lastName;
// 	}
//
// console.log(person.sayHello());

	/** TODO:
	 * HEB has an offer for the shoppers that buy products amounting to
	 * more than $200. If a shopper spends more than $200, they get a 12%
	 * discount. Write a JS program, using conditionals, that logs to the
	 * browser, how much Ryan, Cameron and George need to pay. We know that
	 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
	 * display a line with the name of the person, the amount before the
	 * discount, the discount, if any, and the amount after the discount.
	 *
	 * Uncomment the lines below to create an array of objects where each object
	 * represents one shopper. Use a foreach loop to iterate through the array,
	 * and console.log the relevant messages for each person
	 */

	// var hebShoppers = [
	// 	{name: "Cameron", amount: 180},
	// 	{name: "Ryan", amount: 250},
	// 	{name: "George", amount: 320}
	// ];
	// for (var i = 0; i < hebShoppers.length; i++) {
	// 	if (hebShoppers[i].amount < 200) {
	// 		console.log("Sorry " + hebShoppers[i].name + ", you are not eligible for a discount. Your total is $" + hebShoppers[i].amount + ".");
	// 	} else {
	// 		var discounted = hebShoppers[i].amount * .12;
	// 		var newPrice = hebShoppers[i].amount - discounted;
	// 		console.log("Congratulations " + hebShoppers[i].name + ", you are eligible for a discount!");
	// 		console.log("Your total before discount is $" + hebShoppers[i].amount)
	// 		console.log("Your discounted total is now $" + newPrice.toFixed(2))
	// 	}
	// }

	//instructor vvvvvv
	// think about the outputs, write them and base your code on the answers (pseudo code):
	// "Cameron purchased" + AMOUNT + " and recieved a discount of " + (AMOUNT - DISCOUNT)
	//Cameron purchase 180 and recieved a discount of 0 and will pay 180
	//Ryan purchase 250 and recieved a discount of 30 and will pay 220
	//george purchased 320 and recieved a discount of 38.4 and will pay 282.6
		var shoppers = [
			{name: "Cameron", amount: 180},
			{name: "Ryan", amount: 250},
			{name: "George", amount: 320}
		];
// //doing it without a loop at first helps refactor later, try using the loop later.
// 		//since shoppers is an array, shoppers.amount doesnt work but shoppers[i].amount does.
// 	//instead of typing this for every answer, create a loop - v
// 	// var discount1 = (shoppers[0].amount > 200) ? shoppers[0].amount * .12 : 0;
// 	// var message1 = shoppers[0].name + " purchased " + shoppers[0].amount + " and recieved a discount of " + discount1 + " and will pay " + (shoppers[0].amount - discount1);
// 	// var message2;
// 	// var message3;
// 	// console.log(message1);
// 	//instead of typing this for every answer, creat a loop - ^
//
// 	for (var i = 0; i < shoppers.length; i++) {
// 		var discount1 = (shoppers[i].amount > 200) ? shoppers[i].amount * .12 : 0;
// 		var message1 = shoppers[i].name + " purchased " + shoppers[i].amount + " and recieved a discount of " + discount1 + " and will pay $" + (shoppers[i].amount - discount1);
// 		console.log(message1);
// 	}
//
// // 	//added .toFixed(2) to make it look like $0.00 instead of just 0
//
//
// 	for (var i = 0; i < shoppers.length; i++) {
// 		var discount1 = (shoppers[i].amount > 200) ? shoppers[i].amount * .12 : 0;
// 		var message1 = shoppers[i].name + " purchased $" + (shoppers[i].amount).toFixed(2) + " and recieved a discount of " + discount1 + " and will pay $" + (shoppers[i].amount - discount1).toFixed(2);
// 		console.log(message1);
// 	}
// //


	/** TODO:
	 * Create an array of objects that represent books and store it in a
	 * variable named `books`. Each object should have a title and an author
	 * property. The author property should be an object with properties
	 * `firstName` and `lastName`. Be creative and add at least 5 books to the
	 * array
	 *
	 * Example:
	 * > console.log(books[0].title) // "The Salmon of Doubt"
	 * > console.log(books[0].author.firstName) // "Douglas"
	 * > console.log(books[0].author.lastName) // "Adams"
	 */
	// mine - vvv
	// var books = [
	// 	{
	// 		title: "The Chosen",
	// 		author: {
	// 			firstName: "Dallas",
	// 			lastName: "Jenkins"
	// 		}
	// 	},
	// 	{title: "War Room",
	// 	author:{
	// 		firstName: "Alex",
	// 		lastName: "Kendrick"
	// 	}},
	// 	{title: "Fervent",
	// 		author:{
	// 			firstName: "Priscilla",
	// 			lastName: "Shirer"
	// 		}},
	// 	{title: "Sermon on the Mount",
	// 		author:{
	// 			firstName: "Jen",
	// 			lastName: "Wilkin"
	// 		}},
	// 	{title: "The Purpose Driven Life: What on Earth Am I Here For?",
	// 		author: {
	// 			firstName: "Rick",
	// 			lastName: "Warren"
	// 		}}
	// ];
	// // console.log(books[0].title);
	// // console.log(books[0].author.firstName);
	// // console.log(books[0].author.lastName);
	// // ^____^
	//intructors - vvv
	// var books = [
	// 		{
	// 			title: "Book 1",
	// 			author:{
	// 				firstName:"FirstName1",
	// 				lastName:"LastName1"
	// 			}
	//
	// 		},
	// 		{
	// 			title: "Book 2",
	// 			author:{
	// 				firstName:"FirstName2",
	// 				lastName:"LastName2"
	// 			}
	//
	// 		},
	// 		{
	// 			title: "Book 3",
	// 			author:{
	// 				firstName:"FirstName3",
	// 				lastName:"LastName3"
	// 			}
	//
	// 		},
	// 		{
	// 			title: "Book 4",
	// 			author:{
	// 				firstName:"FirstName4",
	// 				lastName:"LastName4"
	// 			}
	//
	// 		},
	// 	];
	//refer to output. if you can make the output display, you may then make a for loop that displays the rest.
	// Example Console Output:
	//
	// 	Book # 1
	// Title: The Salmon of Doubt
	// Author: Douglas Adams
	// ---
// //1.	var bookMsg = "Book #" + "1" + "\n" +
// 		"Title: " + "Book 1" + "\n" +
// 		"Author: " + books[0].author.firstName + "\n" +
// 		"the message";
// console.log(bookMsg)

// 	//2.
// 	// var bookMsg = "Book #" + "1" + "\n" +
// 	// 	"Title: " + "Book 1" + "\n" +
// 	// 	"Author: " + books[0].author.firstName + " " + books[0].author.lastName + "\n" +
// 	// 	"message";
// 	// console.log(bookMsg);
// 	//3. now make a for lop
// 	for(var i = 0; i < books.length; i++) {
// 		var bookMsg = "Book #" + (i + 1) /**if there are no (parentheses) it'll concatenate**/+ "\n" +
// 			"Title: " + books[i].title + "\n" +
// 			"Author: " + books[i].author.firstName + " " + books[i].author.lastName + "\n" +
// 			"<-------------divider------------->";
// 		console.log(bookMsg);
// 	} // you need the console log inside of the loop... not outside, the outside will only log the last answer.
// 	// console.log(bookMsg);
// 	//if you have nested loops, you should change the i to something else.
//
// // "\n" = inserts a new line. it's called a new line character. instead of using many console logs. ---------!!
//
	// refactoring the OG answer -v.

	// for(var i = 0; i < books.length; i++) {
	// 	var bookMsg = "Book #" + (i + 1) /**if there are no (parentheses) it'll concatenate**/+ "\n" +
	// 		"Title: " + books[i].title + "\n" +
	// 		"Author: " + books[i].author.firstName + " " + books[i].author.lastName + "\n" +
	// 		"<-------------divider------------->";
	// 	console.log(bookMsg);
	// }
	var books = [
			{
				title: "Book 1",
				author:{
					firstName:"FirstName1",
					lastName:"LastName1"
				}

			},
			{
				title: "Book 2",
				author:{
					firstName:"FirstName2",
					lastName:"LastName2"
				}

			},
			{
				title: "Book 3",
				author:{
					firstName:"FirstName3",
					lastName:"LastName3"
				}

			},
			{
				title: "Book 4",
				author:{
					firstName:"FirstName4",
					lastName:"LastName4"
				}

			},
		];
	//refactored to for different loops--v
	///1.for loop
	// for(var i = 0; i < books.length; i++) {
	// 	var bookMsg = "Book #" + (i + 1) /**if there are no (parentheses) it'll concatenate**/+ "\n" +
	// 		"Title: " + books[i].title + "\n" +
	// 		"Author: " + books[i].author.firstName + " " + books[i].author.lastName + "\n" +
	// 		"<-------------divider------------->";
	// 	console.log(bookMsg);
	// }

	// //for each
	// books.forEach(function (books,index){
	// 	var bookMsg = "Book #" + (index + 1) /**if there are no (parentheses) it'll concatenate**/+ "\n" +
	// 		"Title: " + books.title + "\n" +
	// 		"Author: " + books.author.firstName +
	// 		" " + books.author.lastName + "\n" +
	// 		"<-------------divider------------->";
	// 	console.log(bookMsg);
	// });

	//do while
// do {
// 	;
// 	var bookMsg = "Book #" + (i + 1) /**if there are no (parentheses) it'll concatenate**/+ "\n" +
// 		"Title: " + books[i].title + "\n" +
// 		"Author: " + books[i].author.firstName + " " + books[i].author.lastName + "\n" +
// 		"<-------------divider------------->";
// 	console.log(bookMsg);
// } while (i < books.length)

	/**
	 * TODO:
	 * Loop through the books array and output the following information about
	 * each book:
	 * - the book number (use the index of the book in the array)
	 * - the book title
	 * - author's full name (first name + last name)
	 *
	 * Example Console Output:
	 *
	 *      Book # 1
	 *      Title: The Salmon of Doubt
	 *      Author: Douglas Adams
	 *      ---
	 *      Book # 2
	 *      Title: Walkaway
	 *      Author: Cory Doctorow
	 *      ---
	 *      Book # 3
	 *      Title: A Brief History of Time
	 *      Author: Stephen Hawking
	 *      ---
	 *      ...
	 */
// for (var i = 0; i < books.length; i++) {
// 	console.log("Book #" + (i + 1));
// 	console.log("Title: " + books[i].title);
// 	console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
// }

	/**
	 * Bonus:
	 * - Create a function named `createBook` that accepts a title and author
	 *   name and returns a book object with the properties described
	 *   previously. Refactor your code that creates the books array to instead
	 *   use your function.
	 * - Create a function named `showBookInfo` that accepts a book object and
	 *   outputs the information described above. Refactor your loop to use your
	 *   `showBookInfo` function.
	 */

	//it takes in, accepts the author + title
	//it returns the properties.
	//feb142022 answer in progress...
// 	function createBook(title, author) {
//
// 		for (var i = 0; i < books.length; i++){
// 			var title1 = books[i].title;
// 			var author1 = books[i].author.firstName + " " + books[i].author.lastName;
// 			if (title1 || author1) {
// 				console.log("Book #" + (i + 1));
// 				console.log("Title: " + title1);
// 				console.log("Author: " + author1);
// 	} else {
// 	return "I do not know that book."
// 			}
// 		}
// }
// 	console.log(createBook("War Room", "Alex Kendrick"));
// 	//feb 142022 answer in progress ^^^;

// 	for (var i = 0; i < books.length; i++);
// var authorsFullname = books[i].author.firstName + " " + books[i].author.lastName;
// var	bookProperties = books[i].title;
// authorsFullname ? console.log (authorsFullname + " " + bookProperties) : " I don't know anything by that author.";
// 	}

})();

