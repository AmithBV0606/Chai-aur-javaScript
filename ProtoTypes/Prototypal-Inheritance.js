// Prototypal Inheritance

const user = {
    name:"Chai",
    email:"Chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false,
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Way 1 : 
}

// Way 2 : 
Teacher.__proto__ = user;

// Way 3 : Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(Teacher.name);
console.log(Teacher.email);
console.log(user.makeVideo); // undefined
// Because the Teacher can access the properties of user, but cannot happen vice-versa

console.log(TASupport.isAvailable);
console.log(TeachingSupport.makeAssignment);// undefined
// Because the TASupport can access the properties of TeachingSupport, but cannot happen vice-versa

// ___________________________________________________________________________________

// From previous file example
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`Full Length : ${this.length}`)
    console.log(`True length : ${this.trim().length}`)
}

anotherUsername.trueLength();

"Amith   ".trueLength()