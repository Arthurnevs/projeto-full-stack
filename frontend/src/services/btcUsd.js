import axios from 'axios'

const btcUsd = axios.create({
    baseURL: 'https://api.kraken.com/0/public/Ticker?pair=XBTusd'
})

export default btcUsd