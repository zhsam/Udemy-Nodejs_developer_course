// 
// Challenge: Use the chalk library in your project
//

// Chalk
// https://www.npmjs.com/package/chalk

// 1. Insyall version 2.4.1 of chalk
// 2. Load Chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
//
// Bonus: Use docs to mess around with other styles. Make text bold and inversed.

const chalk = require('chalk')

console.log(chalk.green('Success!'))
console.log(chalk.bold("Nice Challenge!"));
console.log(chalk.inverse("This is how inverse do!"));
console.log(chalk.magenta.bold.inverse("Let's mixed it up!"));
