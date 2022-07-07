const axios = require('axios')

const api = axios.create({
        baseURL: 'https://economia.awesomeapi.com.br/json/daily/USD-BRL/5'
})

module.exports = api


