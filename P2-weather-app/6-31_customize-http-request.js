// https://darksky.net/dev
// seceret key: 9d5193279ddf65dd75ad962db0946cc2
// https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/37.8267,-122.4233

// npm-request (https://www.npmjs.com/package/request)

const request = require('request')

const url = 'https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/37.8267,-122.4233'

request({ url: url, json: true}, (error, response)=>{
    // console.log(response.body.currently)
    const temp = response.body.currently.temperature
    const chance = response.body.currently.precipProbability
    console.log("It is currently "+temp+" degress out. There is a "+chance+"% of chance of rain.")

})

//
// Goal: Print a small forecast to the use
//
// 1. Print: "It is currently 58.55 degress out. There is a X% of chance of rain."
// 2. Test your work!