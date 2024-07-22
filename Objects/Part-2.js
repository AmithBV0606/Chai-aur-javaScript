// SingleTon Object

const tinderUser = new Object({
    Fname: "Amith",
});

// const tinderUser = {} => Non-singleton Object/ object literal

tinderUser.Lname = "Rao"
tinderUser.age = "23"
tinderUser.isLoggedIn = false

console.log(tinderUser);

console.log("____________________________________________________________________________________")

// Object inside an Object
const bumbleUser = {
    email:"some@gmail.com",
    fullName: {
        userName: {
            firstName:"Amith",
            lastName:"Rao"
        }
    }
}
// DOT Notation
console.log(bumbleUser.fullName?.userName.firstName) // Amith

console.log("____________________________________________________________________________________")

// Combining 2 objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// Way 1 : 
const obj3 = {obj1, obj2}
console.log("Way1 : ", obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj1)

// Way 2 : 
const obj4 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2) // This is the syntax usually adviced to use
console.log("Way2 : ",obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1)

// Way 3 : Used 90% of the times
const obj5 = {...obj1, ...obj2}
console.log("Way3 : ",obj5)
console.log(obj1)

console.log("____________________________________________________________________________________")

// Array of Objects
const user = [
    {
    id:1,
    email:"a@gmail.com"
},
{
    id:2,
    email:"b@gmail.com"
},
{
    id:3,
    email:"c@gmail.com"
},
{
    id:4,
    email:"d@gmail.com"
}]

console.log(typeof user) // object
console.log(user[0].email) // a@gmail.com

console.log("____________________________________________________________________________________")

// Seperation of Key and value in an object
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

// Note : The output of the keys, values and entries will be an array

console.log("____________________________________________________________________________________")

// To check if a value exists in an Object
console.log(tinderUser.hasOwnProperty('isLoggedIn'))