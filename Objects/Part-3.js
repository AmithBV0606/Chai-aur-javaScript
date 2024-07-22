// Object De-Structuring

const course = {
    courseName: "Js in Hindi",
    price: "1000",
    courseInstructor: "Amith"
}

// Normal way :
// course.courseInstructor

// De-structure
const {price} = course;
console.log(price) // 1000

// Custom name
const {courseInstructor:ins} = course
console.log(ins)

// de-structuring in React
const navbar = ({company}) => {

}

navbar(company = "Amith")

// API

const data = fetch("https://api.github.com/users/AmithBV0606");

data.then((res) => {
    const newData = res.json();
    return newData;
}).then((newData) => {
    const latest = JSON.stringify(newData)
    console.log(latest)
})


// API data in JSON format
// {
//     "name":"hitesh",
//     "coursename":"Js in Hindi",
//     "price":"free"
// }

// API data in Arrays format
// [{},{},{}]