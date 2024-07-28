// Events in JavaScript

// Way to apply events on elements
const owl = document.getElementById('owl');

// Way 1 : is to apply onClick method in the attribute of an Element.

// Way 2 : Again this method is not the best and also has the less features!!
// owl.onclick = function(){
//     alert("This is owl's pic!!")
// }

// Way 3 : To apply events using "Event Listeners"
// owl.addEventListener('click', () => {
//     alert("This is an owl's image!!");
// })

// NOTE : addEventListener method takes 3 params, an event name, callback Func and false[by default]
// 3rd param is related to event propagation

// ______________________________________________________________________________________________

// Event Object

// owl.addEventListener('click', function(e){
//     console.log(e); // View the output in browser
//     console.log(e.target);
//     console.log(e.target.width);
//     console.log(e.target.src)
// })
// defultPrevented : to change the default behaviour Eg: form submission

// Event Object Methods :  Important Topics 
    //type, timestamp
    // target, toElement, srcElement, currentTarget
    // clientX, clientY, screenX, screenY
    // altKey, ctrlKey, shiftKey, keyCode

// ______________________________________________________________________________________________

// Event Propagation

// context of Event Propagation : 1) Event bubbling 2) Event capturing

// 1) Event Bubbling : Goes from bottom to top when the 3rd parameter is set to "false".

// 3rd params is by default set to "false" and the event progagation will be in "Bubbling" format.

// document.getElementById('images').addEventListener('click', () => {
//     console.log("Clicked inside the UL");
// }, false)

// document.getElementById('owl').addEventListener('click', (e) => {
//     console.log("Owl Clicked");
//     e.stopPropagation()
// }, false)

// 2) Event Capturing : Goes from top to bottom when 3rd parameter is set to "true".

// document.getElementById('images').addEventListener('click', (e) => {
//     console.log("Clicked inside the UL")
//     // e.stopPropagation()
// }, true)

// document.getElementById('owl').addEventListener('click', () => {
//     console.log("Owl Clicked")
// }, true)

// ________________________________________________________________________________________

// Prevent Default
// document.querySelector('#google').addEventListener('click', function(e){
//     e.preventDefault() // In order to prevent from opening google page
//     console.log("Google Clicked")
// }, false) // to run this properly uncomment the Event Bubbling part above

// ____________________________________________________________________________________________

// Activity : Remove the image as soon as it is clicked

document.querySelector("#images").addEventListener('click', (e) => {
    console.log(e.target)
    console.log(e.target.id)
    console.log(e.target.tagName)
    if (e.target.tagName === "IMG") {
        e.target.parentNode.remove();

        // OR
        // let removeIt = e.target.parentNode
        // removeIt.parentNode.removeChild(removeIt)
    }
}, false)