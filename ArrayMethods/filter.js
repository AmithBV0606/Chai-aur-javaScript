// Filter method to iterate on Array

const numbers = [1,2,3,4,5,6,7,8,9,10];

// Filter Operation : 

// Example 1 : Implicit return
const result = numbers.filter( (num) => num > 5)
console.log(result);

// Example 2 : Explicit return
const result2 = numbers.filter( (num) => {
    return num <= 5 
})
console.log(result2);

// Example  3 : Same thing but with forEach loop : Filter method implementation using forEach loop
const temp = [];
const myNums = [1,2,3,4,5,6,7,8,9,10];

myNums.forEach((num) => {
    if (num > 4) {
        temp.push(num)
    }
})
console.log(temp);

// Since ForEach doesn't return anything, it cannot be stored in a variable, like 

// const values = myNums.forEach( (num) => { // This cannot be done
//   console.log(num)
// })

console.log("__________________________________________________________________________________");

// Exercise on Filter Method: 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Exercise 1 : Return the array with book titles whose genre is Non-Fiction
const exercise1 = books.filter((book) => book.genre == 'Non-Fiction').map((book) => book.title)
console.log("Exercise 1 : ", exercise1);

// Exercise 2 : Return the object whose genre is History
const exercise2 = books.filter((book) => book.genre ==='History')
console.log("Exercise 2 : ", exercise2);

// Exercise 3 :Return the Books which were published after 2000
const exercise3 = books.filter((book) => {
    return book.publish >= 2000;
})
console.log("Exercise 3 : ", exercise3);

// Exercise 4 :Return the Books which were published after before 1995 and genre should be History
const exercise4 = books.filter((book)=>{
    return book.publish >= 1995 && book.genre === "History"
})
console.log("Exercise 4 : ", exercise4)