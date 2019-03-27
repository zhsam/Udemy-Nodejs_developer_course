const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views locaiton
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Sam'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About Page',
        name: 'Sam'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help Page',
        message: 'This is help page',
        name: 'Sam'
    })
})

//
// Goal: Update weather endpoint to accept address
//
// 1. No address? Send back an error message
// 2. Address? Send back the static JSON
//    - Add address property onto JSON which erturns the provided address
// 4. Test /weather and /weather?address=philadelphia

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must entered an address!'
        })
    }
    res.send({
        location: 'taipei',
        temperature: 21.5,
        address: req.query.address
    })
})

app.get('/products',(req, res)=>{

    if (!req.query.search){
        return res.send({
            error: 'You must provided a search term'
        })
    }

    console.log(req.query)
    res.send({
        products: []
    })
})

// * -- match everything else not been matched
app.get('*', (req, res) => {
    res.render('404',{
        title: '404',
        name: 'Sam',
        errorMessage: 'Page not found!'
    })
})



app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})



