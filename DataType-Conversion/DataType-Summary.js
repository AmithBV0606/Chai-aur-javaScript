// Based on the way the data is stored and accessed in the memory, data types are divided into the following category

// Primitive Data Types => Call By Value

// 1) String
// 2) Number
// 3) BigInt
// 4) Boolean
// 5) null(it's not 0, it's empty)
// 6) undefined
// 7) Symbol

// Symbols
const id1 = Symbol("123");
const id2 = Symbol("123");
console.log(id1 == id2);
console.log(id1 === id2);

// Bigint
const bigNumber = 656859756756569866n;

// Non-Primitive or Reference Type => Call By Reference

// 1) Arrays
// 2) Objects
// 3) Functions

//Arrays :
const heros = [
    "Captain America",
    "Iron Man",
    "Hulk",
    "Thor",
    "Hawkeye",
    "Blackwidow",
];

// Objects :
let myObj = {
    name: "amith",
    age: 23,
};

// Functions : 
const myFunction = function() {
    console.log("Hellooo!")
}

myFunction();
console.log(typeof heros) // object
console.log(typeof myObj) // object
console.log(typeof myFunction) // Function
console.log(typeof id1) // Symbol
console.log(typeof bigNumber) // bigint

// Resources : https://262.ecma-international.org/5.1/#sec-11.4.3