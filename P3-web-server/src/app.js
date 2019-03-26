const express = require('express')

const app = express()

// configure specific url
app.get('', (req, res) => {
    res.send("<h1>Weather</h1>")
})

app.get('/help', (req, res) => {
    res.send({
        name: "Sam",
        age: 24
    },{
        name: "Sarah"
    })
})

//
// Goal: Update routes
//
// 1. Setup about route to render a title with HTML
// 2. Setup a weather route to send back JSON
//      - Object with forecast and location string
// 3. Test your work by visiting both in browser

app.get('/about', (req, res) => {
    res.send("<h3>This is some about me! </h3>")
})

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



