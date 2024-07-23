// Nested Function : 

// Closure
function one(){
    const username = "Amith"

    function Two(){ // Closure function
        const website = "YouTube"
        console.log(username)
    }

    Two()

    // console.log(website)

}

one()

// Scope in if-else statement 
if(true){
    const username = "Amith"

    if(username === "Amith"){
        const website = " YouTube"
        console.log(username + website) // Will run
    }

    // console.log(website) // Error
}

// console.log(username) // Error

console.log("___________________________________________________________________________")

// Function writing Technique

// function addOne(num){
//     return num + 1
// }
// addOne(5)

// const addTwo = function(num){ // Function Expression
//     return num + 2
// }
// addTwo(5)

// Hoisting using Normal function
console.log(addOne(5))
function addOne(num){
    return num + 1
}

// Hoisting using Function expression
console.log(addTwo(5)); // Errot : Cannot access 'addTwo' before initialization
const addTwo = function (num){
    return num + 2;
}