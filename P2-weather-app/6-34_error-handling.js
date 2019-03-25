const request = require('request')
const chalk = require('chalk')

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


//
// Goal: Handling errors for geocoding request
//
// 1. Setup an error handler for low-level errors
// 2. Test by disableing network request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/taipei.json?access_token=pk.eyJ1IjoiemhzYW0iLCJhIjoiY2p0b2lzaW16MDdkdjN5bGFxd2p4bGw2aSJ9.yh_dtdn411zN-nXgMod1Jg'
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/20si.json?access_token=pk.eyJ1IjoiemhzYW0iLCJhIjoiY2p0b2lzaW16MDdkdjN5bGFxd2p4bGw2aSJ9.yh_dtdn411zN-nXgMod1Jg'

request({ url: geocodeURL, json: true}, (error, response)=>{
    if(error){
        console.log("Unable to connect to map APP.")
    } else if (response.body.features.length === 0){
        console.log("Unable to find location, Try another search!")
    } 
    else{
        const lat = response.body.features[0].center[1]
        const long = response.body.features[0].center[0]
        console.log(lat+", "+long)
    }
})

