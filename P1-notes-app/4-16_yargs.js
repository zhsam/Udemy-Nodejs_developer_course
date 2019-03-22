const chalk = require('chalk')
const yargs = require('yargs')

const getNotes = require('./3-10_notes.js')

// console.log('results from process.argv');
// console.log(process.argv);
// console.log('results from yargs.argv');
// console.log(yargs.argv);

// Customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title'
        }

    },
    handler: function(argv){
        console.log('Adding a new note!', argv)
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

//
// Challenge: Add two new commands
//
// 1. Setup command to suppor "list" command (print placeholder messeage for now)
// 2. Setup command to suppor "read" command (print placeholder messeage for now)
// 3. Test your work by running both commands and ensure correct output.

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
console.log(yargs.argv)

