// Object property shorthand

const name = 'Adrew'
const userAge = 27

// Standard
// ----------------------
// const user = {
//     name: name,
//     age: userAge,
//     location: 'Beijing'
// }

// ES6 syntax -- only when the variable name is the same with the properties.
// ----------------------
const user = {
    name,
    age: userAge,
    location: 'Beijing'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3, 
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// Destructuring
// 1. able to rename variable
// 2. variable that is not in the original object
// 3. able to set default value(only when not meet with the original in the object)
// 4. function

// const {label:productLabel, stock, rating=5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('oder',product)


