// Creating elements using function

function addLanguage(langName){
    const list = document.createElement('li');
    list.innerHTML = `${langName}`;
    document.querySelector(".language").appendChild(list);
}

addLanguage("Python");
addLanguage("TypeScript");

function addOptiLanguage(langName){
    const list = document.createElement('li');
    list.appendChild(document.createTextNode(langName))
    const UL = document.querySelector('.language')
    UL.appendChild(list)
}

addOptiLanguage("GoLang");
addOptiLanguage("Ruby");

// ______________________________________________________________________

// Editing Elements

const langToReplace = document.querySelector("li:nth-child(2)");
// console.log(langToReplace);

// Way 1 : 
// langToReplace.innerHTML = "Rust"; // Not recommended

// Way 2 : Create a new element and replace the old element with the new element.
const newli = document.createElement('li');
const langToAdd = document.createTextNode("Rust")
newli.appendChild(langToAdd);

langToReplace.replaceWith(newli);

// Way 3 : 
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>Three.js</li>"

// ______________________________________________________________________

// Removing the element

const lastLang = document.querySelector('li:last-child');
lastLang.remove();