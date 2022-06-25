const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

require('dotenv').config()
app.use(cors())
app.use(express.static('./src/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(process.env.PORT || 3003)