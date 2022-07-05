const axios = require('axios')

const bit = axios.create({
        baseURL: 'https://api.kraken.com/0/public/Ticker?pair=XBTeur'
})

module.exports = bit


