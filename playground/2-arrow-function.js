// (1) standard function
// const square = function(x){
//     return x * x
// }

// (2) ES6 arrow funciton -- long form version
// const square = (x) => {
//     return x * x
// }

// (3) ES6 arrow funciton -- if function is very simple
// const square = (x) => x * x
// console.log(square(2))

// =========================================

// (1)
// const event = {
//     name: 'Birthday Party',
//     printGuestList: function(){
//         console.log('Guest list for ' + this.name)
//     }
// }
// event.printGuestList()



// (2) alternative syntax for setting functions in constant
// Arrow function don't bind their own "this" value

const event = {
    name: 'Birthday Party',
    guestList: ['Sam', 'Adam', 'Ali'],
    printGuestList(){
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending ' + this.name)
        })
    }
}
event.printGuestList()

