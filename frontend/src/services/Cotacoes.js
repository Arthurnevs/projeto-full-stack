import axios from 'axios'

const Cotacoes = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/USD-BRL'
})

export default Cotacoes