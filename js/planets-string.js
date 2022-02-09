(function(){
	"use strict";

	var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
	// var planetsArray;

	/**
	 * TODO:
	 * Convert planetsString to an array, and save it in a variable named
	 * planetsArray.
	 * console.log planetsArray to check your work
	 */
	//ins ans:
	//to convert a js element into an array use .split()
	var planetsArray = planetsString.split('|'); //instead of re-writing.
	// console.log(planetsArray);

// planetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
//2.ans:
//  planetsString.replaceAll("|", ", ");
// console.log(planetsArray);

	/**
	 * TODO:
	 *Create a string with <br> tags between each planet. console.log() your
	 * results. Why might this be useful?
	 *
	 * BONUS:
	 * Create another string that would display your planets in an undordered
	 * list. You will need an opening AND closing <ul> tags around the entire
	 * string, and <li> tags around each planet.
	 */
// ins ans:
	console.log(planetsArray);
	console.log(planetsArray.join("<br>"));
		//my ans:
	// var brPlanets = planetsString.replaceAll("|","<br>");
	// console.log(brPlanets);


//	<ul>
		//<li>Mercury</li>
// </ul>

//ins ans:
	var output = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
	document.write(output);

	//my ans(inprog)
// var planetsListpt1 = planetsArray.join("</li><li>");
// 	console.log(planetsListpt1);
// 	var planetsListpt2 = planetsListpt1.
	//bonus
	// planetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
	//
	// var planetslistend = planetsArray.unshift("</li></ul>");
	// console.log(planetsliststart);
	// // var liPlanets;


})();