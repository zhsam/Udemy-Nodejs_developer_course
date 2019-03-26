const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//
// Goal: Use both destructuing and property shothand in weather app
//
// 1. Use destructuring in app.js forecast.js, geocode.js
// 2. Use property shorthand in forecast.js and geocode.js
// 3. Test your work and ensure app still works

const userInput = process.argv[2]

if (!userInput){
    console.log("please provide an address!")
} else {
    geocode(userInput, (error, {latitude, longitude, location}) => {
        if(error){
            return console.log("Error: ", error)
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log('Error: ', error)
            }
            console.log('location: ' + location)
            console.log('weather: ' + forecastData)
        })
        
    })
}




