const request = require('request')

const forecast = (latitude, longitude,callback)=>{
 
    const url = 'http://api.weatherstack.com/current?access_key=c085b1301fd814a13bc57ab7469ce56b&query=' + latitude + ',' + longitude + '&unit=f'

    request({url : url, json: true}, (error,response) => {
    if(error) {
        console.log('Unable to connect to location services')

    }
    else if (response.body.error) {
        console.log('Unable to find location. Try another search.')
    }
    else {

        // console.log(response.body.location.name)

        callback(undefined,response.body.current.weather_descriptions[0] + " It is currently " + response.body.current.temperature +  " degrees out ")
    }
}
)




}

module.exports = forecast