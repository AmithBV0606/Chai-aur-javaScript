// Inheritance in Object Oriented Programming

// Class creation
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        // User.call(this, username)
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username} sir!`)
    }
}

// Object creation
const chai = new Teacher("Amith", "am0606@gmail.com", "1234");
chai.logMe();
chai.addCourse();

const tea = new User("Green Tea");
tea.logMe();

// True or False question
console.log(chai === tea);
console.log(chai instanceof Teacher);
console.log(tea instanceof Teacher);
console.log(tea instanceof User);
console.log(chai instanceof User);