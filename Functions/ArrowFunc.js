// Introduction to Arrow Function

// "this" keyword won't work with arrow function at all!!!
const chaiAurCode = () => {
    let username = "AMith"
    console.log(this); // {}
    console.log("this.username : ",this.username);
}
chaiAurCode()

// function idk(){
//     console.log(this)
// }
// idk()

console.log("____________________________________________________________________");

// Syntax : 1) Basic : Explicit Return
const newFn = (num1, num2) => {
    return num1 + num2;
}
console.log(newFn(5,6));

// 2) Implicit return
const newFn2 = (num1, num2) => num1 + num2
console.log("Implicit return : ",newFn2(6,6));

// 3) Wrapping under a Parenthesis
const newFn3 = (num1, num2) => (num1 + num2)
console.log("Wrapping under a Parenthesis : ",newFn3(8,8));

console.log("____________________________________________________________________");

// Returning the Object
const newFn4 = () => ({name:"Amith"})
console.log(newFn4())

// Note : if you want to return an object, you have to wrap the object within parenthesis.