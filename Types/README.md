Tasks on Types

// 1 

"Hello" = string

// 2

{hello: 1} is an {} object containing a string (the key "hello") that is set have a property of 2 (which is an interger)

// 3 

[1,2,3] is an [] array containing the integers 1,2 and 3

// 4

[{hello: 1}, {hello: 1}] is an [] array containing 2 {} objects. Each object contains a string key of "hello" and both have a property value set to the integer 1

// 5

{
  cats: [{name: 'tiddles', breed: 'persian'}, {name: 'happy', breed: 'burmese'}],
  dogs: [{name: 'Chester', breed: 'labrador'}, {name: 'happy', breed: 'corgi'}]
} 

*ahem, here I go* 

This is an {} object containing 2 [] arrays. The arrays both have string keys of "cats" and "dogs" respectively. Inside the arrays there are two "cat" or "dog" objects each, all objects in the arrays have string keys of "name" and "breed". The property values of the "name" and "breed" keys are also strings.

// 6

_.map accepts any type of collection (an [] array or an {} object). The second param is a function to affect the values of the collection passed in as param1. Will return a new array based on how param2 iterates over the values in param1.

// 7

_.filter accects [] arrays or {} objects (colletions) as it's first parameter. The second parameter is a function that will return a boolean. This will return a new filtered array based on the results second parameter you pass in ie whether the function passed in as param2 returned true or false
