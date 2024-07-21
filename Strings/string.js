// 1) Concatination 
const name = 'Amith';
const repoCount = 50

// Old way 
console.log(name + repoCount + " Value")

// New way => String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

// New way to declare a string
const gameName = new String("BGMI")

// 2) Accessing individual characters
console.log(gameName[0])

// 3) To get the length of a string
console.log(gameName)
console.log(gameName.length)

// 4) To view all the Prototypes.
console.log(gameName.__proto__)

//5) To convert all the values to UpperCase or Lowercase
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())

// 6) CharAt
console.log(gameName.charAt(1))

// 7) indexof
console.log(gameName.indexOf("I")) // If found, returns the index else returns -1.

// 8) Sub-String => Cannot take -ve values
console.log(gameName.substring(0, 3)) // Excludes the last index.

// 9) Slice => Can take -ve values
console.log(gameName.slice(0, 3))
console.log(gameName.slice(-4, -2))

// 10) Trim
const newString = "           Amith B V here   "
console.log(newString)
console.log(newString.trim())
// trimStart and trimEnd also exists

// 11)Replace
console.log(gameName.replace('B', 'd'))

const url = "https://Amith.com/Amith%20BV%20Rao"
console.log(url.replaceAll("%20", "-"))

// 12) Includes
console.log(url.includes(",com")) // Returns true or false

// 13) Split(Imp) : Returns an array of strings with thee seperated values
// Split method accepts two values i.e seperator and limit

// Way 1 : of converting a string into an Array
const gameName1 = "My-fav-game-is-BGMI"
console.log(gameName.split(''))
console.log(gameName1.split('-'))

// Way 2 : of converting a string into an Array
const newArr = Array.from(url)
// console.log(newArr)