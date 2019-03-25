// https://darksky.net/dev
// seceret key: 9d5193279ddf65dd75ad962db0946cc2
// https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/37.8267,-122.4233

// npm-request (https://www.npmjs.com/package/request)

const request = require('request')

const url = 'https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/37.8267,-122.4233?lang=es'

request({ url: url, json: true}, (error, response)=>{
    // console.log(response.body.currently)
    const temp = response.body.currently.temperature
    const chance = response.body.currently.precipProbability
    const summary = response.body.daily.data[0].summary
    console.log(summary+" It is currently "+temp+" degress out. There is a "+ chance +"% of chance of rain.")
})
