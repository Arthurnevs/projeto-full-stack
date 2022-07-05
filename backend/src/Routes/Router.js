const { Router } = require('express')

const routes = Router()
const UserController = require('../Controllers/UserController')
const SessionController = require('../Controllers/SessionController')
const Cotacoes = require('../Controllers/Cotacoes')
const BitCoin = require('../Controllers/BitCoin')

routes.post('/user',UserController.create)
routes.post('/session',SessionController.login)

routes.get('/cotacoes',Cotacoes.retorno)
routes.get('/bitcoin',BitCoin.retorno)

module.exports = routes