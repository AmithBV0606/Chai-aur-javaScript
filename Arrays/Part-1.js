// Arrays : Enables storing of multiple items under a single variable

// Arrays in JavaScript are resizeable and can contain a mix of different data types

// Arrays are zero-indexed

let myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[1])

// Shallow Copy : 

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.

const myArr2 = new Array(1,2,3,4,5,6,7,8);
console.log(typeof myArr2, myArr2)

// METHODS

// Insert an element into the existing array
myArr.push(6)
console.log(myArr)

// To remove an element from an array
myArr.pop()
myArr.pop()
console.log(myArr)

// To insert an element at the beginning of an array
myArr.unshift(10)
console.log(myArr)

// To remove the 1st element from an existing array
myArr.shift()
console.log(myArr)

// Questioniare Method
console.log(myArr.includes(9)) 
console.log(myArr.indexOf(3)) 

// Join Method : Adds all the elements of an array into a string, seperated by the specified seperator
const newArr = myArr.join(" -**- ")
console.log(newArr)
console.log(typeof newArr)

// VERY IMPORTANT!

// Slice = Like Sub-string
console.log("Before Slice : ", myArr)

console.log(myArr.slice(1, 3)) // index 3 will be excluded

console.log("After Slice : ", myArr)

console.log("_______________________________________________________________________________")

// Splice = Manipulates the original array
console.log("Before Splice : ", myArr)

console.log(myArr.splice(1, 3)) // last index will be included 

console.log("After Splice : ", myArr)


// Methods used in Part-1,js

// 1) length
// 2) push()
// 3) pop()
// 4) unshift()
// 5) shift()
// 6) join()
// 7) includes()
// 8) indexof()
// 9) slice()
// 10) splice()