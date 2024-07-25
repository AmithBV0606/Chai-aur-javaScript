// Maps in JavaScript

// The "Map" object holds key-value pairs and remembers the original insertion order of the keys. 

// Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kingdom")
map.set("IN", "India") // This is not possible
// Note : We cannot enter duplicate key value pair

console.log(map);

console.log("________________________________________________________________");

// For-of loop on Map
for (const key of map) {
    console.log(key);
}


for (const [key, value] of map) {
    console.log(key, ':', value)
}

console.log("________________________________________________________________");

// For-in loop on Map
for (const key in map) {
    console.log(key)
}

// Note : for-in loop cannot be used on Map