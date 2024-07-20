 let value = 3;
 let negValue = -value;
 console.log(negValue);

//  Normal Operations (Basic Maths Operation)
console.log(2+2)
console.log(-2)
console.log(2*2)
console.log(2/2)
console.log(2**2)
console.log(2%2)

let str1 = "Hello ";
let str2 = "Amith";

let str3 = str1.concat(str2);
console.log(str3);

// Weird stuff 
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");

console.log(+true);
console.log(+"");

let num1 , num2 , num3;
num1 = num2 = num3 = 2 + 2;

// Postfix
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

// Prefix
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

console.log("OP : ", 3 + 4 * 5 % 3)