// For-of loop is an Array specific Loop

// Syntax
// for (const iterator of object) {
    
// }
// Here object is not referring the object type in JS, it is generally referred as normal word in English

// 1) For-of Loop on Array : 
const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}

console.log("___________________________________________________________________")

// 2) On Strings : 
const greetings = "Hello World"

for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    console.log(`Each char is : ${greet}`)
}

console.log("____________________________________________________________________");

// 3) On Objects
const myObjects = {
    'game1' : 'NFS',
    'game2' : 'Counter Strike'
}

for (const [key, value] of myObjects) {
    console.log(key, value)    
}

// Error :  myObjects is not iterable

// for-of loop is not iterable on objects