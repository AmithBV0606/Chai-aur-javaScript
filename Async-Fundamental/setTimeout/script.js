// Executing setTimeout actually calls out to code that is not part of JS. It's part of a Web API which the browser provides for us.

// setTimeout and setInterval is not the part of core JavaScript.

// Syntax : setTimeout(function(), 2000);

// Example 1 : 
// setTimeout(() => {
//     console.log("Hii Amith");
// }, 2000);

// Example 2 :
// const sayAmith = function(){
//     console.log("Amith");
// } 
// setTimeout(sayAmith, 3000);

// Example 3 :
const changeText = function(){
    const text = document.getElementsByTagName("h1");
    for (let i = 0; i < text.length; i++) {
        text[i].innerText = "Best JS Course"
    }
}
const changeMe = setTimeout(changeText, 3000);

document.querySelector('#stop').addEventListener('click', () => {
    clearTimeout(changeMe, 2000);
    console.log("Stopped");
})