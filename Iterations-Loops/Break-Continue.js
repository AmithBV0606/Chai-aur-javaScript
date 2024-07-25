// Keywords : 

// Break 
for (let index = 1; index <= 20; index++) {
    // if(index == 5) break;
    if(index == 5){
        console.log(`Detected 5`)
        break;
    }
    console.log(`Value of i is ${index}`)
}

console.log("___________________________________________________________________")

// Continue
for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log(`Detected 5`)
        continue;
    }
    console.log(`Value of i is ${index}`)
}