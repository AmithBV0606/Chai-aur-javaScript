// Normal Comparison

// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 != 1)

// Here JS automatically converts '2' into 2 , a string type to the Number

console.log("2" > 1); // true
console.log("02" > 1); // true

// Note : Before comparing 2 values, make sure that both the values are of same data type.

// Here in comparison operator(except ==), null will be converted to 0
console.log(null > 0); // false
console.log(null == 0); // false

// NOTE : The reason for printing false in the above case is because equality(==) and comparison(>,<, >=, <=) works differently.

console.log(null >= 0); // true

// Comparison converts null to a number, trating it as 0.

// Comparison with undefined
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// Strict Check
console.log('2' == 2) // true
console.log('2' === 2) // false