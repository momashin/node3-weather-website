const request = require('request')

const forecast = (latitude, longitude ,callback) => {
    const url = 'https://api.darksky.net/forecast/b3f17f076f5010eb5e8796cd9a0d60aa/'+ latitude + ',' + longitude + '?units=si'
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined) }
        else if (body.daily.data.lenth === 0) {
            callback('Unable to find location.', undefined)}
        else {
            callback(undefined,            
                body.daily.data[0].summary+'\nIt is currently '+ body.currently.temperature+' degress outside.\nThere is a '+body.currently.precipProbability+'% chances at rain.')
            }
        })
        
    }
  

module.exports = forecast

