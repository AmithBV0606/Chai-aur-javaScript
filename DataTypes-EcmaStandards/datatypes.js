"use strict" // Treat all JS code as newer version

// alert( 5 + 5); // we are using nodejs, not browser

console.log(3 
    +
    4); // Code readability should be high, don't do this

console.log('Amith');

// Data Types : 

// 1) Primitive data type : 
// String : 
let name = "Amith";

// Number : 
let age = 23;

// BigInt :
let phNo = 12345678990224556n;

// Boolean : 
let isLogged = true;

// null : It's a stand alone value, it's not zero, it's not undefined, it's just EMPTY.
let temp = null;

// undefined : When a variable is not defined
let emailId;
// let emailId = undefined;

// Symbol : Uniqueness
let userId = Symbol("123abc");


// 2) Non-primitive or reference type :

// Object : 
let userA = {
    name: 'Amith',
    age: 23
}

// Arrays : 
const arr = [1,2,3,4,5];

// Functions : 
function add(a, b){
    return a + b;
}

// Typeof Method : This method is used to find the data type of a variable, for example 
console.log(typeof phNo); //bigint
console.log(typeof temp); // object
console.log(typeof emailId); // undefined