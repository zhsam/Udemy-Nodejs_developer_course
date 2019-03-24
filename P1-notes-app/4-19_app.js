const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./4-19_addNotes.js')

// Customize yargs version
yargs.version('1.1.0')

//
// Challenge: Add an option to yargs
//
// 1. setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!

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
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('Removing the note!')
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read a specific note',
    handler: function(){
        console.log('title: xxx')
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'listing out all the notes!',
    handler: function(){
        console.log('All the note...')
        console.log('1. XXXXXX')
        console.log('2. XXXXXX')
    }
})

// add, remove, read, list
yargs.parse() // need this line if don't want to print argv twice
