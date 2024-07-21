// Math is the default library of JavaScript

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(5.4)); // Only -ve value is converted to +ve and not vice-versa
// console.log(Math.floor(5.4));
// console.log(Math.ceil(5.4));
// console.log(Math.max(5, 4, 3, 1));
// console.log(Math.min(5, 4, 3, 1));

// Random Number 
console.log(Math.random()) // Returns a random number between 0 and 1

console.log(Math.random() * 10) // Returned number is multiplied by 10, so the numbers will be between 0 and 10

console.log((Math.random() * 10) + 1) // Now the returned number will be between 1 and 10

console.log(Math.floor(Math.random() * 10) + 1) // To remove the decimal numbers, can also use Math.ceil()

console.log("________________________________________________________________")

// To print a number between the two ranges
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))  +  min) // Important Formula