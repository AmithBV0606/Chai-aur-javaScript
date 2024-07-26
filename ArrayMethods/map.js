// Map method to iterate on Array

const myNumbers1 = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNumbers1.map((num) => {
    return num + 10;
});
console.log(newNums);

console.log("__________________________________________________________________________");

const coding = ["js", "java", 'ruby',"python"]

// Since ForEach doesn't return anything, it cannot be stored in a variable, like this
const values = coding.forEach((item) => {
    console.log(item)
    return item
})
console.log(values);

console.log("__________________________________________________________________________");

// Map method implementation using forEach.
const myNumbers2 = [1,2,3,4,5,6,7,8,9,10];
const arr = []
myNumbers2.forEach((num) => {
    arr.push(num + 10);
})
console.log(arr);

console.log("__________________________________________________________________________");

// Method chaining : 
const myNumbers3 = [1,2,3,4,5,6,7,8,9,10];

const result = myNumbers3.map((num) => num + 10).filter((num) => num < 15);
console.log((result));