import axios from 'axios'

const CotacoesFormat = axios.create({
    baseURL: 'http://localhost:3333/cotacoes'
})

export default CotacoesFormat