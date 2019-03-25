// // Call back function: 
// //   a function that we provide to another function 
// //   with the intention that it call later on.

// setTimeout(()=>{
//     console.log('Two seconds are up')
// },2000)

// const names = ['Chen','Cheng', 'Ho']
// const shortNames = names.filter((name)=>{
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(()=>{
//         const data = {
//             latitude: 0,
//             longtitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data)=>{
//     console.log(data)
// })

// Challenge: http://links.mead.io/callback

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// if asynchornous --> use `callback` instead of `return`
const add = (num1, num2, callback)=>{
    setTimeout(()=>{    
        callback(num1 + num2)
    },2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

