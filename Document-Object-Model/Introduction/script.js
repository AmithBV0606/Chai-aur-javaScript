// Whatever is written in this file, will not be executed in the node environment, it has to be executed in the browser environment.

// https://en.wikipedia.org/wiki/Brendan_Eich

// Visit to the above mentioned site and in the console of that page, try running the code written below

console.log(window);

console.log(window.document);  // OR
console.log(document); // Both returns the same thing

console.dir(document);

console.dir(document.baseURI);

console.dir(document.links);

// Note : HTML Collections and Node List looks like array, but they're not!!

document.getElementById('firstHeading');

document.getElementById('firstHeading').innerHTML = "<h1>Amith</h1>"