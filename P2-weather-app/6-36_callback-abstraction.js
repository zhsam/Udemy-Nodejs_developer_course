const request = require('request')
const chalk = require('chalk')

const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/37.8267,123.222?lang=es'

// request({ url: url, json: true}, (error, response)=>{
//     if(error){
//         console.log(chalk.red.inverse('Unable to connect to weather service!'))
//     }
//     else if(response.body.error){
//             console.log("Unable to find location")
//         } 
//     else {
//         const temp = response.body.currently.temperature
//         const chance = response.body.currently.precipProbability
//         const summary = response.body.daily.data[0].summary
//         console.log(summary+" It is currently "+temp+" degress out. There is a "+ chance +"% of chance of rain.")
//     }
    
// })

geocode('Boston', (error, data) => {
    console.log("Error: ", error)
    console.log("Data: ", data)
})
