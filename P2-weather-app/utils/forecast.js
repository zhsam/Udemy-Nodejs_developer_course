const request = require('request')

const forecast = (lat, long,callback) => {
    const url = 'https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/'+lat+','+long+'?lang=es'

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }
        else if(response.body.error){
            callback("Unable to find location", undefined)
            } 
        else {
            const temp = response.body.currently.temperature
            const chance = response.body.currently.precipProbability
            const summary = response.body.daily.data[0].summary
            callback(undefined, summary+" It is currently "+temp+" degress out. There is a "+ chance +"% of chance of rain.")
        }
    })
}

module.exports = forecast