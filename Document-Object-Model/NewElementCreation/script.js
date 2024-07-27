// Creating new elements

const Div = document.createElement('div');

Div.className = "main";
Div.id = "myID";
Div.setAttribute("title", "generated");
Div.style.backgroundColor = "green";
Div.style.padding = "15px"

// Ways to add text inside the element : 

// Way 1 :
// Div.innerText = "Hello";

// Way 2 :
const addText = document.createTextNode("Hello Amith!!");
Div.appendChild(addText)
console.log(Div);

// Now, the created 'div' is still in memory[air], but not yet attached on document.

// Inorder to reflect the element created by us, follow this :

document.body.appendChild(Div)