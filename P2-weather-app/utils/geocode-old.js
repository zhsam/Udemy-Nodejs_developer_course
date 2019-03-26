const request = require('request')

const geocode = (address, callback) => {
    // if address contains special characters(question mark, space...)
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiemhzYW0iLCJhIjoiY2p0b2lzaW16MDdkdjN5bGFxd2p4bGw2aSJ9.yh_dtdn411zN-nXgMod1Jg'
    
    request({ url: geocodeURL, json: true}, (error, response) => {
        if (error){
            callback('Unable to Connect to location service!', undefined)
        } else if (response.body.features.length === 0){
            callback("Unable to find location, Try another search!", undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })

        }
    })
}

module.exports = geocode