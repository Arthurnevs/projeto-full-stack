const { Router } = require('express')

const routes = Router()
const UserController = require('../Controllers/UserController')
const SessionController = require('../Controllers/SessionController')

routes.post('/user',UserController.create)
routes.post('/session',SessionController.login)

module.exports = routes