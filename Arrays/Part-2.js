// Used in ReactJs

const marvel_heros = ["Thor", "Ironman", "Captain America"]
const dc = ["Superman", "flash", "batman"]

// marvel_heros.push(dc) // Pushes into an existing Array
// console.log(marvel_heros)
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][2])

// Concat
const newHeros = marvel_heros.concat(dc) // Returns a new Array
console.log("Concat Method : ", newHeros)

// Spread operator
const allHeros = [...marvel_heros, ...dc]
console.log("Spread Operator : ", allHeros)

// Flat method
const a = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(a.flat(Infinity)) // Returns a new Array
console.log(a.flat(1))

// To check if the entered value is array or not
console.log(Array.isArray("Amith"));

// To convert string into an array
console.log(Array.from("Amith"));

// To convert object into an array : Important
console.log(Array.from({name:"AmithBV"})) // []
// Returns an empty array because it gets confused whether to convert key into array or a value inot an Array(Interesting case)

// To convert the individual variable's value into an Array
let score1 = 100
let score2 = 200
let score3 =300
console.log(Array.of(score1, score2, score3))

// Method studied in Part-2.js

// 1) concat()
// 2) Spread operator
// 3) Flat method => Used 
// 4) isArray()
// 5) Array.from()
// 6) Array.of()