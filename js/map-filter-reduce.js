const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

//TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLanguagesOrMore = users.filter((value) => value.languages.length >= 3);
console.log(threeLanguagesOrMore, '#1');
//ins:


// TODO: Use .map to create an array of strings where each element is a user's email address
const emailAddresses = users.map((value) => value.email);
console.log(emailAddresses, '#2');
//ins:


//TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const addExperience = users.reduce((original, next) => {
	const total = original + next.yearsOfExperience;
	return total;
}, "");
console.log(parseInt(addExperience / addExperience.length), "#3");
//ins:


//TODO:	Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((previousValue, currentValue) => {
	if (previousValue > currentValue.email){
		return previousValue;
	}}, "");
console.log(longestEmail);


// 	Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const namesReduced = users.reduce((previousValue, currentValue) =>
previousValue + ", " + currentValue.name, "");
console.log('Your instructors are:' + namesReduced.split(",").slice(1).join())
//seperated by a ',' for array methods; slicing the first comma out of the array, joining them back into a string.
// const justNamesReduced = dogs.reduce((prevVal, current) => prevVal+current.dogName,"");
// console.log(justNamesReduced);
//