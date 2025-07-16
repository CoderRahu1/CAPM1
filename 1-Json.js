/////////////////////////////////////////////////

// Program 1

// Getting file below

// const fs = require('fs')

// const databuffer = fs.readFileSync('1-json.json', JSON)

// const dataJson = databuffer.toString()

// const data = JSON.parse(dataJson)

// console.log(data.title)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// Convert JavaScript object into JSON string
// const bookJSON = JSON.stringify(book) // so this line will make the object json object with double quotes for 'title'

// fs.writeFileSync('1-json.json', bookJSON)

//// console.log(bookJSON)  // "title":"Ego is the Enemy","author":"Ryan Holiday"}

// // Convert JSON string into object
// const bookObject = JSON.parse(bookJSON)
// console.log(bookObject.title) // Print: Ego is the Enemy printed

/////////////////////////////////////////////////
// Program 2 : 

const fs = require('fs')

const databuffer = fs.readFileSync('1-json.json')

const dataJSON = databuffer.toString()

const user = JSON.parse(dataJSON)

user.name = 'Rahul'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)

