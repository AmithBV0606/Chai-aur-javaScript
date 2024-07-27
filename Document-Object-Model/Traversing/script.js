// Traversing

// Operations on Parent element

const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children); // HTMLcollection
console.log(parent.children[1].innerHTML);

// For loop on HTMLcollection
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML)
}

parent.children[1].style.color = "orange";

// Operation on Children elements
console.log(parent.firstElementChild); // <div class="day">Monday</div>
console.log(parent.lastElementChild); // <div class="day">Thursday</div>

// Here in the above examples we're moving from Parent to Children element, now we'll see the examples for moving from children to parent element

const dayOne = document.querySelector('.day');
console.log(dayOne.parentElement);

// Moving from sibling to sibling
console.log(dayOne.nextElementSibling); 
// OP : <div class="day" style="color: orange;">Tuesday</div>

// Child Nodes
console.log("NODES : ", parent.childNodes);
// Note : ReactJs uses childNode