import axios from 'axios'

const btcEur = axios.create({
    baseURL: 'https://api.kraken.com/0/public/Ticker?pair=XBTeur'
})

export default btcEur