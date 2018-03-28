// Check the console inside chrome developer tools to see me running

console.log("Hello I'm running")
//1
console.log("Richard Gill")

//2
var firstName = "Joe";
var lastName = "Rosenfield";

var firstNamelastName = function (firstName, lastName) {
	console.log(firstName + " " + lastName);
}
firstNamelastName(firstName, lastName)

//3
var lastNamefirstName = function (lastName, firstName) {
	console.log(lastName + ", " + firstName);
}
lastNamefirstName(lastName, firstName)

//4
console.log(firstName.length)

//5
var people = ['Jack', 'John', 'James']

for (var i = people.length - 1; i >= 0; i--) {
		console.log(people[i])
	}

//6
var nameSlice = function(name) {
	console.log(name.slice(1))
}
nameSlice(firstName)

//7
var sliceJName = function(name){
	if(name.charAt(0) == 'J') {
		console.log(name.slice(1))
	}
	else {
		console.log(name)
	}
}
console.log("Calling sliceJName function on my first name which starts with a J")
sliceJName(firstName)

console.log("Calling sliceJName function on my last name which does not start with a J")
sliceJName(lastName)

//8
var sliceJAndRName = function(name){
	if(name.charAt(0) == 'J') {
		console.log(name.slice(1))
	}
	else if(name.charAt(0) == 'R') {
		console.log(name.slice(0, -2))
	}
	else {
		console.log(name)
	}
}
console.log("Calling sliceJAndRName function on my first name which starts with a J")
sliceJAndRName(firstName)

console.log("Calling sliceJAndRName function on my last name which does not start with a J but with an R")
sliceJAndRName(lastName)

console.log("\n\n\n...All done :)")