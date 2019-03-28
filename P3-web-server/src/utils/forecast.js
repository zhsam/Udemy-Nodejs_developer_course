const request = require('request')

//
// Goal: Add new data to forecast
//
// 1. Update the forecast string to include new data
// 2. Commit your changes
// 3. Push your changes to GitHub and deploy to Heroku
// 4. Test your work in the live application


const forecast = (latitude, longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/' + latitude + ',' + longitude + '?lang=zh-tw&units=si'
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
            const tempLow = body.daily.data[0].temperatureMin
            const tempHigh = body.daily.data[0].temperatureMax
            callback(undefined, summary+" 現在溫度: "+temp+" 攝氏。 降雨機率："+ chance +"% \n 最低氣溫: "+tempLow+"\n"+"最高氣溫: "+tempHigh)
        }
    })
}

module.exports = forecast