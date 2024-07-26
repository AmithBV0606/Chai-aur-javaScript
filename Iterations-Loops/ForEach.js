// ForEach Loop :

const coding = ["Js", "Ruby", "Java", "Python", "Cpp"];

// Using normal function
coding.forEach(function(item, index){
    console.log(index, ":" ,item);
})

// Callback function runs for every iteration of the array and takes the array's values as it's parameters

// Using Arrow function
coding.forEach((e) => {
    console.log(e.toUpperCase());
});

console.log("____________________________________________________________________________")

// Passing a outside function to forEach loop :
function printME(item) {
    console.log(item);
}
  
coding.forEach(printME);

console.log("____________________________________________________________________________")

// Other parameters for forEach :
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

console.log("____________________________________________________________________________")

// ForEach on array of Objects :
const myCoding = [
    {
      languageName: "JavaScript",
      languageFileName: ".JS",
    },
    {
      languageName: "Java",
      languageFileName: ".java",
    },
    {
      languageName: "Python",
      languageFileName: ".py",
    },
];

myCoding.forEach( (item) => {
    console.log(item.languageName)
})

// forEach doesn't returns anything, so you can't hold forEach in a variable.

// const values = myCoding.forEach( (item) => { // This cannot be done
//   console.log(item.languageName)
// })