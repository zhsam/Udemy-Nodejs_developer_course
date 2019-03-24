// https://darksky.net/dev
// seceret key: 9d5193279ddf65dd75ad962db0946cc2
// https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/37.8267,-122.4233

// npm-request (https://www.npmjs.com/package/request)

const request = require('request')

const url = 'https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/37.8267,-122.4233'

request({ url: url}, (error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data.currently)
})

