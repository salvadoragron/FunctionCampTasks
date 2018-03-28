// Question 1

[1, 2, 3, 4 + 5].length

1 // => 1

2 // => 2

3 // => 3

4 + 5 // => 9

[1,2,3,9] // => [1,2,3,9]

[1,2,3,9].length // => 4

// Question 2

"hello".subString(0, 3).length

"hello" // => "hello"

"hello".substring(0, 3) // => "hel" 

"hel".length // => 3

// Question 3

"hello".subString(0, 3 - 1).length + "world"

3 - 1 // => 2

"hello" // => "hello"

"world" // => "world"

"hello".substring( 0, 2 ) // => "he"

"he".length // => 2

2 + "world" // => "2world"

// Question 4

{ hello: "wor" + "ld" }

{} // => Object

"wor" // => "wor"

"ld" // => "ld"

"wor" + "ld" // => "world"

{hello: "world"} // => {hello: "world"}
