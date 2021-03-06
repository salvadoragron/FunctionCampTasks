
var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

// 1

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var familyNames = _.map(gillFamily, 'name')
 
console.log("Q1: This is the Gill familys first names")

console.log(familyNames)

// 2

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

fullNameArray = gillFamily.map(function(gillFamily) { gillFamily.name = gillFamily.name + " gill"; return gillFamily})

console.log("Q2: Here are the familys full names")

console.log(_.map(fullNameArray, 'name'))

// 3

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var ageArray = _.map(gillFamily, 'age')

var sumOfAges = _.sum(ageArray)

console.log("Q3: This is the sum of the familys ages")

console.log(sumOfAges)  

// 4

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var ageArray = _.map(gillFamily, 'age')

var meanOfAges = _.mean(ageArray)

console.log("Q4: This is the mean of the familys ages")

console.log(meanOfAges)

// 5

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var under50 = _.filter(gillFamily, function(o) {return o.age < 50}) 

console.log("Q5: Here are all the members of the Gill family under the age of 50")

console.log(under50)

// 6

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

console.log('Q6: This is how many members of the gill family there are')

console.log(gillFamily.length)

// 7

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var under50 = _.filter(gillFamily, function(o) {return o.age < 50}) 

console.log('Q7: This is how many members of the gill family there are under the age of 50')

console.log(under50.length)

// 8

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var under50 = _.filter(gillFamily, function(o) {return o.age < 50}) 

var fullNameU50 = under50.map(function(under50) { under50.name = under50.name + " gill"; return under50;})

console.log("Q8: Here are the familys full names if under the age of 50 (in string form) ")

var fullNameArrayU50 = _.map(fullNameU50, 'name')

console.log(_.toString(fullNameArrayU50 ))

// 9

var HTMLtable = document.getElementById('table')

console.log(HTMLtable)

// 10

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var age20OrUnder = _.reject(gillFamily, function(o){return o.age > 20 == true})

var over20 = _.forEach(gillFamily, function(o){o.age > 21 ? o.age = '' : o.age = o.age});
console.log('Dropping ages above 20')

console.log(over20)



// 11

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var gillFamilyAgeAscend = _.sortBy(gillFamily, [function(o) { return o.age; }])

console.log('Q11: Gill family sorted by age, youngest to eldest')

console.log(gillFamilyAgeAscend)
 
// 12

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var beginWithD = _.filter(gillFamily, function(o) {return o.name.charAt(0) == 'd'})

console.log("Q12: Return objects with names beginning with d")

console.log(beginWithD) 

//  13

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

console.log('Q13: Names sorted by their first letter')
console.log(_.sortBy(gillFamily, [function(o) { return o.name; }]))

// 14

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

console.log('Q14: Youngest gill')
var ageAscend = (_.sortBy(gillFamily, [function(o) { return o.age; }]))

console.log(ageAscend[0])

// 15

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var containsA = _.filter(gillFamily, function(o) {return o.name.includes('a') == true})

console.log('Q15: Return family members with "a" in name')

console.log(containsA)

// 16


var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]


var names = _.map(gillFamily, 'name')

var capital = _.upperFirst(gillFamily.name)
console.log('Q16: Capitalise everybodys the first letter of everyones names')

console.log(capital)

// 17

var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, 
{name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}]

var containsA = _.filter(gillFamily, function(o) {return o.name.includes('a') == true})

var youngestWithA = (_.sortBy(containsA, [function(o) { return o.age; }]))

console.log('Q17: Find the youngest member of the Gill family with an "a" in their name.')

console.log(youngestWithA[0])
