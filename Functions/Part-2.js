// Rest Operator = E-commerce shopping cart
function calculateCartPrice1(...num1){ // Rest operator
    return num1.reduce((acc, cur) => {
        return acc + cur;
    }, 0)
}

console.log(calculateCartPrice1(200,300,400));

function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice2(200,300,400, 500, 700))

// Passing Objects in functions

const user = {
    username:"Amith",
    age:23
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the Age is ${anyobject.age}.`)
}

// handleObject(user)
handleObject({
    username:"Vikram", 
    age:25
})

// Passing Arrays in functions

const myArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray))
console.log(returnSecondValue([500, 1000, 1500, 2000]))