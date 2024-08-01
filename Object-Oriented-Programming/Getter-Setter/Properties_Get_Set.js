// Under the hood of setters and getters using function (found in old code base)

// Getters and Setters on functions

function User(email, password) {
    this._email = email;
    this._password = password;

    // How getters and setters were defined earlier?
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}

const chai = new User("chai@gmail.com", "aarr")
console.log(chai.email);
console.log(chai.password);