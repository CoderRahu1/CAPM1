const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=c085b1301fd814a13bc57ab7469ce56b&query=New York'



const request = http.request(url, (response)=>{

    let data = ''
    response.on('data', (chunk)=> {
        data = data + chunk.toString()

    })
    response.on('end', (chunk)=> {

        const body = JSON.parse(data)
        console.log(body)

    })

        response.error('error', (error)=> {
        console.log('An Error : ', error)

    })



})