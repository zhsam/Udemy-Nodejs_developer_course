const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// // object --> string
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// fs.writeFileSync('1-json.json', bookJSON)

// // string --> object
// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

// // read in the JSON
// const dataBuffer = fs.readFileSync('1-json.json')
// // read to string
// const dataJSON = dataBuffer.toString()
// // parse to JSON
// const data = JSON.parse(dataJSON)
// console.log(data.title)

//
// Challenge
//
// JSON: links.mead.io/json-sample
// 1. Load and Parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

// Load and Parse JSON
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
console.log(user)

// Change the property
user.name = 'Sam'
user.age = 24

// Stringify
const userString = JSON.stringify(user)
console.log(userString)

// Overwrite
fs.writeFileSync('1-json.json', userString)