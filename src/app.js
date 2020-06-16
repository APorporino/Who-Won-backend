const express = require('express')
require('./db/mongoose')
const mainRouter = require('./routers/main')

const app = express();

//automatically parses incoming json
app.use(express.json())

app.use(mainRouter)

module.exports = app

