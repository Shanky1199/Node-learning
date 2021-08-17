const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cfee875fc5cbee4502cb33888df81a87&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.current.temperature )
        }
    })
}

module.exports = forecast