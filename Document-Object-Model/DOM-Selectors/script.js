// Whatever is written in this file, will not be executed in the node environment, it has to be executed in the browser environment.

// Selector 1 : getElementById

document.getElementById('title') // And hit Enter

document.getElementById('title').id

// document.getElementById('title').class // This is wrong

document.getElementById('title').className

// To know the value of the attribute
document.getElementById('title').getAttribute('class')
document.getElementById('title').getAttribute('id')

// To set new values for the attributes
document.getElementById('title').setAttribute('class', 'test')
document.getElementById('title').setAttribute('class', 'test heading')

const title = document.getElementById('title');
title.style.backgroundColor = "green"
title.style.color = "gold";
title.style.padding = "15px";
title.style.borderRadius = "15px"

// Ways to change the content(text node) of an element - To know the difference between them, add a span tag inside the h1 tag in the index.html file and add a styling attribute like display:none;

// Way 1 : textContent
console.log(title.textContent); // Output : DOM - Learning on Chai aur code test text

// Way 2 : innerHTML : Supports HTML tags and other 2 doesn't
console.log(title.innerHTML); // Output : DOM - Learning on Chai aur code <span style="display: none;">test text</span>

// Way 3 : innerText : Texts that are visible on screen
console.log(title.innerText); // Output : DOM - Learning on Chai aur code

// _________________________________________________________________________________________________________

// Selector 2 : getElementByClassName

document.getElementsByClassName('heading') // Output : HTMLcollection

const myH2 = document.getElementsByClassName('myH2');
console.log(myH2); // Output : HTMLcollection

// Cannot use forEach on HTMLcollections

// Inorder to access HTMLcollection elements, we need to convert the HTMLcollections into an Array, as shown below

const convertedElements = Array.from(myH2); // Array.from method returns a new Array
convertedElements.map((item) => {
    item.style.color = "orange"
})

// _________________________________________________________________________________________________________

// Selector 3 : querySelector : Will recieve the first element 

// To understand this selector better add few h2 tags in index.html file

document.querySelector('h2');

// Using class and id inside querySelector
document.querySelector('.heading');
document.querySelector('#title');

// Selecting input using querySelector : To understand this better add an input field in the index.html file
document.querySelector('input');
document.querySelector('input[type="password"]');

// CSS in query selector
document.querySelector('p:first-child')

// For example purpose add an unordered list in the index.html file
const myUl = document.querySelector('ul');
const myLi = myUl.querySelector('li');
myLi.style.color = 'orange';
myLi.style.backgroundColor = 'green';
myLi.style.padding = '15px';
myLi.innerText = "hundred";

// _________________________________________________________________________________________________________

// Selector 4 : querySelectorAll : Will recieve all the element 

const allList = document.querySelectorAll('li');
console.log(allList); // Output : NodeList(3) [li, li, li]
// allList.style.color = "blue"; // This will not work, as the output we've received is in the form of NodeList.

// Instead

allList[1].style.color = "blue";

// Note : Node list and HTMLcollections are similar to Array but they're not exactly an Array.

// We can also use forEach loop on Node List
allList.forEach((li) => {
    li.style.backgroundColor = "green";
})