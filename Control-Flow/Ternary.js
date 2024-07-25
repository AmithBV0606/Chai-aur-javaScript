// Nullish Coalescing Operator (??): null undefined

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// Syntax : variable ?? default_value

let val1;

val1 = 5 ?? 10;  // OP : 5
let val2 = null ?? 10 //OP : 10
let val3 = undefined ?? 15 //OP : 15
let val4 = null ?? 15 ?? 20 //OP : 15
let val5 = null ?? undefined

console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)

console.log("___________________________________________________________________")

// Ternary Operator

// Syntax : condition ? true : false 
const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80"); 