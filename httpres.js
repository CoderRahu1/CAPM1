const https = require('https')

const url = 'https://api.weatherstack.com/current?access_key=c085b1301fd814a13bc57ab7469ce56b&query=New York'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        try {
            const body = JSON.parse(data)
            console.log(body)
        } catch (e) {
            console.error('Error parsing response:', e)
        }
    })
})

// Properly handle request errors
request.on('error', (error) => {
    console.log('An error:', error)
})

// Don’t forget to end the request
request.end()
