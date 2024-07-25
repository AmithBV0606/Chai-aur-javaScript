// For Loop : for(Initialization, condition, updation)

// Basic for loop:
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

console.log("____________________________________________________________________");

// Example 1 :
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is the best Number")
    }
    console.log(element)
} 

console.log("____________________________________________________________________");

// Nested for loop : Printing Tables

let count = 0;
for (let i = 5; i <= 5; i++) {
    console.log(`Outer loop value : ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and Outer loop ${i}`)
        console.log(`${i} * ${j} =`, i*j)
        count++;
    }
}
console.log("count : ", count)

console.log("____________________________________________________________________");

// For loop on Arrays : 
let myArr = ["Ironman", "Captain America", "Thor", "Hulk"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
}

// Note : if we use index <= myArr.length, after printing all the values of the array, undefined will be printed at last