// Types of Memories

// 1) Stack(Primitive Type) => You'll get a COPY of variable declared.

let myName = "Amith";

let anotherName1 = myName;
anotherName1 = "Rao"

console.log(myName)
console.log(anotherName1)

let anotherName2 = myName
anotherName2 = "Vikram"

console.log(myName)
console.log(anotherName2)

// // 2) Heap(Non-primitive data types) => You'll get a REFERRENCE of original value.

let user1 = {
    email:"user@google.com",
    upi:"user@ybl"
}

let user2 = user1

console.log(user1)
console.log(user2)
console.log(user1 === user2)

// console.log("______________________________________________________")

user2.email = "Amith@google.com"
console.log(user1)
console.log(user2)
console.log(user1 === user2)