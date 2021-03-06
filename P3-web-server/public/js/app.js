console.log('Client side javascript file is loaded.')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

//
// Goal: Fetch weather!
//
// 1. Setup a call to fetch to fetch weather for Boston
// 2. Get hte parse JSON response
//      - If error property, print error
//      - If no error property, print location and forecast
// 3. Refresh the browser and test your work

// fetch('http://localhost:3000/weather?address=boston').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         } else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'

//
// Goal: Render content to pagaraphs
//
// 1. Select the second message p from JavaScript
// 2. Just before fetch, render loading message and empty p
// 3. If error, render error
// 4. If no error, render location and forecast
// 5. Test your work! Search for errors ans for valid locations



// e --> event
weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault() // prevent refresh the browser
    const location = search.value
    
    const url = '/weather?address=' + location

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
            } else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})

//
// Goal: Use input value to get weather
//
// 1. Migrate fetch call into the submit call back
// 2. Use the search text as the address query string
// 3. Submit the form with no value inside invalid/valid