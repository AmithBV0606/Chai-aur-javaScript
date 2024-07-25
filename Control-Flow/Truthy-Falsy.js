// // Truthy Values 

// In JavaScript, a truthy value is a value that is considered to be "true" when encountered in a Boolean context. 

// Examples of truthy values in JavaScript  : 

// if (true)
// if ({})
// if ([])
// if (42)
// if ("0") // "false", " "
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

const userEmail1 = "amith@0606.ai"

if ([]) {
    console.log("Got user email")    
} else {
    console.log("Don't have user email")
}

console.log("____________________________________________________________________")

// Falsey Values

// A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

// list of JavaScript falsy values:

// Null
// Undefined
// false
// NaN
// 0
// -0
// 0n
// ""
// document.all

const userEmail2 = ""

if (userEmail2) {
    console.log("Got user email")    
} else {
    console.log("Don't have user email")
}

console.log("___________________________________________________________________")

// To detect if Array, Object and String is Empty
if(userEmail2.length === 0){
    console.log("Empty String")
}
// Same for Array

// To check if object is empty or not
const emptyObj = {}

if (Object.values(emptyObj).length === 0){
    console.log("Object is empty")
}

// Note : false == 0 => True
// false == '' => True
// 0 == '' => True