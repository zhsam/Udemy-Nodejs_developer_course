const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return "Your Notes..."
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title == title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.green.inverse('Note title taken'))
    }
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        console.log('JSON not exist')
        console.log('creating JSON')
        return []
    }
}

//
// 4-20-2 Challenge: Wire up removeNote
//
// 1. Load exisiting notes
// 2. use array filter method to remove the matching note (if any)
// 3. Save the newly created array
// 4. Test your work with a title that exists and a title that doesn't exist

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))        
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}