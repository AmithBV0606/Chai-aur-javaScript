// Scope => {} : Closures, Lexical Scoping

let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

console.log("__________________________________________________________________")

// Variable Shadowing using "var"
var f = 600;

if (true) {
  let d = 40;
  const e = 50;
  var f = 90;
  console.log("Inner : ", f); // Output : Inner :  90
}

// console.log(d); // Error : d is not defined
// console.log(e); // Error : e is not defined
// console.log(f);

console.log("Outer :", f); // Output : Outer : 90

// Result of both console.log is 90 because the var "f" inside the "if" condition is shadowing the global var "f".

console.log("__________________________________________________________________")

// Variable Shadowing using "let"
let g = 1200;

if (true) {
  let g = 100;
  const h = 200;
  var i = 300;
  console.log("Inner : ", g); // Output : Inner :  100
}

console.log("Outer : ", g); // Output : Outer :  1200