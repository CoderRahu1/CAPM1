
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

// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 second timer')
// }, 2000
// )

// setTimeout(()=>{
//     console.log('0 second timer')
// }, 0
// )

// console.log('Stopping')
///////////////////////////////////////////////////////////////

// Program 9 : Weather Application consuming apis

// const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=c085b1301fd814a13bc57ab7469ce56b&query=New York'

// request({ url: url }, (error, response) => {

//     const data = JSON.parse(response.body)

//     // console.log(data.location.name)
//     console.log(response)    // this was printing whole data
// })

////////////////////////////////////////////////////////////
    
// PROGRAM 10 : Customizing above code for HTTP Request using json:true

// const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=c085b1301fd814a13bc57ab7469ce56b&query=New York'

// request({url: url, json: true}, (error, response) =>{
//     // const data = JSON.parse(response.body)   // no need for this since we are directly using json: true converting 
//     // console.log(response.body.current)
//     console.log('It is current ' + response.body.current.temperature + " degrees out. It feels like " +response.body.current.feelslike + " degress out")

// })

////////////////////////////////////////////////////////////
    
// PROGRAM 11 : Handling the error

// const request = require('request')



// const url = 'http://api.weatherstack.com/current?access_key=c085b1301fd814a13bc57ab7469ce56b&query='

// request({url : url, json: true}, (error,response) => {
//     if(error) {
//         console.log('Unable to connect to location services')

//     }
//     else if (response.body.error) {
//         console.log('Unable to find location. Try another search.')
//     }
//     else {

//         console.log(response.body.location.name)
//     }
// }
// )

///////////////////////////////////////////////////////////////////////


// Prorgam 12 : Callback abstraction

// const request = require('request')
// const forcast = require('./forecast')
// const { error } = require('console')



// forcast(40.714,-74.006,(error, data)=>{
//     console.log('Error', error)
//     console.log('Data',data)
// })

///////////////////////////////////////////////////////////////////////

// Program 13 : Using Express js 

const express = require('express')   // loading express library
const forecast = require('./forecast')

const app = express()

app.get('', (req,res)=>{

    res.send('<h1> RAHULS CAPM TRAINING</h1>')
})

// help page
app.get('/help', (req,res)=>{
    res.send([
        {
            name : 'Rahul'
        },
        {
            name : 'AK'
        }   
    ])
})

// about page
app.get('/about', (req,res)=>{
    res.send('<h1>about page</h1>')
})

// weather page
app.get('/weather', (req,res)=>{
    res.send({
        forecast : 'It is snowing',
        location : 'USA'
})
})


app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})

// app.com
// app.com/help
// app.com/about





