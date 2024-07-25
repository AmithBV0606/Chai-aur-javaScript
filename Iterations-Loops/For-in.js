// For-in Loop on different data types :  

// 1) on Object : 
const myObject = {
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by Apple"
}

for (const key in myObject) {
    // console.log(key)
    // console.log(myObject[key])
    console.log(`${key} is shortform for ${myObject[key]}`)
}

console.log("_____________________________________________________________________________________")

// 2) on Arrays : 
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
    console.log(key, ":", programming[key]);
}

console.log("__________________________________________________________________________________");

// 3) on Strings
const greetings = "Hello World"

for (const greet in greetings) {
    if(greet == " "){ // The condition should've been (greetings[greet])
        continue;
    } // This is wrong
    console.log(`Each char's Index is : ${greet}`)
}

// Correct way
for (const greet in greetings) {
    if(greetings[greet] == " "){
        continue;
    }
    console.log(`Each char is : ${greetings[greet]}`)
}