const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000


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
// Goal: Wire up /weather
//
// 1. Require geocode/forecast into app.js
// 2. Use the address to geocode
// 3. Use the coordinates to get forecast
// 4. Send back the real forecast and location

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must entered an address!'
        })
    } else{
        const userInput = req.query.address
        geocode(userInput, (error, {latitude, longitude, location} = {}) => {
            if(error){
                return res.send({error})
            }
            forecast(latitude, longitude, (error, forecastData) => {
                if(error){
                    return res.send({error})
                }
                res.send({
                    location: location,
                    forecast: forecastData,
                    address: req.query.address
                })
            })
                
        })    
    }
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

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})





