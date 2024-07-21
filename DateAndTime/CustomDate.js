// Custom dates

let newDate1 = new Date(2024, 0, 10)  // YYYY/ Month / Date
console.log(newDate1.toDateString())
// Month count starts from "0" in JavaScript

let newDate2 = new Date(2024, 0, 10, 30, 10, 10) // Date with time
console.log(newDate2.toLocaleString())

// Customized Dates
let newDate3 = new Date("2024-01-01")
console.log(newDate3.toLocaleString())

let newDate4 = new Date("01-01-2024")
console.log(newDate4.toLocaleString())

// Timestamps : Useful while designing Quizes and Polls
let myTimeStamps = Date.now()
console.log(myTimeStamps)

console.log(newDate4.getTime())

// To seconds => Imp
console.log(Math.floor(Date.now()/1000))

console.log("_______________________________________________________________________")

let hosaDate = new Date()
console.log(hosaDate)
console.log(hosaDate.getMonth())
console.log(hosaDate.getDay())

console.log("_______________________________________________________________________")

// Most useful
console.log(hosaDate.toLocaleString('default', {
    weekday: "narrow",
}))