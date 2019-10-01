const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicG9rYXJpIiwiYSI6ImNrMDh5aHJrdTAzN3MzbXVidjcxZDRtcnUifQ.lAVhQ99d7KPLr8vQEutm2g'



    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unacle', undefined)
        } else if (body.features.length === 0) {
            callback('find location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }

        // console.log(latitude, longitude)
    })
}

module.exports = geocode