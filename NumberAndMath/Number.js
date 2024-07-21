const score = 400
console.log(score)

// Another way to create a variable which holds number
const balance = new Number(10000)
console.log(balance)
console.log(typeof balance) // Object

// Convert to String
let newBalance1 = balance.toString();
console.log(newBalance1)
console.log(typeof newBalance1)
console.log(newBalance1.toString().length);

// Fixed Method
const newBalance2 = new Number(1000)
console.log(newBalance2.toFixed(3))

// Precision Method
const otherNumber1 = 23.7772 
const otherNumber2 = 123.9332 

console.log(otherNumber1.toPrecision(3))
console.log(otherNumber2.toPrecision(3))

// Locale String Method
const hundreds = 1000000

console.log(hundreds.toLocaleString()) // Default - USA
console.log(hundreds.toLocaleString('en-IN'))