// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptedPassword(){
//         return `${this.password}abc`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const chai = new User("Amith", "am06060@gmail.com", "123");
// console.log(chai);
// console.log(chai.encryptedPassword());
// console.log(chai.changeUsername());

// __________________________________________________________________________________

// Behind the scene of what's happening in the class.

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptedPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User("Vikram", "am06060@gmail.com", "123");
console.log(tea);
console.log(tea.encryptedPassword());
console.log(tea.changeUsername());