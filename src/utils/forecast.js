const request = require('request')


const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/13399c6acca58b12f19b5dc0b23d514c/' + latitude + ',' + longtitude

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)

        } else {
            callback(undefined, body.daily.data[0].summary + ' It is current ' + body.currently.temperature + ' degrees out There is a ' + body.currently.precipProbability + '% chance of rain.')


        }
        // console.log(error)
    })
}

module.exports = forecast