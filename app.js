
////////////////////////////////////////////////////////////////

//  Program 1 - used for writing files using fs 
// const fs = require('fs')  // using the require function i am getting the  library fs

//fs.writeFileSync('notes.txt', 'Node js CAPM training');


// fs.appendFileSync('notes.txt', "SAP BTP ");


////////////////////////////////////////////////////////////////
// Program 2 - Creating generic application

// const name = require('./util.js')
// // const name = 'Rahul'

// console.log(name)

/////////////////////////////////////////////////////////////////

// Program 3 -> program 2 in util.js

// const add  = require('./util.js');

// const sum = add(4,2)

// console.log(sum)

////////////////////////////////////////////////////////////////

// Program 4 

// const getNotes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

// npm is the package manager that allows you to install and use 3rd party npm libraries from email to file uploading
// npmjs.com

///////////////////////////////////////////////////////////////

/// Program 5

// const validator = require('validator')

// console.log(validator.isEmail('test@gmail.com'))
// console.log(validator.isURL('https/mead.io'))

///////////////////////////////////////////////////////////////

// Program 6
// const chalk = require('chalk')

// const greenmsg = chalk.green.bold('Success')

// console.log(greenmsg)
///////////////////////////////////////////////////////////////

// Program 7 

// const chalk = require('chalk')
  
// const greenmsg = chalk.green.inverse.bold('Success')
// console.log(greenmsg)


///////////////////////////////////////////////////////////////

// Program 8

console.log('Starting')

setTimeout(()=>{
    console.log('2 second timer')
}, 2000
)

console.log('Stopping')
///////////////////////////////////////////////////////////////






