const request = require('request')

const forecast = (latitude, longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/' + latitude + ',' + longitude

    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }
        else if(body.error){
            callback("Unable to find location", undefined)
            } 
        else {
            const temp = body.currently.temperature
            const chance = body.currently.precipProbability
            const summary = body.daily.data[0].summary
            callback(undefined, summary+" It is currently "+temp+" degress out. There is a "+ chance +"% of chance of rain.")
        }
    })
}

module.exports = forecast