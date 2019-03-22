const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Sam.')

//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append the file
// 2. Run the script
// 3. Check your work by opening the file and view the append text.

// answer
// https://nodejs.org/docs/latest-v11.x/api/fs.html#fs_fs_appendfilesync_path_data_options
fs.appendFileSync('notes.txt', '\nNice to meet you!')
fs.appendFileSync('notes.txt', '\nNice course to take!')

// 