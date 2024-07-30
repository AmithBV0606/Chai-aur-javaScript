// Async - Await : 

// An async function declaration creates an "AsyncFunction" object.

// Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

// Async functions can contain zero or more await expressions.

// Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. 

// The resolved value of the promise is treated as the return value of the await expression.

// Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false;
        if(err){
            resolve({username:"javascript", password:"123"})
        } else {
            reject("ERROR!! JS went sideways")
        }
    }, 2000);
});

// Instead of using (.then) use the following

// async function consumePromiseFive(){
//     const Response = await promiseFive;
//     console.log(Response)
// }

// consumePromiseFive(); // There will be no erroe if err = true

// Note : Async and await has no inbuilt mechanism to handle errors.

// if err = false, in-.order to handle errors we use try catch exceptions.

async function consumePromiseFive(){
    try {
        const res = await promiseFive;
        console.log(res);
    } catch (error) {
        console.log("ERROR : ", error);
    }
}
consumePromiseFive();

// _________________________________________________________________________________

// Summary : 

// "async and await make promises easier to write".

// async makes a function return a Promise.

// await makes a function wait for a Promise.