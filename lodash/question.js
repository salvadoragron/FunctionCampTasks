/* Hi guys, this is what I meant by inconsistent results. This is an example of where I have
achieved the result I needed, passing an anonymous function as the second param as the iterator 
that looks at the character at the beginning of each name, asks if it is equal to 'd' and 
returns these names. */

// 12

// Find the Gill family members who's name starts with a 'D'

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var beginWithD = _.filter(gillFamily, function(o) {return o.name.charAt(0) == 'd'})

console.log(beginWithD) 

This prints to the console:
	
	(2) [{…}, {…}]
		0:{name: "debbie", age: 55}
		1:{name: "dan", age: 25}

/*When i attempt to do use the same kind of logic for question 15 I get unexpected results. I'm 
trying to use the built in function includes('a') to see if any of the gillFamily.name values 
contain the letter 'a'.*/

// 15

// "Return the members of the Gill family who have an 'a' in their name."

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var containsA = _.filter(gillFamily, [function(o) {return o.name.includes('a') }])

console.log('Q15: Return family members with "a" in name')

console.log(containsA)

// The results I get are as follows:

[]
  length:0


/* I'm pretty sure I've made some sort of syntax mistake but I really can't be sure what's going 
wrong. I've picked these two questions as comparisons as I feel they are asking for similar 
results, the filtering of names containing a certain letter, however I believe the issue is a 
more broad one in relation to what lodash functions I am choosing to complete the exercises, and
 what I can and can't pass into the function as an argument in the form of a function. Apologies 
 for anything unclear in my explanation, it is only a symptom of my confusion haha */





