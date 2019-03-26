const https = require('https')

url = 'https://api.darksky.net/forecast/9d5193279ddf65dd75ad962db0946cc2/40,-75'

const request = https.request(url, (response) =>{
    let data = ''
    response.on('data', (chunk) =>{
        data = data + chunk
        console.log(chunk)
    })
    response.on('end', () =>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error: ', error)
})

request.end()