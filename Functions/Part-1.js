// FUNCTIONS

function sum(a, b){ // (a,b) => Parameter
    // return a+b;
    let sum = a + b;
    return sum;
}

const result = sum(2, 4) // (2, 4) => Argument
console.log(result)

console.log("_________________________________________________________________________")

function addTwoNumbers(number1 , number2){
    console.log(number1 + number2) // console.log doesn't mean the function is returning the value
}

addTwoNumbers(2, 4)
addTwoNumbers(2, "4")
addTwoNumbers(2, "a")
const finalResult = addTwoNumbers(4,5)
console.log("Result : ", finalResult) // undefined

console.log("_________________________________________________________________________")

function loginUserMessage(username){ // To set a default username, username = "User"
    if(!username){  // username === undefined => !username
        console.log("Please enter a User name")
        return
    }
    return `${username} just Logged in.`
}

console.log(loginUserMessage("Amith"))
// console.log(loginUserMessage())