(function(){
	"use strict";

	var planets = [
		'Mercury',
		'Venus',
		'Earth',
		'Mars',
		'Jupiter',
		'Saturn',
		'Uranus',
		'Neptune'
	];

	/**
	 * TODO:
	 * Read each console log below, and write some javascript code to perform
	 * the step that it describes
	 */

	console.log('Adding "The Sun" to the beginning of the planets array.');
	//ans
	planets.unshift("The Sun");
	//ans
	console.log(planets);

	console.log('Adding "Pluto" to the end of the planets array.');
	//ans
	planets.push("Pluto");
	//ans
	console.log(planets);

	console.log('Removing "The Sun" from the beginning of the planets array.');
	//ans
	planets.shift();
	//ans
	console.log(planets);

	console.log('Removing "Pluto" from the end of the planets array.');
	//ans
	planets.pop(); /**removes whats last, you dont have to "tell" it what.**/
	//ans
	console.log(planets);
	//ans
	console.log('Finding and logging the index of "Earth" in the planets array.');
	//ans
	var indexEarth = planets.indexOf("Earth");
	//ans
	console.log(indexEarth);

	console.log("Reversing the order of the planets array.");
	//ans
	planets.reverse();
	//ans
	console.log(planets);

	console.log("Sorting the planets array.");
	//ans
	planets.sort();
	//ans
	console.log(planets);
})();