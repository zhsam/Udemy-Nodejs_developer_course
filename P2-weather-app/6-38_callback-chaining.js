const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//
// Goal: Accept location via command line arguments
//
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was probided
// 4. Test your work with a couple locations

const userInput = process.argv[2]

if (!userInput){
    console.log("please provide an address!")
} else {
    geocode(userInput, (error, data) => {
        if(error){
            return console.log("Error: ", error)
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log('Error: ', error)
            }
            console.log('location: ' + data.location)
            console.log('weather: ' + forecastData)
        })
        
    })
}




