const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./4-22_arrow_function.js')

//
// 4-22 Challenge: Refactor all functions
//
// 1. If function is a method, use ES6 method definition syntax
// 2. Otherwise, use most concise arrow function possible
// 3. Test your work!


// Customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true, // compulsory
            type: 'string' // at least an empty string as default
        },
        body:{
            description: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe: 'Note\'s title to be deleted.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read a specific note',
    handler(){
        console.log('title: xxx')
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'listing out all the notes!',
    handler(){
        console.log('All the note...')
        console.log('1. XXXXXX')
        console.log('2. XXXXXX')
    }
})

// add, remove, read, list
yargs.parse() // need this line if don't want to print argv twice
