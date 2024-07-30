// FETCH API

// Fetch using async and await

async function getUsers(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users"); // Network Request
        console.log(typeof res)
        console.log(res)

        console.log("__________________________________________________________________")

        const data = await res.json(); // In order to convert Js object to Json use [.json()].
        console.log(typeof data);
        console.log(data[0].username);

        //  This(`res.json()`) step is necessary because the body of the response is initially in a raw format (typically as a string) and needs to be converted into a usable JavaScript format.

        // Without calling res.json(), the response data would remain in its raw format, and you wouldn't be able to easily access or manipulate it as JavaScript objects or arrays.
    } catch (error) {
        console.log("ERROR : ", error);
    }
}

getUsers();

// ___________________________________________________________________________________________

// Fetch using (.then)

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log("ERROR", error)
// })