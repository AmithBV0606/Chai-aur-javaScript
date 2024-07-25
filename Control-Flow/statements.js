// If Condition
const isUserLoggedIn = true
const temperature = 41

if(2 === '2'){
    console.log("Executed")
}

if (temperature < 50){
    console.log("Less than 50")
} else {
    console.log("Temperature is greater than 50")
}

// Comparison : <, >, <=, >=, ==, !=, ===, !==

console.log("________________________________________________________________________")

// Scope in conditionals
const score = 200

if(score > 100){
    let power = "fly"
    // var power = "fly"
    console.log(`User Power : ${power}`)
}
// console.log(`User Power : ${power}`); // Error : power is not defined

console.log("________________________________________________________________________")

// Short Hand Notation
const balance = 1000

// Implicit Scope : Assuming that there is a scope 
if(balance > 500) console.log("YES"), console.log("YESSSSS!!");

console.log("________________________________________________________________________")

// Nested if-else
if(balance < 500){
    console.log("Less than 500")
} else if(balance < 750) {
    console.log("Less than 750")
} else if(balance < 900) {
    console.log("Less than 900")
} else {
    console.log("Less than 1200")
}

console.log("________________________________________________________________________")

// Multiple Condition 
const IsLoggedIn = true
const debitCard = true

// &&(AND)
if(IsLoggedIn && debitCard){
    console.log("Allowed to buy");
}

console.log("________________________________________________________________________")

// OR(||)
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged Inn")
}