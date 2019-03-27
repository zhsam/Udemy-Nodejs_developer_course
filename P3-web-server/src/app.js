const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Andrew Mead'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About Page',
        name: 'Andrew'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help Page',
        message: 'This is help page'
    })
})

//
// Goal: Create a template for help page
//
// 1. Setup a help template to render a help message to the screen
// 2. Setup the help route and render the template with an example message
// 3. Visit the route in the browser


app.get('/weather', (req, res) => {
    res.send({
        location: 'taipei',
        temperature: 21.5
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})



