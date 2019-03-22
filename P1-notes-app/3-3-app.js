// Email Validation
// https://www.npmjs.com/package/validator

// Two steps for using npm modules
// 1. initialize npm in project
// 2. install modules we want

const validator = require('validator')
console.log("abs@example.com: ")
console.log(validator.isEmail("abs@example.com"))
console.log("\n")

console.log("example.com: ")
console.log(validator.isEmail("example.com"))
console.log("\n")

console.log("https://mead.io: ")
console.log(validator.isURL("https://mead.io"))
console.log("\n")

