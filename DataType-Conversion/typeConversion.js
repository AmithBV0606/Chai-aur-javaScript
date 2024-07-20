// Ways to check the type of any variable
// console.log(typeof score)
// console.log(typeof(score))

// Scenario 1 :
let score1 = "33" // Type = String
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1) // number
console.log(valueInNumber1) //33

console.log("____________________________________________________________________________________")

// Scenario 2 : 
let score2 = "33abc" // Type = String
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2) // number
console.log(valueInNumber2) // NaN

console.log("____________________________________________________________________________________")

// Scenario 3 : 
let score3 = null // Type = Object
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3) // number
console.log(valueInNumber3) // 0

console.log("____________________________________________________________________________________")

// Scenario 4 : 
let score4 = undefined // Type = Undefined
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4) // number
console.log(valueInNumber4) // NaN

console.log("____________________________________________________________________________________")

// Scenario 5 : 
let score5 = true // Type = boolean
let valueInNumber5 = Number(score5)
console.log(typeof  valueInNumber5) // number
console.log(valueInNumber5)  // 1

console.log("____________________________________________________________________________________")

// Scenario 6 : 
let score6 = "Amith" // Type = String
let valueInNumber6 = Number(score6)
console.log(typeof  valueInNumber6) // number
console.log(valueInNumber6)  // NaN

/* Note : 
"33" => 33
"33abc" => NaN
null => 0
undefined => NaN
true/false => 0/1
"Amith" => NaN

To Boolean Conversion : 
"" => false
"Amith" => true
*/

console.log("____________________________________________________________________________________")

// Conversion from number to boolean
let isLoggedIn = 0 // Number
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn) // Boolean
console.log(booleanIsLoggedIn) // false

console.log("____________________________________________________________________________________")

// Conversion from number to a string
let someNumber = 44
console.log(typeof someNumber) // number

let stringNumber = String(someNumber)
console.log(stringNumber) // 44
console.log(typeof stringNumber) // String