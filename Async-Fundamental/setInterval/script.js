// setInterval

// The "setInterval()" method calls a function at specified intervals (in milliseconds).

// The "setInterval()" method continues calling the function until "clearInterval()" is called, or the window is closed.

// 1 second = 1000 milliseconds.

// Syntax : setInterval(function() {}, 2000);

// Example 1 : 
// setInterval(() => {
//     console.log("Hii Amith");
// }, 2000);

// Example 2 :
// const sayAmith = function(str){
//     console.log(str);
// } 
// setInterval(sayAmith, 3000, "Amit");

// Example 3 : 
const sayAmith = function(){
    console.log("Amith");
}

let intervalID;

document.querySelector('#start').addEventListener('click', ()=>{
    console.log("Started");
    intervalID = setInterval(sayAmith, 2000)
})

document.querySelector('#stop').addEventListener('click', () => {
    clearTimeout(intervalID);
    console.log("Stopped");
})