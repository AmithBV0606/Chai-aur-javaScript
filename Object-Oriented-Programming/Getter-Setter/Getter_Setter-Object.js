const User = {
    firstName:"John",
    lastName: "Doe",
    
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(name){
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(User.fullName);

User.fullName = "Jane Smith";
console.log(User.firstName);
console.log(User.lastName);

// Just like we use "new" keyword, in Objects the "factory" function is used :
const amith = Object.create(User);
console.log(amith);
console.log(amith.fullName);