// Object Literls
const user = {
    name:"Amit",
    "full name": "Amith Rao",
    age:23,
    location:"Bengaluru",
    email:"amithbv0606@gmail.com",
    isLoggedIn: false,
    lastLoginDays :  ["Monday", "Friday"]
}

// Ways of accessing object items:

// 1) Using DOT operator
console.log(user.name)
console.log(typeof user.age)
// Note : Full Name cannot be accessed through the DOT operator

// 2) Using Square brackets
console.log(user["name"])
console.log(user["full name"]) 

console.log("______________________________________________________________________________")

// Symobols in Objects  

// Symbol Declaration
const mySym = Symbol("Key1")

// Using a variable of data type SYMBOL, as a KEY in the Object
const user2 = {
    // mySym:"000112" => Wrong Way
    [mySym]:"00112"
}

console.log(mySym)
console.log(typeof mySym)
console.log(user2[mySym])

console.log("_______________________________________________________________________________")

//Changing the values of Object items
user.name = "Vikram"
console.log(user)

// To freez the Objects so that no changes can be made further
// Object.freeze(user)

console.log("_________________________________________________________________________________")

// Funcrions in Objects
user2.greetings = function() {
    console.log("Good Morning")
}

console.log(user2.greetings) // Returns function reference
console.log(user2.greetings())

console.log("_________________________________________________________________________________")

user.greetingsTwo = function(){
    console.log(`How are you ${this.name} ?`) // 'this' is the reference to the same object i.e user
}

console.log(user.greetingsTwo())
console.log(user)