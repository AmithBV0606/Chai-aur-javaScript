// Getters and Setters on Classes

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }
    // Setters are never returned
    get password(){
        // return this._password.toUpperCase();
        return `${this._password}Amith`;
    }

    set password(value){
        this._password = value;
    }
}

// Note : In the above class "User", there is a race between constructor and getter-setter methods to set the values, due to which there will be an error named "Maximum call stack size exceeded".

// So a seperate variable name is used in getters and setters method.

// These seperate variables are "private" variables.

const amith = new User("amith@ai.com", "abc")
console.log(amith.password);
console.log(amith.email);

amith.email="0101@gmail.com"
console.log(amith._email); // Actuall email
console.log(amith.email); // Returned email

// Here, the original value of password is "abc", but when that password is accessed we're returning the password by adding "Amith" to it.