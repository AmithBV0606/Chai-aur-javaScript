class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    // Not everytime you want to give access of particular methods(createId, in this example) to all the new objects instantiated by the class(User, in this example). That's when we use "static" keyword

    static createID(){
        const random = Math.floor(Math.random() * 100 + 1)
        console.log(random)
    }
}

const Amith = new User("Amith");
Amith.logMe();
// console.log(Amith.createID()); // Error : Amith.createID is not a function

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Vikram = new Teacher("Vikram", "i@phone.com");
Vikram.logMe();
// Vikram.createID(); // Error : Vikram.createID is not a function/