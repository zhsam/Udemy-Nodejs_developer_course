const request = require('request')

const url = 'https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/37.8267,-122.4233?lang=es'

request({ url: url, json: true}, (error, response)=>{
    // console.log(response.body.currently)
    const temp = response.body.currently.temperature
    const chance = response.body.currently.precipProbability
    const summary = response.body.daily.data[0].summary
    console.log(summary+" It is currently "+temp+" degress out. There is a "+ chance +"% of chance of rain.")
})


// Geocoding
// Address -> Lat/Long -> Weather
// ----------------
// mapbox: https://account.mapbox.com/
// Access token: pk.eyJ1IjoiemhzYW0iLCJhIjoiY2p0b2lzaW16MDdkdjN5bGFxd2p4bGw2aSJ9.yh_dtdn411zN-nXgMod1Jg

//
// Goal: Print the lat/long for Los Angeles
//
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longtitude to the terminal
// 4. Test your work!


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiemhzYW0iLCJhIjoiY2p0b2lzaW16MDdkdjN5bGFxd2p4bGw2aSJ9.yh_dtdn411zN-nXgMod1Jg'

request({ url: geocodeURL, json: true}, (error, response)=>{
    // console.log(response.body.currently)
    const lat = response.body.features[0].center[1]
    const long = response.body.features[0].center[0]
    console.log(lat+", "+long)
})


