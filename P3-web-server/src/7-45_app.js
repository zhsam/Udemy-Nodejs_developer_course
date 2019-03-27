const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

//
// Goal: Create 2 more html page
//
// 1. Create a html page for about with "about" title showing up
// 2. Create a html page for help with "help" title showing up
// 3. Remove the old route handlers
// 4. Visit both in the browser to test your work

app.get('/weather', (req, res) => {
    res.send({
        location: 'taipei',
        temperature: 21.5
    })
})

// we owned: app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})



