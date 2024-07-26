// Reduce method : Helpful while designing a cart

// Example 1 :
const myNums = [1,2,3,4,5];

const total = myNums.reduce((acc, currval) => {
    console.log(`acc : ${acc} and currval : ${currval}`)
    return acc + currval
}, 0)

// Instead
// const total = myNums.reduce((acc, curval) => acc+curval, 0)

console.log(total);

console.log("__________________________________________________________________________________");

// Reduce method implementation using forEach.
const number = [1,2,3,4,5];
let total1 = 0;
number.forEach((num) => {
    total1 += num
})
console.log(total1);

console.log("__________________________________________________________________________________");

// Example 2 : 
const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"java course",
        price:3999
    },
    {
        itemName:"Full-Stack course",
        price:4999
    }
];

const myTotal = shoppingCart.reduce((acc, cur) => acc + cur.price, 0)
console.log("Cart Total : ",myTotal); 