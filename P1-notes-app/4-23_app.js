const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./4-23_list.js')

//
// 4-23 Challenge: Wire up list command
//
// 1. Create and export list notes from notes.js
// - "Your notes" using chalk
// - Print note title for each note
// 2. Call listNotes from command handler
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

// create list command
yargs.command({
    command: 'list',
    describe: 'listing out all the notes!',
    handler(){
        notes.listNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read a specific note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// add, remove, read, list
yargs.parse() // need this line if don't want to print argv twice
