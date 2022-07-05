const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const router = require('./Routes/Router')

app.use(router)


app.listen(3333, ()=> console.log('Server online porta 3333'))