// This : Points to current context

// Definition : The "this" keyword refers to the context where a piece of code, such as a function's body, is supposed to run. 

// Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

const user = {
    username: "Amith",
    price: 1000,

    welcomeMsg: function(username){
        console.log(`${username} welcome to our website`);
        console.log(`${this.username} welcome to our website`);
        console.log(this)
    }
}

// console.log(user.welcomeMsg)
user.welcomeMsg("Vikranth");

console.log("________________________________________________________________")

const user2 = {
    username: "Amith",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to our website!`)
        console.log(this)
    }
}

user2.welcomeMessage();
user2.username = "Vikram"
user2.welcomeMessage();

// console.log(this) 
// This will print an empty object because we're trying to log "this" in a node environment and not in browser environment

// In browser the global object is window object

console.log("___________________________________________________________________")

// THIS Keyword with functions. (Which won't work)

// Way 1 : 
function chai1(){
    let username = "AMith"
    console.log(this); // Prints all methods available for use inside chai1 function.
    console.log("this.username : ",this.username);
}
console.log("Way 1 : ")
chai1()

// Way 2 : won't work
const chai2 =function(){
    let username = "AMith"
    console.log(this); // Prints all methods available for use inside chai2 function.
    console.log("this.username : ",this.username);
}
console.log("Way 2 : ")
chai2()