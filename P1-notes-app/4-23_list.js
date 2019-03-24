const fs = require('fs')
const chalk = require('chalk')

//
// Goal: Wire up read command
//
// 1. Setup --title option for read command
// 2. Create readNote in notes.js
// - Search for note by title
// - Find note and print title(styled) and body(plain)
// 3. Have the command handler call the function
// 4. Test your work by running a couple commands

const addNote = (title, body)=>{
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title == title) // get all items
    const duplicateNote = notes.find((note)=> note.title == title) // stop when find the first match

    // if(duplicateNote === undefined)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))        
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const targetNote = notes.find((note)=>note.title === title)
    if(targetNote){
        console.log(chalk.inverse('title: '+ targetNote.title))
        console.log('body: '+ targetNote.body)
    } else {
        console.log(chalk.red.inverse('Notes not found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach((note)=> console.log('title: '+ note.title))
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{
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

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}