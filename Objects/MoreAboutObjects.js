// Advance Object Concepts

// This video was focused more on knowing the hidden features of JavaScript Objects.

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

// Can the value of PI be changed??

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);

// Creating the Object using factory function
const myNewObj = Object.create(null);

// Normal way
const chai = {
    name:'Ginger Tea',
    price:250,
    isAvailable: true,

    orderChai:function(){
        console.log("Chai nahi bani")
    }
}

console.log("BEFORE : ", Object.getOwnPropertyDescriptor(chai, "name"));

// Inorder to define the properties of the object that was created by us :  
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
});

console.log("AFTER : ",Object.getOwnPropertyDescriptor(chai, "name"));

// Iterations on Objects
// console.log(Object.keys(chai)); // Returns an Array

for (let [key, value] of Object.entries(chai)) {
    // if (typeof value !== "function") {
        console.log(`${key} : ${value}`);        
    // }
}

// Note : Even though "for-of" loop is not iterable on objects, in the above case it is iterable, that's because Object.entries(chai) returns an Array, on which the "for-of" loop is iterable!!