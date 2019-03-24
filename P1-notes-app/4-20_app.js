const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./4-20_delete.js')



//
// 4-20-1 Challenge: Add an option to yargs
//
// 1. setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"

// 
// 4-20-3 Challenge: Use chalk to provide useful logs for remove
//
// 1. If a note is removed, print "Note removed!" with a green backgound.
// 2. If no note is removed, print "Not found!" with a red background


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
    handler: function(argv){
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
    handler: function(argv){
        notes.removeNote(argv.title)
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
