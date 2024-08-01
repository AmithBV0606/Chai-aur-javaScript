// Object literal

const user = {
    username : "Amith",
    loginCount : 8,
    signedIn : true,

    gotUserDetails: function(){
        // console.log("Got users info")
        console.log(`Username : ${this.username}`)
        console.log(this)
    }
}

// console.log(this); // {}
// console.log(user.username) // Amith
// console.log(user['loginCount'])  // 8
// console.log(user['gotUserDetails']) // [Function: gotUserDetails]
// console.log(user['gotUserDetails()']) // Undefined
// console.log(user.gotUserDetails) // [Function: gotUserDetails]
// console.log(user.gotUserDetails());

// ______________________________________________________________________________________

// Constructor Function

// new : "new" keyword is a constructor function, which allows you to create multiple instances from a single object.

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this // Doesn't have to return "this". It is returned by default
}

// const userOne = User("Amith", 10, true);
// const userTwo = User("Rao", 20, false);
// console.log(userOne); 

// Here, in the above example, the values of userTwo overrides the values of userOne. So it is important to create new instance everytime using the "new" keyword

const userOne = new User("Amith", 10, true);
console.log(userOne);
console.log(userOne.username);

const UserTwo = new User("Arun", 9, true)
console.log(UserTwo)
console.log(UserTwo.username)

// ___________________________________________________________________________________

// In oop's, "new" keyword allows you to create multiple instances using a single object literal.

// Summary : "new" keyword

// 1) Whenever "new" keyword is used, an empty object is created which is also called as instance.

// 2) A constructor function is called everytime because of "new" keyword.

// 3) All the arguements are injected into "this" keyword.

// 4) Passed arguements will be received by the function.