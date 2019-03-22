const chalk = require('chalk')
const getNotes = require('./3-10_notes.js')

const command = process.argv[2]

console.log(process.argv)

if(command === 'add'){
    // add a new note
    console.log('Adding Notes!')
} else if (command === 'remove'){
    console.log('Removing Note!')
}

