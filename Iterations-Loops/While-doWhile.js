// While Loop : 

let index = 0; // Initialization
while (index <= 10) { // Conndition
    console.log(`Value of index is ${index}`);
    index = index + 2;    // Updation
}

console.log("______________________________________________________________");

// Looping through an Array : 
let myArray = ["Ironman", "Captain America", "Thor"]
let arr = 0;
while (arr < myArray.length) {
    console.log(myArray[arr]);
    arr++;    
}

console.log("______________________________________________________________");

// do-while Loop :
let score = 1 // // Initialization
do {
    console.log(`Score is ${score}`)
    score++; // Updation
} while (score <= 10); // Conndition