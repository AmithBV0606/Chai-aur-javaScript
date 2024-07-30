// Promises

// A "Promise" is an object representing the eventual completion or failure of an asynchronous operation and it's resulting value.

// Promises are the foundation of asynchronous programming in modern JavaScript. 

// A promise is an object returned by an asynchronous function, which represents the current state of the operation.

// A Promise is in one of these states:

// => pending: initial state, neither fulfilled nor rejected.
// => fulfilled: meaning that the operation was completed successfully.
// => rejected: meaning that the operation failed.

// NOTE : Most of the times we only consume the promise

// Example 1 : 
// Part 1 : Promise creation
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 1 is completed");
        resolve(); // Importent for ".then" to run.
    }, 2000);
});

// Part 2 : Promise consumption
promiseOne.then(()=>{ // ".then" is directly connected to resolve.
    console.log("Promise 1 is consumed");
});

// ________________________________________________________________________________________________

// Example 2 : 
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2 is completed");
        resolve()
    }, 4000);
}).then(() => {
    console.log("Promise 2 is consumed")
});

// ________________________________________________________________________________________________

// Example 3 : Passing values from resolve to ".then"!!
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name:"Amith",
            age : 24
        });
    }, 6000);
});

promiseThree.then((user) => {
    console.log(user);
});

// ________________________________________________________________________________________________

// Example 4 : 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;

        if (error) {
            reject("Something went wrong");
        } else {
            resolve({
                userName: "Amith B V",
                email: "amithrao0606@gmail.com"
            });
        }
    }, 8000);
});

// const username = promiseFour.then((user) => {
//     return user.username
// }).catch((error) => {
//     return `Error : ${error}`
// })
// console.log(username) // => This approach won't work

promiseFour
.then((user) => {
    console.log(user);
    return user.userName;
})
.then((myUsername) => {
    console.log(myUsername);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
});