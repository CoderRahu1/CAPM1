/////////////////////////////////////////

// Program 1 : Destructuring ES6 Syntax

// const product = {
//     label : 'Red Notebook',
//     price : 3,
//     stock : 201,
//     salePrice : undefined
// }

// const {label: productLabel,stock,rating = 5} = product   // Destructuring storing values in individual variables.

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

/////////////////////////////////////////

// Program 2 : Destructuring ES6 Syntax

const product = {
    label : 'Red Notebook',
    price : 3,
    stock : 201,
    salePrice : undefined
}

const transaction = (type, {label, stock})=>{
    console.log(type,label,stock)
}

transaction('order', product)

